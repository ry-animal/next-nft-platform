import { z } from "zod";

import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";
import { Nft, Transaction } from "@prisma/client";
import { CollectionStats } from "../../../types";
import { weiToEth, weiToMatic } from "../../../core/web3/currency";
import { getRPcProvider } from "../../../core/web3/utils";
import { nftRouter } from "./nft";
import { ContractType, Contracts } from "../../../core/web3/contracts";
import { TransactionDetail } from "../../../core/types";
import { chains } from "../../../core/web3/chains";

const MAX_VALUE = 999999999999999;
export const statsRouter = createTRPCRouter({
  saveTransaction: publicProcedure
    .input(z.object({ transaction: z.string(), nftId: z.string() }))
    .query(async ({ ctx, input }) => {
      const transactionDb = await ctx.prisma.transaction.findFirst({
        where: { hash: input.transaction },
      });
      if (transactionDb == null) {
        const transactionReceipt = await getRPcProvider().getTransactionReceipt(
          input.transaction
        );

        const nft = await ctx.prisma.nft.findFirst({
          where: { id: input.nftId },
        });

        if (nft !== null) {
          const collection = await ctx.prisma.collection.findFirst({
            where: { id: nft?.collectionId },
          });
          let contract = "";
          if (collection?.contractId == ContractType.SC2) {
            contract = collection?.contractAddress!;
          } else {
            contract = collection?.saleContract!;
          }
          const url =
            `${chains.Matic?.explorerAPI}/api?module=account&action=txlist&address=` +
            contract +
            `&startblock=${transactionReceipt.blockNumber}&endblock=${transactionReceipt.blockNumber}&page=1&offset=10000&sort=asc&apikey=${process.env.NEXT_PUBLIC_POLYGON_API_KEY}`;
          const response = await fetch(url);
          const data: TransactionDetail[] = (await response.json()).result;

          console.log("################################");
          console.log("URL:" + url);
          console.log("################################");
          for (const transactionDetail of data) {
            if (transactionDetail.hash == input.transaction) {
              const nftMap = new Map<number, Nft>();
              nftMap.set(nft.tokenId, nft);
              const trans = await Contracts.parseTransactionSC(
                transactionDetail,
                collection!,
                nftMap
              );
              console.log("################################");
              console.log(trans);
              console.log("################################");
              const transaction = await ctx.prisma.transaction.create({
                data: trans,
              });
              return transaction;
            }
          }

          return [data, transactionDb];
        }

        //list
      } else {
        console.log("transaction already exists");
        return transactionDb;
      }
    }),

  getTransactionHistoryForNft: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      const transactions: Transaction[] = await ctx.prisma.transaction.findMany(
        {
          where: { nftId: input.id },
        }
      );
      return transactions;
    }),
  getCollectionStats: publicProcedure
    .input(z.object({ collectionId: z.string() }))
    .query(async ({ ctx, input }) => {
      const nfts = await ctx.prisma.nft.findMany({
        where: { collectionId: input.collectionId },
      });
      const transactions: Transaction[] = await ctx.prisma.transaction.findMany(
        {
          where: { collectionId: input.collectionId },
        }
      );
      let stats: CollectionStats = {
        totalNfts: nfts.length,
        totalListed: 0,
        totalSold: 0,
        totalValue: 0,
        floorPrice: nfts.length > 0 ? MAX_VALUE : 0,
        uniqueOwners: 0,
        totalVolume: 0,
      };
      const owners = new Map<string, boolean>();
      for (const nft of nfts) {
        owners.set(nft.owner, true);
        if (nft.isListed) {
          stats.totalListed++;
        }
        stats.totalValue += parseFloat(weiToEth(nft.price));
        if (
          parseFloat(weiToEth(nft.price)) < stats.floorPrice &&
          nft.isListed
        ) {
          stats.floorPrice = parseFloat(weiToEth(nft.price));
        }
      }
      for (const transaction of transactions) {
        if (transaction.type == "sale") {
          stats.totalSold++;
          stats.totalVolume += parseFloat(weiToEth(transaction.price));
        }
      }
      if (stats.floorPrice == MAX_VALUE) {
        stats.floorPrice = 0;
      }
      stats.uniqueOwners = owners.size;
      return stats;
    }),
});
