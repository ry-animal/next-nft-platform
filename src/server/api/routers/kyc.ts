import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "../trpc";
import { Whitelisting } from "@prisma/client";
import { Contracts } from "../../../core/web3/contracts";
import { ethers } from "ethers";
import { getRPcProvider } from "../../../core/web3/utils";

export const kycRouter = createTRPCRouter({
  getKYC: publicProcedure
    .input(z.object({ address: z.string(), contract: z.string() }))
    .query(async ({ ctx, input }) => {
      return await ctx.prisma.whitelisting.findMany({
        where: { address: input.address, contract: input.contract },
      });
    }),
  checkKYC: publicProcedure
    .input(z.object({ address: z.string(), contract: z.string() }))
    .query(async ({ ctx, input }) => {
      const listings = await ctx.prisma.whitelisting.findMany({
        where: { address: input.address, contract: input.contract },
      });
      if (listings.length == 0) {
        return false;
      }

      for (let i = 0; i < listings.length; i++) {
        if (listings[i]!.status! == "completed") {
          return true;
        }
      }

      const collection = await ctx.prisma.collection.findFirst({
        where: { contractAddress: input.contract },
      });

      const historyData = await getPersonaResponse(
        listings[listings.length - 1]!.reference!
      );

      await ctx.prisma.whitelisting.update({
        where: { id: listings[listings.length - 1]!.id },
        data: {
          events: historyData,
          status: historyData.attributes.status,
        },
      });

      if (historyData.attributes.status == "completed") {
        const etherProvider = getRPcProvider();
        const etherSigner = new ethers.Wallet(
          process.env.WITHELIST_SIGNER_PRIVATE_KEY!,
          etherProvider
        );
        //whitelist onchain
        await Contracts.whiteListAddress(
          collection!,
          input.address,
          etherSigner
        );
        //update db

        ///update the user's status
      }
      return false;
    }),
  update: publicProcedure
    .input(
      z.object({
        reference: z.string(),
        address: z.string(),
        collectionID: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const existingRecord = await ctx.prisma.whitelisting.findFirst({
        where: { reference: input.reference },
      });
      console.log(">>>>>###WHITELIST TO DB###");
      console.log("existing", existingRecord);
      if (existingRecord?.status == "completed") {
        return existingRecord;
      }
      const collection = await ctx.prisma.collection.findUnique({
        where: { id: input.collectionID },
      });

      const historyData = await getPersonaResponse(input.reference);
      console.log("data", JSON.stringify(historyData));

      if (historyData.attributes.status == "completed") {
        const etherProvider = getRPcProvider();
        const etherSigner = new ethers.Wallet(
          process.env.WITHELIST_SIGNER_PRIVATE_KEY!,
          etherProvider
        );
        await Contracts.whiteListAddress(
          collection!,
          input.address,
          etherSigner
        );
        ///update the user's status
      }
      if (existingRecord) {
        return await ctx.prisma.whitelisting.update({
          where: { id: existingRecord.id },
          data: {
            events: historyData,
            status: historyData.attributes.status,
          },
        });
      } else {
        return await ctx.prisma.whitelisting.create({
          data: {
            address: input.address,
            events: historyData,
            reference: input.reference,
            status: historyData.attributes.status,
            contract: collection!.contractAddress!,
          },
        });
      }
    }),
});

async function getPersonaResponse(ref: string): Promise<any> {
  const apiKey = process.env.PERSONA_API_KEY;
  const response = await fetch(
    `https://withpersona.com/api/v1/inquiries/${ref}`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
    }
  );
  const data = await response.json();
  return data.data;
}
