import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "../trpc";
import { OpenAIModel, SCChatMessage } from "../../snowgpt/types";
import { config } from "process";
import { SnowGPT } from "../../snowgpt";

export const aiRouter = createTRPCRouter({
  chat: publicProcedure
    .input(
      z.object({
        prompt: z.string(),
        address: z.string(),
        balance: z.string(),
        query: z.optional(z.string()),
      })
    )
    .mutation(async ({ ctx, input }) => {
      try {
        const snow = new SnowGPT(input.address, input.balance);
        await snow.setPrompt();
        if (input.query) {
          const response = await snow.query(input.query);
          return { response: response, status: "success" };
        }
        const response = await snow.chat(input.prompt, ctx.prisma);
        return { response: response, status: "success" };
      } catch (e) {
        console.log("error", e);
        return {
          response: {
            response: "I'm sorry, something went wrong",
            result: [],
            responder: "SYSTEM",
            query: false,
          } as SCChatMessage,
          status: "error",
        };
      }
    }),
});
