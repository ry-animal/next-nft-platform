import {
  ChatCompletionRequestMessage,
  ChatCompletionResponseMessage,
  Configuration,
  CreateChatCompletionRequest,
  OpenAIApi,
} from "openai";
import { OpenAIModel, SCChatMessage } from "./types";

import { ChatOpenAI } from "langchain/chat_models/openai";
import { OpenAI } from "langchain/llms/openai";
import {
  SystemChatMessage,
  HumanChatMessage,
  AIChatMessage,
} from "langchain/schema";
import { sqlQuery } from "./db/sql";
import { Os_collection, Os_nft, PrismaClient, nfts } from "@prisma/client";
import { prisma } from "../db";
import { PromptTemplate } from "langchain";

export interface Chatcontext {
  userAddress: string;
  stream: string;
  balance: string;
}

const template =
  "[SYSTEM]: You are a helpful assistant for our company web3 Snowcrash that explains web3 to the user.\n\
  [SYSTEM]: The user is owner of wallet {address} and has {balance} matic in his wallet\n\
  [SYSTEM]: You will always answer questions about nfts in the following format to perform a search: %DB%[search question]%DB%. Replace [search question] with the actual question.\n \
  [ASSISTENT]: Welcome to SnowGPT, how can I be of assistance?\n\
  [USER]: Can you show me some nfts with [description] in it?\n\
  [ASSISTENT]: Sure, I can help you find some NFTs with apes. %DB%What NFTs feature [description]?%DB%\n\
  ";

const chat = new OpenAI({
  openAIApiKey: process.env.OPENAI_API_KEY,
  modelName: OpenAIModel.GPT4,
  temperature: 0.0,
  maxTokens: 300,
});

export class SnowGPT {
  context: Chatcontext;

  constructor(address: string, balance: string) {
    this.context = {
      userAddress: address,
      balance: balance,
      stream: "",
    };
  }

  async setPrompt() {
    const prompt = new PromptTemplate({
      template,
      inputVariables: ["address", "balance"],
    });

    this.context.stream = await prompt.format({
      address: this.context.userAddress,
      balance: this.context.balance,
    });
  }

  async query(question: string): Promise<SCChatMessage> {
    const query = await sqlQuery(question, prisma);
    this.context.stream +=
      "\n[ASSISTANT]:" +
      "[Searched for " +
      question +
      ", #Results: " +
      query.result.length +
      "]\n";
    return {
      responder: "ASSISTANT",
      response: "",
      query: true,
      result: query.result as Os_nft[],
      resultAnswer:
        "[Searched for " +
        question +
        ", #Results: " +
        query.result.length +
        "]\n",
    };
  }

  async chat(input: string, prisma: PrismaClient): Promise<SCChatMessage> {
    const userInput = input.trim();

    console.log("User Input: " + userInput);
    const response = await chat.call(
      this.context.stream + userInput + "\n[ASSISTANT]:"
    );

    const output = await this.agentResponse(response);
    if (output.query) {
      this.context.stream += "\n[ASSISTANT]:" + response + "\n";
      this.context.stream += "\n[ASSISTANT]:" + output.resultAnswer + "\n";
    } else {
      this.context.stream +=
        " [" + output.responder + "]:" + output.response + "\n";
    }

    console.log(this.context.stream);
    return output;
  }

  async agentResponse(response: string): Promise<SCChatMessage> {
    const trimmed = response.trim();
    const split = trimmed.split("%DB%");
    let answer = "";
    let result: Os_nft[] = [];
    let responder: "ASSISTANT" | "USER" | "SYSTEM" = "ASSISTANT";
    let queryString: undefined | string = undefined;
    for (let i = 0; i < split.length; i++) {
      if (i == 0) {
        answer += split[i];
      } else if (i == 1) {
        queryString = split[i]!;
      }
    }
    return {
      response: answer,
      responder: responder,
      queryString: queryString,
      query: false,
    };
  }
}
