import { z } from "zod";

import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";

export const userRouter = createTRPCRouter({
  getUser: publicProcedure
    .input(z.object({ userId: z.string() }))
    .query(async ({ ctx, input }) => {
      if (input.userId == "undefined") {
        return undefined;
      }
      return await ctx.prisma.user.findUnique({
        where: { id: input.userId },
      });
    }),
});
