import { Collection, Nft } from "@prisma/client";
import { SCChatMessage } from "./server/snowgpt/types";

export interface Metadata {
  name: string;
  description: string;
  image: string;
  external_url: string;
  attributes: Attribute[];
  properties: {
    category: string;
    files: File[];
    creators: Creator[];
  };
}

export interface Creator {
  address: string;
  verified: boolean;
}

export interface File {
  type: string;
  uri: string;
}

export interface Attribute {
  trait_type: string;
  value: string;
}

export type CollectionStats = {
  totalNfts: number;
  totalListed: number;
  totalSold: number;
  totalValue: number;
  floorPrice: number;
  uniqueOwners: number;
  totalVolume: number;
};

export type NftOnChain = {
  collectionId: string;
  collection?: Collection;
  metaData?: any;
  tokenId: number;
  owner: string;
  metaDataUrl?: string;
  nft?: Nft;
};

export type NftNoId = NftOnChain & {
  identifier: string;
  price: string;
  isListed: boolean;
  status: string;
  history: string[];
  createdAt: Date | null;
  updatedAt: Date | null;
};

export interface AlertMessage {
  message: string;
  title: string;
  type: "error" | "warning" | "info" | "success" | "debug";
}

export type Conversation = {
  id?: string;
  timeStamp: number;
  name: any;
  messages: SCChatMessage[];
};

export type ConversationMessage = {
  id?: string;
  timeStamp: number;
  data?: any;
  role: string;
  message: string;
};
