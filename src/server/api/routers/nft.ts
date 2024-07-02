import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { Network, Alchemy } from "alchemy-sdk";
import { Contracts } from "../../../core/web3/contracts";
import { getRPcProvider, parseMetaImageURL } from "../../../core/web3/utils";
const settings = {
  apiKey: process.env.ALCHEMY_API_KEY,
  network: Network.MATIC_MAINNET,
};

const alchemy = new Alchemy(settings);

export const nftRouter = createTRPCRouter({
  getNFT: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      if (input.id == "undefined") {
        return undefined;
      }
      return await ctx.prisma.nft.findUnique({
        where: { id: input.id },
      });
    }),
  getNftsForUser: publicProcedure
    .input(
      z.object({
        owner: z.string(),
      })
    )
    .query(async ({ ctx, input }) => {
      return await ctx.prisma.nft.findMany({
        where: { owner: input.owner },
        orderBy: { updatedAt: "desc" },
      });
    }),
  getNfts: publicProcedure
    .input(
      z.object({
        collectionId: z.string(),
        start: z.number(),
        count: z.number(),
        listed: z.optional(z.boolean()),
      })
    )
    .query(async ({ ctx, input }) => {
      console.log("input", input);
      let whereClause: any = { collectionId: input.collectionId };

      if (input.listed) {
        whereClause = { ...whereClause, isListed: input.listed };
      }
      return await ctx.prisma.nft.findMany({
        where: whereClause,
        orderBy: { price: "desc" },
        skip: input.start,
        take: input.count,
      });
    }),
  checkNFT: publicProcedure
    .input(z.object({ token: z.number(), contract: z.string() }))
    .query(async ({ ctx, input }) => {
      const collection = await ctx.prisma.collection.findFirst({
        where: { contractAddress: input.contract },
      });
      const nft = await ctx.prisma.nft.findFirst({
        where: { tokenId: input.token, collectionId: collection!.id },
      });
      if (!nft) {
        //check price, owner,listed
        const nftOnChain = await Contracts.getOnChainNFTData(
          collection!,
          input.token
        );
        console.log("nftOnChain", nftOnChain);
        if (nftOnChain) {
          await getNFTThumbnail(nftOnChain);
          await ctx.prisma.nft.create({
            data: nftOnChain as any,
          });
        }
      }
      return await ctx.prisma.nft.findFirst({
        where: { tokenId: input.token, collectionId: collection!.id },
      });
    }),
  updateNFT: publicProcedure
    .input(z.object({ id: z.string(), tx: z.optional(z.string()) }))
    .query(async ({ ctx, input }) => {
      console.log("tx input", input.tx);
      if (input.tx) {
        let receipt = await getRPcProvider().getTransactionReceipt(input.tx);
        console.log("receipt", receipt);
      }
      const nft = await ctx.prisma.nft.findUnique({
        where: { id: input.id },
      });
      const collection = await ctx.prisma.collection.findUnique({
        where: { id: nft?.collectionId },
      });
      if (nft) {
        //check price, owner,listed
        const nftOnChain = await Contracts.getOnChainNFTData(
          collection!,
          nft.tokenId
        );
        console.log("nftOnChain", nftOnChain);
        if (
          nftOnChain?.owner != nft.owner ||
          nftOnChain?.price != nft.price ||
          nftOnChain?.isListed != nft.isListed
        ) {
          await ctx.prisma.nft.update({
            where: { id: input.id },
            data: {
              owner: nftOnChain?.owner,
              price: nftOnChain?.isListed ? nftOnChain?.price : nft.price,
              isListed: nftOnChain?.isListed,
              status: nftOnChain?.status,
            },
          });
        }
      }
      return await ctx.prisma.nft.findUnique({
        where: { id: input.id },
      });
    }),
  getNftsForContract: publicProcedure
    .input(z.object({ contractAddress: z.string() }))
    .query(async ({ input }) => {
      //alchemy.nft.refreshContract(input.contractAddress);
      const nfts = await alchemy.nft.getNftsForContract(input.contractAddress);
      return { nfts: nfts.nfts };
    }),
});

import JPEG from "jpeg-js";
import { BigNumber, ethers } from "ethers";
import Jimp from "jimp";
import { NftNoId } from "../../../core/types";
import { Nft } from "@prisma/client";

Jimp.decoders["image/jpeg"] = (data: Buffer) =>
  JPEG.decode(data, { maxMemoryUsageInMB: 1024 });

async function getNFTThumbnail(nft: NftNoId) {
  console.log("getNFTThumbnail>>>>>", nft.metaData as any);
  const imageUrl = parseMetaImageURL((nft.metaData as any).image!);
  console.log("imageUrl>>>>>", imageUrl);
  const image = await Jimp.read(imageUrl);
  console.log(
    "image size>>>>>",
    (await image.getBufferAsync(Jimp.MIME_JPEG)).byteLength
  );
  const thumbnail = await image
    .resize(260, Jimp.AUTO)
    .quality(50)
    .getBase64Async("image/jpeg");
  nft.thumb = thumbnail;

  console.log("thumbnail length>>>>>", thumbnail.length);
}
