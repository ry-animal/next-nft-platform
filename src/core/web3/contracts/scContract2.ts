import { Collection, Nft } from "@prisma/client";
import { BigNumber, ethers } from "ethers";
import { SCPolygon2_ABI } from "./scAbi";
import { SCPolygon2 } from "../typechain-types";
import {
  Metadata,
  NftNoId,
  TransactionDetail,
  TransactionResponse,
} from "../../types";
import { GASLIMIT, getGasFees, getRPcProvider } from "../utils";
import { Contracts, MintResponse } from ".";

export class ContractSC2 {
  static async mintTo(
    nft: Nft,
    collection: Collection,
    account: string,
    providerW?: ethers.Wallet
  ): Promise<MintResponse | undefined> {
    const provider = providerW ? providerW! : Contracts.getRPcProvider();
    const contract = new ethers.Contract(
      collection.contractAddress!,
      SCPolygon2_ABI,
      provider
    ) as SCPolygon2;
    const gasEstimated = await contract.estimateGas.mintNFT(
      account,
      nft.metaDataUrl
    );
    console.log("gasEstimated", gasEstimated.toString());
    console.log(
      "providerW",
      await providerW?.getAddress(),
      (await providerW?.getBalance())!.toString(),
      contract.address
    );
    const gas = await getGasFees();
    console.log("gas", gas);
    const tx = await contract.mintNFT(account, nft.metaDataUrl);
    const txHash = tx.hash;
    console.log("txHash", txHash);
    const txReceipt = await Contracts.getRPcProvider().waitForTransaction(
      txHash
    );

    return {
      txHash: txHash,
      receipt: txReceipt,
      tokenId: txReceipt!.logs[0]!.topics[3]!,
      success: true,
    };
  }

  static async listNFT(
    nft: Nft,
    price: string,
    collection: Collection,
    signer: ethers.providers.JsonRpcSigner | undefined
  ): Promise<TransactionResponse> {
    try {
      let account = await signer?.getAddress();
      let owner = await ContractSC2.getOwner(
        nft.tokenId,
        collection.contractAddress!,
        signer!
      );

      if (!owner || !account) {
        return { success: false, error: "No valid owner or signer" };
      }
      if (owner.toLowerCase() !== account.toLowerCase()) {
        return { success: false, error: "You are not the owner of this NFT" };
      }
      let contract = new ethers.Contract(
        collection.contractAddress!,
        SCPolygon2_ABI,
        signer
      ) as SCPolygon2;
      const gas = await getGasFees();
      let tx = await contract.listTokenForSale(nft.tokenId, price, {
        from: account,
        maxFeePerGas: gas.maxFeePerGas,
        maxPriorityFeePerGas: gas.maxPriorityFeePerGas,
        gasLimit: GASLIMIT,
      });
      const receipt = await tx.wait();
      console.log("receipt", receipt);
      return { success: true, txhash: tx.hash, receipt: receipt };
    } catch (e: any) {
      throw e;
      return { success: false, error: e.message };
    }
  }

  static async delistNFT(
    nft: Nft,
    collection: Collection,
    signer: ethers.providers.JsonRpcSigner | undefined
  ): Promise<TransactionResponse> {
    try {
      let account = await signer?.getAddress();
      let owner = await ContractSC2.getOwner(
        nft.tokenId,
        collection.contractAddress!,
        signer!
      );

      if (!owner || !account) {
        return { success: false, error: "No valid owner or signer" };
      }
      if (owner.toLowerCase() !== account.toLowerCase()) {
        return { success: false, error: "You are not the owner of this NFT" };
      }
      let contract = new ethers.Contract(
        collection.contractAddress!,
        SCPolygon2_ABI,
        signer
      ) as SCPolygon2;
      const gas = await getGasFees();
      let tx = await contract.cancelTokenSale(nft.tokenId, {
        from: account,
        maxFeePerGas: gas.maxFeePerGas,
        maxPriorityFeePerGas: gas.maxPriorityFeePerGas,
        gasLimit: GASLIMIT,
      });
      const receipt = await tx.wait();
      console.log("receipt", receipt);
      return { success: true, txhash: tx.hash, receipt: receipt };
    } catch (e: any) {
      throw e;
      return { success: false, error: e.message };
    }
  }

  static async buyNFT(
    nft: Nft,
    collection: Collection,
    signer: ethers.providers.JsonRpcSigner | undefined
  ): Promise<TransactionResponse> {
    console.log("buyNFT", nft, collection, signer);
    try {
      let account = await signer?.getAddress();

      let contract = new ethers.Contract(
        collection.contractAddress!,
        SCPolygon2_ABI,
        signer
      ) as SCPolygon2;
      const gas = await getGasFees();
      let tx = await contract.purchaseToken(nft.tokenId, {
        from: account,
        value: nft.price,
        maxFeePerGas: gas.maxFeePerGas,
        maxPriorityFeePerGas: gas.maxPriorityFeePerGas,
        gasLimit: GASLIMIT,
      });
      const receipt = await tx.wait();
      console.log("receipt", receipt);
      return { success: true, txhash: tx.hash, receipt: receipt };
    } catch (e: any) {
      throw e;
      return { success: false, error: e.message };
    }
  }

  static getOwner = async (
    tokenId: number,
    contractAddress: string,
    provider:
      | ethers.providers.Web3Provider
      | ethers.Wallet
      | ethers.providers.JsonRpcSigner
  ): Promise<string | undefined> => {
    try {
      const contract = new ethers.Contract(
        contractAddress!,
        SCPolygon2_ABI,
        provider
      ) as SCPolygon2;
      const owner = await contract.ownerOf(tokenId);
      return owner;
    } catch (error) {
      throw error;
      return undefined;
    }
  };

  static async getOnChainNFTData(
    collection: Collection,
    tokenId: number,
    providerW?: ethers.providers.JsonRpcSigner
  ): Promise<NftNoId | undefined> {
    try {
      const provider = providerW ? providerW! : getRPcProvider();
      const contract = new ethers.Contract(
        collection.contractAddress!,
        SCPolygon2_ABI,
        provider
      ) as SCPolygon2;

      const owner = await contract.ownerOf(tokenId);
      const uri = await contract.tokenURI(tokenId);
      console.log("uri", uri);
      const metadata = await fetch(uri);
      const metadataJson = (await metadata.json()) as Metadata;

      const sale = await contract.getListInfo(tokenId);

      const nft = {
        collectionId: collection.id,
        owner: owner,
        identifier: tokenId.toString(),
        metaDataUrl: uri,
        tokenId: tokenId,
        isListed: sale.isActive == true,
        metaData: metadataJson,
        status: sale.isActive == true ? "listed" : "unlisted",
        price: sale.price.toString(),
        history: [],
        createdAt: new Date(),
        updatedAt: new Date(),
        thumb: "",
      } as NftNoId;
      return nft;
    } catch (e) {
      console.log(e);
      return undefined;
    }
  }

  static async parseTransactionSC(
    tx: TransactionDetail,
    collectionId: string,
    nfts: Map<number, Nft>
  ): Promise<any | undefined> {
    console.log("tx2", tx);
    const type = tx.input.startsWith("0xc2db2c42")
      ? "buy"
      : tx.input.startsWith("0x2406e677")
      ? "list"
      : tx.input.startsWith("0x2bda5ac3")
      ? "delist"
      : "unknown";
    const price = 0;
    const tokenId = 0;
    console.log(type, tx);
    if (type === "unknown") {
      return undefined;
    }
    if (tx.isError === "1") {
      return undefined;
    }

    if (type === "buy") {
      const tokenId = BigNumber.from("0x" + tx.input.slice(-64)).toNumber();
      const nft = nfts.get(tokenId);
      if (nft == undefined) {
        return undefined;
      } else {
        console.log("Buy ok\t", tokenId, collectionId);
      }
      return {
        collectionId: collectionId,
        nftId: nft?.id!,
        from: "",
        to: tx.from,
        price: tx.value,
        type: "sale",
        transaction: tx as any,
        timeStamp: tx.timeStamp,
        hash: tx.hash,
        tokenId: tokenId,
        contractAddress: tx.to,
      };
    }
    if (type === "list") {
      const price = BigNumber.from("0x" + tx.input.slice(-64)).toString();
      const tokenId = BigNumber.from(
        "0x" + tx.input.slice(0 + 10, 64 + 10)
      ).toNumber();

      const nft = nfts.get(tokenId);
      if (nft == undefined) {
        return undefined;
      } else {
        console.log("delist\t", tokenId, collectionId);
        console.log(tx.from, tx.to);
      }
      return {
        collectionId: collectionId,
        nftId: nft?.id!,
        from: tx.from,
        to: tx.from,
        price: price.toString(),
        type: "list",
        transaction: tx as any,
        timeStamp: tx.timeStamp,
        hash: tx.hash,
        tokenId: tokenId,
        contractAddress: tx.to,
      };
    }
    if (type === "delist") {
      const tokenId = BigNumber.from("0x" + tx.input.slice(-64)).toNumber();
      const nft = nfts.get(tokenId);
      if (nft == undefined) {
        return undefined;
      } else {
        console.log("delist\t", tokenId, collectionId);
        console.log(tx.from, tx.to);
      }
      return {
        collectionId: collectionId,
        nftId: nft?.id!,
        from: tx.from,
        to: tx.from,
        price: nft?.price!,
        type: "delist",
        transaction: tx as any,
        timeStamp: tx.timeStamp,
        hash: tx.hash,
        tokenId: tokenId,
        contractAddress: tx.to,
      };
    }
    return undefined;
  }
}
