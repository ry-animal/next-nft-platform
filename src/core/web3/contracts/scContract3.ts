import { Collection, Nft } from "@prisma/client";
import { BigNumber, ethers } from "ethers";
import { SCPolygon3_ABI, SCPolygon3Sale_ABI } from "./scAbi";
import { SimpleERC721, SCTradeContract } from "../typechain-types";
import {
  Metadata,
  NftNoId,
  TransactionDetail,
  TransactionResponse,
} from "../../types";
import { getGasFees, getRPcProvider, parseMetaImageURL } from "../utils";
import { Contracts, MintResponse } from ".";
import { scPolygon3 } from "../typechain-types/contracts";
const GASLIMIT = 350000;
export class ContractSC3 {
  static async mintTo(
    nft: Nft,
    collection: Collection,
    account: string,
    providerW?: ethers.Wallet
  ): Promise<MintResponse | undefined> {
    const provider = providerW ? providerW! : Contracts.getRPcProvider();
    const contract = new ethers.Contract(
      collection.contractAddress!,
      SCPolygon3_ABI,
      provider
    ) as SimpleERC721;

    console.log(
      "providerW",
      await providerW?.getAddress(),
      (await providerW?.getBalance())!.toString(),
      contract.address
    );
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
      let owner = await ContractSC3.getOwner(
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

      const isApproved = await ContractSC3.isApprovedForAll(
        collection,
        signer!
      );
      if (!isApproved) {
        await Contracts.setApprovedForAll(collection, true, signer);
      }
      let contract = new ethers.Contract(
        collection.saleContract!,
        SCPolygon3Sale_ABI,
        signer
      ) as SCTradeContract;
      const gas = await getGasFees();
      let tx = await contract.listNFT(
        collection.contractAddress!,
        nft.tokenId,
        price,
        {
          from: account,
          gasLimit: GASLIMIT / 2,
        }
      );
      const receipt = await tx.wait();
      console.log("receipt", receipt);
      return { success: true, txhash: tx.hash, receipt: receipt };
    } catch (e: any) {
      console.log("error", e);
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
      let owner = await ContractSC3.getOwner(
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
        collection.saleContract!,
        SCPolygon3Sale_ABI,
        signer
      ) as SCTradeContract;
      const gas = await getGasFees();
      let tx = await contract.unlistNFT(
        collection.contractAddress!,
        nft.tokenId,
        {
          from: account,
          gasLimit: GASLIMIT / 4,
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

      let contract = new ethers.Contract(
        collection.saleContract!,
        SCPolygon3Sale_ABI,
        signer
      ) as SCTradeContract;
      let tx = await contract.purchaseNFT(
        collection.contractAddress!,
        nft.tokenId,
        {
          from: account,
          value: nft.price,
          gasLimit: GASLIMIT / 2,
        }
      );
      const receipt = await tx.wait();
      console.log("receipt", receipt);
      return { success: true, txhash: tx.hash, receipt: receipt };
    } catch (e: any) {
      console.log("error", e);
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
        SCPolygon3_ABI,
        provider
      ) as SimpleERC721;
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
        SCPolygon3_ABI,
        provider
      ) as SimpleERC721;
      let saleContract = new ethers.Contract(
        collection.saleContract!,
        SCPolygon3Sale_ABI,
        provider
      ) as SCTradeContract;

      const owner = await contract.ownerOf(tokenId);
      const uri = await contract.tokenURI(tokenId);
      console.log("uri", uri);
      const metadata = await fetch(parseMetaImageURL(uri));
      const metadataJson = (await metadata.json()) as Metadata;

      const sale = await saleContract.getListing(
        collection.contractAddress!,
        tokenId
      );

      const nft = {
        collectionId: collection.id,
        owner: owner,
        identifier: tokenId.toString(),
        metaDataUrl: uri,
        tokenId: tokenId,
        isListed: sale.isForSale == true,
        metaData: metadataJson,
        status: sale.isForSale == true ? "listed" : "unlisted",
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
    const type = tx.input.startsWith("0xa87e25ac")
      ? "buy"
      : tx.input.startsWith("0xad05f1b4")
      ? "list"
      : tx.input.startsWith("0x7fc27efd")
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
      //{"blockNumber":"207053","timeStamp":"1683539388","hash":"0xa7a96fdfca9f70f4df20dab53aa4b748ad6dbf69058c4b9d23325061822216de","nonce":"2","blockHash":"0xa66d4abfce61312c055b733fba9fa939a3efc20f1f6f5a435740d78c3d7f0e80","transactionIndex":"0","from":"0x958e6b29c6e788e59250bd522b6bb068d0deb44c","to":"0xb631606b741274d410bc7c58ab64ce62610050e6","value":"5000000000000000","gas":"350000","gasPrice":"14800000000","isError":"0","txreceipt_status":"1","input":"0xa87e25ac00000000000000000000000091553861aa69b17f2d0302811b4cec0626602174000000000000000000000000000000000000000000000000000000000000bd8c","contractAddress":"","cumulativeGasUsed":"69491","gasUsed":"69491","confirmations":"258","methodId":"0xa87e25ac","functionName":""},
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
      //{"blockNumber":"207293","timeStamp":"1683550814","hash":"0x86022b0490f77962c4f429885d710286b36a34fb91051e9abf8187a1c713e333","nonce":"8","blockHash":"0x96c2b94ab51cdbfc42886eb84f1bcc6905c3bc422c5896468bab8265d493402d","transactionIndex":"0","from":"0xb249d51143221f4d6222cf855572429ba8e1346a","to":"0xb631606b741274d410bc7c58ab64ce62610050e6","value":"0","gas":"350000","gasPrice":"15800000000","isError":"0","txreceipt_status":"1","input":"0xad05f1b400000000000000000000000091553861aa69b17f2d0302811b4cec062660217400000000000000000000000000000000000000000000000000000000000261c800000000000000000000000000000000000000000000000000038d7ea4c68000","contractAddress":"","cumulativeGasUsed":"158079","gasUsed":"158079","confirmations":"18","methodId":"0xad05f1b4","functionName":""}]}
      const price = BigNumber.from("0x" + tx.input.slice(-64)).toString();
      const tokenId = BigNumber.from(
        "0x" + tx.input.slice(0 + 10 + 64, 64 + 64 + 10)
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
      //{"blockNumber":"207249","timeStamp":"1683549342","hash":"0x630b26e8e5257c3e8060b75628b9658df09e47826db69fbad618134dda32ff13","nonce":"17","blockHash":"0x14b15ed6158a12963d73290728d8c3992d7527169b4e22d66adcc0988dc78c19","transactionIndex":"0","from":"0x958e6b29c6e788e59250bd522b6bb068d0deb44c","to":"0xb631606b741274d410bc7c58ab64ce62610050e6","value":"0","gas":"350000","gasPrice":"14200000000","isError":"0","txreceipt_status":"0","input":"0x7fc27efd00000000000000000000000091553861aa69b17f2d0302811b4cec0626602174000000000000000000000000000000000000000000000000000000000000bd8c","contractAddress":"","cumulativeGasUsed":"26531","gasUsed":"26531","confirmations":"62","methodId":"0x7fc27efd","functionName":""}
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

  static async getPlatformFee(
    saleContract: string
  ): Promise<number | undefined> {
    try {
      let contract = new ethers.Contract(
        saleContract,
        SCPolygon3Sale_ABI,
        getRPcProvider()
      ) as SCTradeContract;
      let fee = await contract.getPlatformFeePercentage();
      return fee.toNumber();
    } catch (e) {
      throw e;
    }
    return undefined;
  }

  static async getApprovedContracts(
    saleContract: string
  ): Promise<string[] | undefined> {
    try {
      let contract = new ethers.Contract(
        saleContract,
        SCPolygon3Sale_ABI,
        getRPcProvider()
      ) as SCTradeContract;
      let contracts = await contract.getTradableContracts();
      return contracts;
    } catch (e) {
      throw e;
    }
    return undefined;
  }

  static async setApprovedForAll(
    collection: Collection,
    value: boolean,
    signer: ethers.providers.JsonRpcSigner | undefined
  ): Promise<boolean | undefined> {
    const contract = new ethers.Contract(
      collection.contractAddress!,
      SCPolygon3_ABI,
      signer
    ) as SimpleERC721;
    const response = await contract.setApprovalForAll(
      collection.saleContract!,
      value,
      {
        gasLimit: GASLIMIT,
      }
    );
    const receipt = await response.wait();
    console.log("receipt", receipt);
    return receipt.status == 1;
  }

  static async isApprovedForAll(
    collection: Collection,
    signer: ethers.providers.JsonRpcSigner | undefined
  ): Promise<boolean | undefined> {
    const contract = new ethers.Contract(
      collection.contractAddress!,
      SCPolygon3_ABI,
      signer
    ) as SimpleERC721;
    const owner = await signer?.getAddress();
    if (!owner) {
      return undefined;
    }
    const isApproved = await contract.isApprovedForAll(
      owner,
      collection.saleContract!
    );
    return isApproved;
  }

  static async countTokensOfOwner(
    collection: Collection,
    signer: ethers.providers.JsonRpcSigner | undefined
  ): Promise<number | undefined> {
    try {
      const account = await signer?.getAddress();
      if (!account) return undefined;
      const contract = new ethers.Contract(
        collection.contractAddress!,
        SCPolygon3_ABI,
        signer
      ) as SimpleERC721;
      return (await contract.balanceOf(account)).toNumber();
    } catch (error) {
      throw error;
    }
  }
}

function addressEqual(a: string, b: string) {
  return a.toLowerCase() === b.toLowerCase();
}
