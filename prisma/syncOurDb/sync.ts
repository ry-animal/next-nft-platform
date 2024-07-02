import { Nft, Os_nft, PrismaClient } from "@prisma/client";

import fs from "fs";
import { getToken, weiToMatic } from "../../src/core/web3/currency";
const prisma = new PrismaClient({ log: ["error", "warn"] });
async function main() {
  console.log("Fetching nfts from opensea");

  //await prisma.os_collection.deleteMany({ where: {} });
  //await prisma.os_nft.deleteMany({ where: {} });

  let counter = 0;
  const indb: Map<string, boolean> = new Map();
  const collections: Map<string, boolean> = new Map();
  const nfts = await prisma.os_nft.findMany({
    where: {},
    select: {
      identifier: true,
      collectionId: true,
    },
  });
  for (const nft of nfts) {
    indb.set(nft.identifier, true);
    collections.set(nft.collectionId, true);
  }

  console.log("nfts in db", indb.size);
  console.log("collections in db", indb.keys());

  const scNfts = await prisma.nft.findMany({
    where: {},
  });
  for (const scnft of scNfts) {
    counter++;
    const nft = await parseNft(scnft);
    if (!nft) continue;
    if (indb.has(nft[0].identifier)) {
      console.log("[WARNING!] NFT already in db", nft[0].identifier);
      continue;
    }
    console.log(
      "[NFT] Creating nft " + nft![1].contractAddress + " " + nft![0].tokenId
    );
    await prisma.os_nft.create({ data: nft[0] });
    if (!collections.has(nft![1].contractAddress)) {
      collections.set(nft![1].contractAddress, true);
      console.log(
        "[COLLECTION] Creating collection " + nft![1].contractAddress
      );
      await prisma.os_collection.create({ data: nft![1] });
    }
    console.log(
      counter +
        ") Creating nft " +
        nft![0].tokenId +
        " " +
        nft![1].contractAddress
    );
  }
}

main();

async function parseNft(nft: Nft): Promise<[any, any] | undefined> {
  const collection = await prisma.collection.findUnique({
    where: {
      id: nft.collectionId,
    },
  });
  return [
    {
      identifier: safeString(nft.tokenId + "_" + collection?.contractAddress),
      thumb: safeString((nft.metaData as any).image),
      collectionId: safeString(collection?.contractAddress!),
      status: "LISTED",
      history: "",
      createdAt: safeNumber(nft.createdAt?.getDate()),
      updatedAt: safeNumber(nft.updatedAt?.getDate()),
      tokenId: safeString(nft.tokenId.toString()),
      title: safeString((nft.metaData as any).name),
      description: safeString((nft.metaData as any).description),
      metaData: JSON.stringify(nft.metaData),
      owner: safeString(nft.owner),
      price: parseFloat(weiToMatic(nft.price)),
      metaDataUrl: safeString(nft.metaDataUrl),
      isListed: true,
      rarity: "common",
      platForm: "snowcrash",
      token: getToken(collection?.blockchain!),
      createdDate: nft.createdAt,
      closingDate: nft.createdAt,
      listingTime: 0,
      expirationTime: 0,
      orderHash: safeString(""),
      permalink: safeString("/nft/" + nft.id),
      imageUrl: safeString(safeString((nft.metaData as any).image)),
      attributes: safeString(JSON.stringify((nft.metaData as any).attributes)),
    },
    {
      status: "LISTED",
      saleContract: "",
      tokenCount: 0,
      created_at: 0,
      updatedAt: 0,
      thumb: "",
      creator: "",
      creatorRoyalty: "",
      blockchain: "MATIC",
      title: safeString((collection?.metaData as any).name),
      description: safeString((collection?.metaData as any).description),
      contractAddress: safeString(collection?.contractAddress!),
      metaData: JSON.stringify({
        imageUrl: safeString(""),
      }),
    },
  ];
}

function safeNumber(input?: number): number {
  return input ? input : 0;
}

function safeString(input?: string): string {
  if (!input) {
    return "";
  }
  return input.length > 500 ? input.substring(0, 500) : input;
}
