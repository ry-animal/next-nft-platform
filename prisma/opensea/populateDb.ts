import { PrismaClient, nfts } from "@prisma/client";
import fs from "fs";





async function main() {
  //read json file
  const data = fs.readFileSync("./prisma/erc721meta.json", "utf8");
  const prisma = new PrismaClient({ log: ["error", "warn"] });
  const nfts = prisma.nfts;
  const nftsData = JSON.parse(data) as nfts[];
  await prisma.nfts.deleteMany({ where: {} });
  let c = 0;
  let nftsList: nfts[] = [];
  for (const nft of nftsData) {
    //import

    let nftToImport: any = {
      token_id: `${nft.token_id}`,
      token_address: `${nft.token_address}`,
      token_uri: `${nft.token_uri}`,
      metadata: `${nft.metadata}`,
      contract_type: `${nft.contract_type}`,
      token_hash: `${nft.token_hash}`,
      minter_address: `${nft.minter_address}`,
      block_number_minted: `${nft.block_number_minted}`,
      transaction_minted: `${nft.transaction_minted}`,
      last_token_uri_sync: `${nft.last_token_uri_sync}`,
      last_metadata_sync: `${nft.last_metadata_sync}`,
      created_at: `${nft.created_at}`,
      possible_spam: nft.possible_spam,
    };

    nftsList.push(nftToImport);
    if (c % 1000 == 0) {
      await prisma.nfts.createMany({ data: nftsList });
      nftsList = [];
      console.log("c>" + c + " " + nftsData.length);
    }

    c++;
  }
  await prisma.nfts.createMany({ data: nftsList });
}
main();
