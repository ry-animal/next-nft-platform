import { Collection, Nft } from "@prisma/client";
import { CollectionCard } from "../../components/collections/CollectionCard";
import NftCard from "../../components/nfts/card";
import { api } from "../../utils/api";
import { v4 as uuidv4 } from "uuid";
import { IconDown } from "../../assets/IconDown";
import { IconBack } from "../../assets/IconBack";

export interface ChatResponse {
  response: any;
  type: "text" | "nft" | "collection";
  assets: any[];
}

export interface FormattedResponse {
  response: any;
  assets: any[];
}

const NFT_URL_LENGTH = "https://snowcrash.com/nft/641860586939b3bc576ed96f"
  .length;
const COLLECTION_URL_LENGTH =
  "https://snowcrash.com/collection/641860586939b3bc576ed96f".length;
export class SCChatGPT {
  collections: Collection[] = [];
  nfts: any[] = [];
  userNFts: {
    [id: string]: Nft;
  } = {};
  userCollections: {
    [id: string]: Collection;
  } = {};
  userAddress: string = "";

  context = api.useContext();

  async handleResponse(
    response: string,
    address: string
  ): Promise<ChatResponse> {
    let assets: any = [];
    if (this.userAddress != address) {
      this.nfts = await this.context.nft.getNftsForUser.fetch({
        owner: address,
      });

      for (const nft of this.nfts) {
        this.userNFts[nft.id] = nft;
      }
      this.collections = await this.context.collection.getAll.fetch();
      for (const collection of this.collections) {
        this.userCollections[collection.id] = collection;
      }
    }
    this.userAddress = address;
    //if (response.includes("https://snowcrash.com/collections")) {
    //  this.collections = await this.context.collection.getAll.fetch();
    //  return { response: "[SHOW COLLECTIONS]", type: "collection" };
    //}
    //if (response.includes("https://snowcrash.com/nfts-for-me")) {
    //  this.nfts = await this.context.nft.getNftsForUser.fetch({
    //    owner: address,
    //  });
    //  return { response: "[SHOW USER NFTS]", type: "nft" };
    //}
    return { response, type: "text", assets: assets };
  }

  formatMessage(message: string): FormattedResponse {
    console.log("formatting message:" + message);
    let assets = [];

    let components: any = [];
    //const urls = message.matchAll(/(https:\/\/snowcrash.com\/nft\/[^\s]+)/g);

    const regex = /https:\/\/snowcrash\.com\/(nft|collection)\//g;
    let results = message.matchAll(regex);
    let positions: number[] = [];
    for (const result of results) {
      positions.push(result.index!);
    }
    if (positions.length === 0) {
      components.push(message);
    } else {
      let last = 0;
      for (const pos of positions) {
        components.push(message.substring(last, pos));

        const colString = "https://snowcrash.com/collection/";

        if (message.substring(pos, pos + colString.length) === colString) {
          const collectionId = message.substring(
            pos + COLLECTION_URL_LENGTH - 24,
            pos + COLLECTION_URL_LENGTH
          );
          last = pos + COLLECTION_URL_LENGTH;
          if (this.userCollections[collectionId]) {
            components.push(
              <IconBack className="w-4" key={"el_" + collectionId} />
            );
            assets.push(
              <div
                className=" max-w-40 col-span-1 flex flex-col divide-y  border border-white border-zinc-600/50 bg-black   text-center  "
                key={"ela_" + collectionId}
              >
                <CollectionCard
                  collection={this.userCollections[collectionId]!}
                  key={collectionId}
                />
              </div>
            );
          }
        } else {
          const nftId = message.substring(
            pos + NFT_URL_LENGTH - 24,
            pos + NFT_URL_LENGTH
          );
          last = pos + NFT_URL_LENGTH;

          if (this.userNFts[nftId]) {
            components.push(<IconBack className="w-4" key={"el_" + nftId} />);
            assets.push(
              <div className="max-w-40 p-1" key={"ela_" + nftId}>
                <NftCard
                  nft={this.userNFts[nftId]!}
                  key={"card_" + nftId}
                  userAddress={this.userAddress}
                />
              </div>
            );
          }
        }
      }
      components.push(message.substring(last));
    }
    return {
      response: (
        <div>
          {components.map((message: any) => {
            return (
              <span id={uuidv4()} className="break-words">
                {message}
              </span>
            );
          })}
        </div>
      ),
      assets: assets,
    };
  }
}
