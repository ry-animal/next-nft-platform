import { Collection, Nft } from "@prisma/client";
import { ethers } from "ethers";
import { NftNoId, TransactionDetail, TransactionResponse } from "../../types";
import { ContractSC1 } from "./scContract1";
import { ContractSC2 } from "./scContract2";
import { ContractSC3 } from "./scContract3";
import { ContractSC4 } from "./scContract4";
import { getBlockChainServer } from "../chains";

export enum ContractType {
  SC1 = "63e4fa9cf6905f07b6979136",
  SC2 = "6413200257e30a550ec0d071",
  SC3 = "clh60wsnt000108jm0e1l0id0",
  SC3test = "clh61236g000208jmdogx49rx",
  SC4 = "clh60wsnt000108jm1e1l0id2",
}

export interface MintResponse {
  txHash: string;
  receipt: ethers.providers.TransactionReceipt;
  tokenId: string;
  success: boolean;
}

export class Contracts {
  static getRPcProvider(): ethers.providers.JsonRpcProvider {
    const provider = new ethers.providers.JsonRpcProvider(
      getBlockChainServer("Matic")!.rpc
    );
    return provider;
  }
  static getWallet(privateKey: string): ethers.Wallet {
    const provider = new ethers.providers.JsonRpcProvider(
      getBlockChainServer("Matic")!.rpc
    );
    return new ethers.Wallet(privateKey, Contracts.getRPcProvider());
  }
  static async listNFT(
    nft: Nft,
    price: string,
    collection: Collection,
    signer: ethers.providers.JsonRpcSigner
  ): Promise<TransactionResponse> {
    if (collection.contractId == ContractType.SC1) {
      return await ContractSC1.listNFT(nft, price, collection, signer);
    } else if (collection.contractId == ContractType.SC2) {
      return await ContractSC2.listNFT(nft, price, collection, signer);
    } else if (
      collection.contractId == ContractType.SC3 ||
      collection.contractId == ContractType.SC3test
    ) {
      return await ContractSC3.listNFT(nft, price, collection, signer);
    } else if (collection.contractId == ContractType.SC4) {
      return await ContractSC4.listNFT(nft, price, collection, signer);
    }
    return { success: false, error: "Not implemented" };
  }

  static async setApprovedForAll(
    collection: Collection,
    value: boolean,
    signer: ethers.providers.JsonRpcSigner | undefined
  ): Promise<boolean | undefined> {
    if (
      collection.contractId == ContractType.SC3 ||
      collection.contractId == ContractType.SC3test
    ) {
      return await ContractSC3.setApprovedForAll(collection, value, signer);
    }
    if (collection.contractId == ContractType.SC4) {
      return await ContractSC4.setApprovedForAll(collection, value, signer);
    }
    return undefined;
  }

  static async getPlatformFee(
    collection: Collection
  ): Promise<number | undefined> {
    if (
      collection.contractId == ContractType.SC3 ||
      collection.contractId == ContractType.SC3test
    ) {
      return await ContractSC3.getPlatformFee(collection.saleContract!);
    }
    if (collection.contractId == ContractType.SC4) {
      return await ContractSC4.getPlatformFee(collection.saleContract!);
    }
    return undefined;
  }

  static async isApprovedForAll(
    collection: Collection,
    signer: ethers.providers.JsonRpcSigner | undefined
  ): Promise<boolean | undefined> {
    if (
      collection.contractId == ContractType.SC3 ||
      collection.contractId == ContractType.SC3test
    ) {
      return await ContractSC3.isApprovedForAll(collection, signer);
    }
    if (collection.contractId == ContractType.SC4) {
      return await ContractSC4.isApprovedForAll(collection, signer);
    }
    return undefined;
  }

  static async countTokensOfOwner(
    collection: Collection,
    signer: ethers.providers.JsonRpcSigner | undefined
  ): Promise<number | undefined> {
    if (
      collection.contractId == ContractType.SC3 ||
      collection.contractId == ContractType.SC3test
    ) {
      return await ContractSC3.countTokensOfOwner(collection, signer);
    }
    if (collection.contractId == ContractType.SC4) {
      return await ContractSC4.countTokensOfOwner(collection, signer);
    }
    return undefined;
  }

  static async getApprovedContracts(
    saleContract: string
  ): Promise<string[] | undefined> {
    if (
      saleContract == ContractType.SC3 ||
      saleContract == ContractType.SC3test
    ) {
      return await ContractSC3.getApprovedContracts(saleContract);
    }
    if (saleContract == ContractType.SC4) {
      return await ContractSC4.getApprovedContracts(saleContract);
    }
    return undefined;
  }

  static getTransactions = async (
    tokenId: number,
    contractAddress: string,
    provider:
      | ethers.providers.Web3Provider
      | ethers.providers.JsonRpcSigner
      | ethers.Wallet
  ): Promise<any | undefined> => {
    if (contractAddress == ContractType.SC1) {
      return await ContractSC1.getTransactions(
        tokenId,
        contractAddress,
        provider
      );
    } else if (contractAddress == ContractType.SC2) {
      //return await ContractSC2.getTransactions(
      //  tokenId,
      //  contractAddress,
      //  provider
      //);
    }
    return undefined;
  };

  static async delistNFT(
    nft: Nft,
    collection: Collection,
    signer: ethers.providers.JsonRpcSigner
  ): Promise<TransactionResponse> {
    if (collection.contractId == ContractType.SC1) {
      return await ContractSC1.delistNFT(nft, collection, signer);
    } else if (collection.contractId == ContractType.SC2) {
      return await ContractSC2.delistNFT(nft, collection, signer);
    } else if (
      collection.contractId == ContractType.SC3 ||
      collection.contractId == ContractType.SC3test
    ) {
      return await ContractSC3.delistNFT(nft, collection, signer);
    } else if (collection.contractId == ContractType.SC4) {
      return await ContractSC4.delistNFT(nft, collection, signer);
    }
    return { success: false, error: "Not implemented" };
  }

  static async buyNFT(
    nft: Nft,
    collection: Collection,
    signer: ethers.providers.JsonRpcSigner
  ): Promise<TransactionResponse> {
    if (collection.contractId == ContractType.SC1) {
      return await ContractSC1.buyNFT(nft, collection, signer);
    } else if (collection.contractId == ContractType.SC2) {
      return await ContractSC2.buyNFT(nft, collection, signer);
    } else if (
      collection.contractId == ContractType.SC3 ||
      collection.contractId == ContractType.SC3test
    ) {
      return await ContractSC3.buyNFT(nft, collection, signer);
    } else if (collection.contractId == ContractType.SC4) {
      return await ContractSC4.buyNFT(nft, collection, signer);
    }
    return { success: false, error: "Not implemented" };
  }

  static getOwner = async (
    tokenId: number,
    collection: Collection,
    provider: ethers.providers.Web3Provider
  ): Promise<string | undefined> => {
    if (collection.contractId == ContractType.SC1) {
      return await ContractSC1.getOwner(
        tokenId,
        collection.contractAddress!,
        provider
      );
    } else if (collection.contractId == ContractType.SC2) {
      return await ContractSC2.getOwner(
        tokenId,
        collection.contractAddress!,
        provider
      );
    } else if (
      collection.contractId == ContractType.SC3 ||
      collection.contractId == ContractType.SC3test
    ) {
      return await ContractSC3.getOwner(
        tokenId,
        collection.contractAddress!,
        provider
      );
    } else if (collection.contractId == ContractType.SC4) {
      return await ContractSC4.getOwner(
        tokenId,
        collection.contractAddress!,
        provider
      );
    }
    return undefined;
  };

  static async mintTo(
    collection: Collection,
    nft: Nft,
    account: string,
    provider: ethers.Wallet
  ): Promise<MintResponse | undefined> {
    if (collection.contractId == ContractType.SC2) {
      return await ContractSC2.mintTo(nft, collection, account, provider);
    }
    if (
      collection.contractId == ContractType.SC3 ||
      collection.contractId == ContractType.SC3test
    ) {
      return await ContractSC3.mintTo(nft, collection, account, provider);
    }
    if (collection.contractId == ContractType.SC4) {
      return await ContractSC4.mintTo(nft, collection, account, provider);
    }
    return undefined;
  }
  static async isWhiteListed(
    collection: Collection,
    account: string,
    provider?: ethers.providers.JsonRpcSigner
  ): Promise<boolean | undefined> {
    if (collection.contractId == ContractType.SC1) {
      return await ContractSC1.isWhiteListed(collection, account, provider);
    }
    return undefined;
  }

  static async whiteListAddress(
    collection: Collection,
    account: string,
    provider?: ethers.Wallet
  ): Promise<ethers.providers.TransactionReceipt | undefined> {
    if (collection.contractId == ContractType.SC1) {
      return await ContractSC1.whiteListAddress(collection, account, provider);
    }
    return undefined;
  }

  static async getOnChainNFTData(
    collection: Collection,
    tokenId: number,
    provider?: ethers.providers.JsonRpcSigner
  ): Promise<NftNoId | undefined> {
    if (collection.contractId == ContractType.SC1) {
      return await ContractSC1.getOnChainNFTData(collection, tokenId, provider);
    }
    if (collection.contractId == ContractType.SC2) {
      return await ContractSC2.getOnChainNFTData(collection, tokenId, provider);
    }
    if (
      collection.contractId == ContractType.SC3 ||
      collection.contractId == ContractType.SC3test
    ) {
      return await ContractSC3.getOnChainNFTData(collection, tokenId, provider);
    }
    if (collection.contractId == ContractType.SC4) {
      return await ContractSC4.getOnChainNFTData(collection, tokenId, provider);
    }
    return undefined;
  }

  static async parseTransactionSC(
    tx: TransactionDetail,
    collection: Collection,
    nfts: Map<number, Nft>
  ): Promise<any | undefined> {
    if (collection.contractId == ContractType.SC1) {
      return await ContractSC1.parseTransactionSC(tx, collection.id, nfts);
    }
    if (collection.contractId == ContractType.SC2) {
      return await ContractSC2.parseTransactionSC(tx, collection.id, nfts);
    }
    if (
      collection.contractId == ContractType.SC3 ||
      collection.contractId == ContractType.SC3test
    ) {
      return await ContractSC3.parseTransactionSC(tx, collection.id, nfts);
    }
    if (collection.contractId == ContractType.SC4) {
      return await ContractSC4.parseTransactionSC(tx, collection.id, nfts);
    }
    return undefined;
  }
}
