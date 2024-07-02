import { ethers } from "ethers";

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

export type NftNoId = {
  identifier: string;
  metaDataUrl: string;
  metaData: Metadata;
  collectionId: string;
  tokenId: number;
  owner: string;
  price: string;
  isListed: boolean;
  status: string;
  history: string[];
  createdAt: Date | null;
  updatedAt: Date | null;
  thumb: string;
};

export interface AlertMessage {
  message: string;
  title: string;
  type: "error" | "warning" | "info" | "success" | "debug";
}

export interface TransactionDetail {
  blockNumber: string;
  timeStamp: string;
  hash: string;
  nonce: string;
  blockHash: string;
  transactionIndex: string;
  from: string;
  to: string;
  value: string;
  gas: string;
  gasPrice: string;
  isError: string;
  txreceipt_status: string;
  input: string;
  contractAddress: string;
  cumulativeGasUsed: string;
  gasUsed: string;
  confirmations: string;
  methodId: string;
  functionName: string;
}

export interface TransactionResponse {
  success: boolean;
  txhash?: string;
  receipt?: ethers.providers.TransactionReceipt;
  error?: string;
  response?: any;
}

export interface Gasfees {
  maxFeePerGas: ethers.BigNumber;
  maxPriorityFeePerGas: ethers.BigNumber;
}
