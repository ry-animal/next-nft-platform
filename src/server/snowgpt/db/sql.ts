import { OpenAI } from "langchain/llms/openai";
import { SqlDatabase } from "langchain/sql_db";
import { createSqlAgent, SqlToolkit } from "langchain/agents";
import fs from "fs";
import { OpenAIModel, SCChatMessage, SCQueryResult } from "../types";
import { PromptTemplate } from "langchain";
import { nfts, Os_nft, PrismaClient } from "@prisma/client";

class Cache {
  static cache: Map<string, string> = new Map();
}

export async function sqlQuery(
  search: string,
  prisma: PrismaClient
): Promise<SCQueryResult> {
  if (!Cache.cache.has(search)) {
    await prisma.$executeRaw`set sort_buffer_size=2097152`;
    const template =
      "Given an input question, create a syntactically correct mysql query to run.\n\
    Only use the following tables to fetch information about nfts:\n\
    \
    table 'Os_nft' with fields: [tokenId,collectionId,owner,price,metaData,description,rarity,title,metaDataUrl,createdDate DateTime,closingDate,listingTime,expirationTime,orderHash,permalink,imageUrl,attributes]\n\
    table 'Os_collection' with fields: [id,status,title,description,metaData,contractAddress,saleContract,tokenCount,created_at,updatedAt,thumb,creator,blockchain,creatorRoyalty]\n\
    \
    Limit the amount of results to 50.\n\
    Randomise the order with ORDER BY rand().\n\
    rarity can be mythic, legendary, epic, rare, uncommon, and common.\n\
    Try to search with wildcards instead of exact text matches.\n\
    Os_nft collectionId corresponds with contractAddress in Os_collection\n\
    make sure to declare the table before every variable like this: Os_nft.tokenId\n\
    Use simple where clauses to join tables and only executable sql queries, no templates\n\
    Also look for keywords in metadata, description and attributes\n\
    Return all the fields from the Os_nft table\n\
    price field is in MATIC, so 1 MATIC is 1.0\n\
    Question: {question}\n\
    SQLQuery: ";

    const prompt = new PromptTemplate({
      template,
      inputVariables: ["question"],
    });

    const question = await prompt.format({
      question: search,
    });

    const model = new OpenAI({
      openAIApiKey: process.env.OPENAI_API_KEY,
      modelName: OpenAIModel.GPT4,
      temperature: 0,
      maxTokens: 100,
    });
    console.log("###SQL QUESTION:>>>" + question);
    const res = (await model.call(question)).trim();
    console.log("###SQL:>>>" + res);
    Cache.cache.set(search, res);
    let resultAnswer = "[";

    const result = (await prisma.$queryRawUnsafe(res)) as Os_nft[];
    for (let i = 0; i < result.length; i++) {
      if (i > 0) resultAnswer += ",";
      resultAnswer +=
        "{ tokenId:" +
        result[i]!.tokenId +
        " contractAddress:'" +
        result[i]!.collectionId +
        " title:'" +
        result[i]!.title +
        "' price:" +
        result[i]!.price +
        " }";
    }
    resultAnswer += "]";

    return {
      query: res,
      result: result == undefined ? [] : result,
      resultType: "nft",
    };
  } else {
    console.log("###CACHE SQL:>>>" + Cache.cache.get(search));
    const res = Cache.cache.get(search) as string;
    const result = (await prisma.$queryRawUnsafe(res)) as Os_nft[];
    let resultAnswer = "[";
    for (let i = 0; i < result.length; i++) {
      if (i > 0) resultAnswer += ",";
      resultAnswer +=
        "{ tokenId:" +
        result[i]!.tokenId +
        " contractAddress:'" +
        result[i]!.collectionId +
        " title:'" +
        result[i]!.title +
        "' price:" +
        result[i]!.price +
        " }";
    }
    resultAnswer += "]";

    return {
      query: res,
      result: result == undefined ? [] : result,
      resultType: "nft",
    };
  }
}
