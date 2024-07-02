import { Collection, Os_collection, Os_nft } from "@prisma/client";

export enum OpenAIModel {
  DAVINCI_TURBO = "gpt-3.5-turbo",
  DAVINCI = "text-davinci-003",
  GPT4 = "gpt-4",
}

export interface SCChatMessage {
  responder: "ASSISTANT" | "USER" | "SYSTEM";
  response: string;
  resultAnswer?: string;
  result?: Os_nft[];
  query?: boolean;
  queryString?: string;
}

export interface SCQueryResult {
  query: string;
  resultType: "custom" | "nft" | "collection";
  result: Os_nft[] | Os_collection[] | string;
}

export interface Results {
  answer: string;
  nfts: Os_nft[];
  _getType(): string;
}
