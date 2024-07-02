import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "../trpc";
import { Pages } from "@prisma/client";

export const contentRouter = createTRPCRouter({
  getPage: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      return await ctx.prisma.pages.findUnique({
        where: { id: input.id },
      });
    }),
  getAsset: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      return await ctx.prisma.assets.findUnique({
        where: { id: input.id },
      });
    }),
});
