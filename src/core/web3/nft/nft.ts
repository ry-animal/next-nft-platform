import { Collection } from "@prisma/client";
import { Attribute, Metadata, NftNoId } from "../../types";
import { uploadToIPFS } from "../../contentUtils";
import { v4 as uuidv4 } from "uuid";

export class NFT {
  public metaData?: Metadata;
  public collection: Collection;
  public url?: string;
  public tokenId?: number;
  public price?: string;
  constructor(collection: Collection) {
    this.collection = collection;
    this.metaData = {
      name: "",
      description: "",
      image: "",
      external_url: "",
      attributes: [],
      properties: {
        category: "",
        files: [],
        creators: [],
      },
    };
  }

  getNFT(): NftNoId {
    return {
      identifier: uuidv4(),
      metaDataUrl: this.url!,
      metaData: this.metaData!,
      collectionId: this.collection.id,
      tokenId: this.tokenId!,
      owner: "",
      price: this.price!,
      isListed: false,
      status: "pending",
      history: [],
      createdAt: new Date(),
      updatedAt: new Date(),
      thumb: "",
    };
  }
  async uploadMetadata() {
    var enc = new TextEncoder();
    const ipfs = await uploadToIPFS(enc.encode(JSON.stringify(this.metaData)));
    this.url = "https://snowcrash.infura-ipfs.io/ipfs/" + ipfs.path;
    console.log(this.url);
  }
  async setImage(image: Uint8Array, fileName: string) {
    const ipfs = await uploadToIPFS(image);
    this.metaData!.image = "https://snowcrash.infura-ipfs.io/ipfs/" + ipfs.path;
    console.log(this.metaData);
  }
}
