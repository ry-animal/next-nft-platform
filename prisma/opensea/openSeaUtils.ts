import { Os_collection, Os_nft, nfts } from "@prisma/client";
import { Nft, Order } from "./types";
import { weiToMatic } from "../../src/core/web3/currency";

export async function parseOrder(
  order: Order,
  indb: Map<string, boolean>
): Promise<[any, any] | undefined> {
  //just take the first one for now
  try {
    if (order.maker_asset_bundle.assets.length > 0) {
      const asset = order.maker_asset_bundle.assets[0];
      //check if ERC721

      if (
        asset &&
        indb.get(
          safeString(asset!.token_id + "_" + asset!.asset_contract.address)
        )
      ) {
        console.log(
          "[WARNING!] NFT already in db",
          safeString(asset!.token_id + "_" + asset!.asset_contract.address)
        );
        return undefined;
      }
      if (
        asset?.asset_contract.schema_name == "ERC721" &&
        asset.token_metadata &&
        !indb.has(
          safeString(asset.token_id + "_" + asset.asset_contract.address)
        )
      ) {
        let metadata: any = undefined;
        try {
          metadata = await (
            await fetchWithTimeout(
              parseMetaURL(safeString(asset.token_metadata)),
              {
                timeout: 2000,
              }
            )
          ).json();
        } catch (e) {
          console.log(e);
        }
        let token = order.taker_asset_bundle.assets[0]?.asset_contract.symbol;
        if (!token) {
          return undefined;
        }
        let rarity = "unknown";
        const rarityClasses = [
          "mythic",
          "legendary",
          "epic",
          "rare",
          "uncommon",
          "common",
        ];
        const attributes = safeString(
          JSON.stringify(
            metadata && metadata.attributes ? metadata.attributes : []
          )
        );

        for (const rarityClass of rarityClasses) {
          if (metadata && metadata.attributes) {
            if (attributes.toLowerCase().match(rarityClass)) {
              rarity = rarityClass;
              break;
            }
          }
        }

        return [
          {
            identifier: safeString(
              asset.token_id + "_" + asset.asset_contract.address
            ),
            thumb: safeString(asset.image_url),
            collectionId: safeString(asset.asset_contract.address),
            status: "LISTED",
            history: "",
            createdAt: safeNumber(order.listing_time),
            updatedAt: safeNumber(order.expiration_time),
            tokenId: safeString(asset.token_id),
            title: safeString(asset.name),
            description: safeString(asset.description),
            metaData: JSON.stringify(
              metadata ? metadata : { imageUrl: safeString(asset.image_url) }
            ),
            owner: safeString(order.protocol_data.parameters.offerer),
            price: parseFloat(weiToMatic(order.current_price)),
            metaDataUrl: safeString(asset.token_metadata),
            isListed: true,
            rarity: rarity,
            platForm: "opensea",
            token: token,
            createdDate: new Date(order.created_date),
            closingDate: new Date(order.closing_date),
            listingTime: safeNumber(order.listing_time),
            expirationTime: safeNumber(order.expiration_time),
            orderHash: safeString(order.order_hash),
            permalink: safeString(asset.permalink),
            imageUrl: safeString(
              (metadata ? metadata : { image: safeString(asset.image_url) })
                .image
            ),
            attributes: attributes,
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
            title: safeString(asset.collection.name),
            description: safeString(asset.collection.description),
            contractAddress: safeString(asset.asset_contract.address),
            metaData: JSON.stringify({
              imageUrl: safeString(asset.collection.image_url),
            }),
          },
        ];
      }
    }
  } catch (e) {
    console.log(e);
  }
  return undefined;
}
export function parseMetaURL(url: string): string {
  if (url.startsWith("ipfs://")) {
    console.log(`https://snowcrash.infura-ipfs.io/ipfs/${url.slice(7)}`);
    return `https://snowcrash.infura-ipfs.io/ipfs/${url.slice(7)}`;
  }

  return url;
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

async function fetchWithTimeout(resource: string, options = { timeout: 2000 }) {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), options.timeout);

  const response = await fetch(resource, {
    ...options,
    signal: controller.signal,
  });
  clearTimeout(id);

  return response;
}
