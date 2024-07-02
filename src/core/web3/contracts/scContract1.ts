import { Collection, Nft } from "@prisma/client";
import { BigNumber, ethers } from "ethers";
import { SCNFT_ABI, SCTRADING_ABI, SCWhitelist_ABI } from "./scAbi";
import { SCNFT, SCTrading, SCWhitelist } from "../typechain-types";
import { Metadata, NftNoId, TransactionResponse } from "../../types";
import { Contracts } from ".";
import { GASLIMIT, getGasFees, getRPcProvider } from "../utils";
import { TransactionDetail } from "../../types";

export class ContractSC1 {
  static async listNFT(
    nft: Nft,
    price: string,
    collection: Collection,
    signer: ethers.providers.JsonRpcSigner | undefined
  ): Promise<TransactionResponse> {
    try {
      let account = await signer?.getAddress();
      let owner = await ContractSC1.getOwner(
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
      let SCTradingContract = new ethers.Contract(
        collection.saleContract!,
        SCTRADING_ABI,
        signer
      ) as SCTrading;
      const gas = await getGasFees();
      let tx = await SCTradingContract.listNFT(
        collection.contractAddress!,
        price,
        nft.tokenId,
        {
          from: account,
          maxFeePerGas: gas.maxFeePerGas,
          maxPriorityFeePerGas: gas.maxPriorityFeePerGas,
          gasLimit: GASLIMIT,
        }
      );
      const receipt = await tx.wait();
      console.log("receipt", receipt);
      return { success: true, txhash: tx.hash, receipt: receipt };
    } catch (e: any) {
      throw e;
      return { success: false, error: e.message };
    }
  }

  static getTransactions = async (
    tokenId: number,
    contractAddress: string,
    provider:
      | ethers.providers.Web3Provider
      | ethers.providers.JsonRpcSigner
      | ethers.Wallet
  ): Promise<any | undefined> => {
    try {
      const contract = new ethers.Contract(
        contractAddress!,
        SCNFT_ABI,
        provider
      ) as SCNFT;
      console.log("contract", contract);
      const transfers = await contract.filters.Transfer(null, null, tokenId);
      console.log("transfers", transfers);
      return transfers;
    } catch (error) {
      console.log("error", error);
      return undefined;
    }
  };

  static async delistNFT(
    nft: Nft,
    collection: Collection,
    signer: ethers.providers.JsonRpcSigner | undefined
  ): Promise<TransactionResponse> {
    try {
      let account = await signer?.getAddress();
      let owner = await ContractSC1.getOwner(
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
      let SCTradingContract = new ethers.Contract(
        collection.saleContract!,
        SCTRADING_ABI,
        signer
      ) as SCTrading;
      const gas = await getGasFees();
      let tx = await SCTradingContract.unlistNFT(
        collection.contractAddress!,
        nft.tokenId,
        {
          from: account,
          maxFeePerGas: gas.maxFeePerGas,
          maxPriorityFeePerGas: gas.maxPriorityFeePerGas,
          gasLimit: GASLIMIT,
        }
      );
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
    try {
      let account = await signer?.getAddress();
      console.log("account", account);
      let SCTradingContract = new ethers.Contract(
        collection.saleContract!,
        SCTRADING_ABI,
        signer
      ) as SCTrading;

      const amountWei = nft.price;
      const gas = await getGasFees();
      const gasPrice = await signer?.getGasPrice();

      let tx = await SCTradingContract.executeNFTTrade(
        collection.contractAddress!,
        account!,
        nft.tokenId,
        {
          from: account,
          value: amountWei,
          maxFeePerGas: gas.maxFeePerGas,
          maxPriorityFeePerGas: gas.maxPriorityFeePerGas,
          gasLimit: GASLIMIT,
        }
      );
      const receipt = await tx.wait();
      return { success: true, txhash: tx.hash, receipt: receipt };
    } catch (e: any) {
      throw e;
      return { success: false, error: e.message };
    }
    return { success: false, error: "Not implemented" };
  }

  static getOwner = async (
    tokenId: number,
    contractAddress: string,
    provider:
      | ethers.providers.Web3Provider
      | ethers.providers.JsonRpcSigner
      | ethers.Wallet
  ): Promise<string | undefined> => {
    try {
      const contract = new ethers.Contract(
        contractAddress!,
        SCNFT_ABI,
        provider
      ) as SCNFT;
      const owner = await contract.ownerOf(tokenId);
      return owner;
    } catch (error) {
      return undefined;
    }
  };

  static async whiteListAddress(
    collection: Collection,
    account: string,
    provider?: ethers.Wallet
  ): Promise<ethers.providers.TransactionReceipt | undefined> {
    const whiteListContract = new ethers.Contract(
      collection.whiteListContract!,
      SCWhitelist_ABI,
      provider
    ) as SCWhitelist;
    const gasEstimated = GASLIMIT;
    const gas = await getGasFees();
    const tx = await whiteListContract.addKYCUser(
      collection.contractAddress!,
      account,
      {
        gasLimit: gasEstimated,
        maxFeePerGas: gas.maxFeePerGas,
        maxPriorityFeePerGas: gas.maxPriorityFeePerGas,
      }
    );

    const txHash = tx.hash;
    const txReceipt = await getRPcProvider().waitForTransaction(txHash);
    console.log("User added to KYC whitelist : ", account);
    console.log("Transaction receipt: ", txReceipt);

    return txReceipt;
  }

  static async isWhiteListed(
    collection: Collection,
    account: string,
    providerW?: ethers.providers.JsonRpcSigner
  ): Promise<boolean | undefined> {
    const provider = providerW ? providerW! : getRPcProvider();
    console.log(
      `whiteListContract ${collection.whiteListContract!} ${collection.contractAddress!} ${account}`
    );
    const whiteListContract = new ethers.Contract(
      collection.whiteListContract!,
      SCWhitelist_ABI,
      provider
    ) as SCWhitelist;
    const isWhiteListed = await whiteListContract.isUserKYCWhitelisted(
      collection.contractAddress!,
      account
    );
    return isWhiteListed;
  }

  static async getOnChainNFTData(
    collection: Collection,
    tokenId: number,
    providerW?: ethers.providers.JsonRpcSigner
  ): Promise<NftNoId | undefined> {
    try {
      const provider = providerW ? providerW! : getRPcProvider();
      const contract = new ethers.Contract(
        collection.contractAddress!,
        SCNFT_ABI,
        provider
      ) as SCNFT;
      const saleContract = new ethers.Contract(
        collection.saleContract!,
        SCTRADING_ABI,
        provider
      ) as SCTrading;

      const owner = await contract.ownerOf(tokenId);
      const uri = await contract.tokenURI(tokenId);

      const metadata = await fetch(uri);
      const metadataJson = (await metadata.json()) as Metadata;

      const listing = await saleContract.getNFTListed(
        collection.contractAddress!,
        tokenId
      );

      const nft = {
        collectionId: collection.id,
        owner: owner,
        identifier: tokenId.toString(),
        metaDataUrl: uri,
        tokenId: tokenId,
        isListed: listing.tokenId.toNumber() != 0,
        metaData: metadataJson,
        status: listing.tokenId.toNumber() != 0 ? "listed" : "unlisted",
        price: listing.price.toString(),
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
    const type = tx.input.startsWith("0xe1b1afd")
      ? "buy"
      : tx.input.startsWith("0xad05f1b4")
      ? "list"
      : tx.input.startsWith("0x7fc27efd")
      ? "delist"
      : "unknown";
    const price = 0;
    const tokenId = 0;
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
        "0x" + tx.input.slice(64 + 10, 128 + 10)
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
