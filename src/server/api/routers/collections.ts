import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "../trpc";

export const collectionRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.collection.findMany();
  }),

  getNftCount: publicProcedure
    .input(
      z.object({
        collectionId: z.string(),
        listed: z.optional(z.boolean()),
      })
    )
    .query(async ({ ctx, input }) => {
      if (input.collectionId == "undefined" || input.collectionId == "") {
        return 0;
      }
      let whereClause: any = { collectionId: input.collectionId };

      if (input.listed) {
        whereClause = { ...whereClause, isListed: true };
      }
      return await ctx.prisma.nft.count({ where: whereClause });
    }),
  getCollection: publicProcedure
    .input(z.object({ collectionId: z.string() }))
    .query(async ({ ctx, input }) => {
      if (input.collectionId == "undefined") {
        return undefined;
      }
      return await ctx.prisma.collection.findUnique({
        where: { id: input.collectionId },
      });
    }),

  getCollectionByIdentifier: publicProcedure
    .input(z.object({ collectionId: z.string() }))
    .query(async ({ ctx, input }) => {
      if (input.collectionId == "undefined") {
        return undefined;
      }
      return await ctx.prisma.collection.findUnique({
        where: { identifier: input.collectionId },
      });
    }),
});
