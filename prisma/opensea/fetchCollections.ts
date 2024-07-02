import { Os_nft, PrismaClient } from "@prisma/client";
import { parseOrder } from "./openSeaUtils";
import { Nft, Order } from "./types";
import fs from "fs";
async function main() {
  console.log("Fetching nfts from opensea");
  const prisma = new PrismaClient({ log: ["error", "warn"] });
  //await prisma.os_collection.deleteMany({ where: {} });
  //await prisma.os_nft.deleteMany({ where: {} });
  let go = true;
  let next: string = "";
  let counter = 0;
  const indb: Map<string, boolean> = new Map();
  const collections: Map<string, boolean> = new Map();
  const nfts = await prisma.os_nft.findMany({
    where: {},
    select: {
      identifier: true,
      collectionId: true,
    },
  });
  for (const nft of nfts) {
    indb.set(nft.identifier, true);
    collections.set(nft.collectionId, true);
  }

  console.log("nfts in db", indb.size);
  console.log("collections in db", indb.keys());

  while (go) {
    try {
      const url =
        next == ""
          ? "https://api.opensea.io/v2/orders/matic/seaport/listings?order_by=created_date&order_direction=desc"
          : "https://api.opensea.io/v2/orders/matic/seaport/listings?order_by=created_date&order_direction=desc&cursor=" +
            next;
      console.log(url);
      const options = {
        method: "GET",

        headers: {
          accept: "application/json",
          "X-API-KEY": "8154431a333a44a5bbfdc6b9d45218bc",
        },
      };

      const col = await fetch(url, options);
      const colJson = await col.json();
      next = colJson.next;
      const previous = colJson.previous;
      const colData: Order[] = colJson.orders;
      for (const order of colData) {
        counter++;
        const nft = await parseOrder(order, indb);
        if (!nft) continue;
        if (indb.has(nft[0].identifier)) {
          console.log("[WARNING!] NFT already in db", nft[0].identifier);
          continue;
        }
        console.log(
          "[NFT] Creating nft " +
            nft![1].contractAddress +
            " " +
            nft![0].tokenId
        );
        await prisma.os_nft.create({ data: nft[0] });
        if (!collections.has(nft![1].contractAddress)) {
          collections.set(nft![1].contractAddress, true);
          console.log(
            "[COLLECTION] Creating collection " + nft![1].contractAddress
          );
          await prisma.os_collection.create({ data: nft![1] });
        }
        console.log(
          counter +
            ") Creating nft " +
            nft![0].tokenId +
            " " +
            nft![1].contractAddress
        );
        fs.appendFileSync("nfts.txt", JSON.stringify(order, null, 2));
      }
    } catch (e) {
      await new Promise((r) => setTimeout(r, 4000));
      console.log(e);
    }

    go = next != null;
  }
}

main();
