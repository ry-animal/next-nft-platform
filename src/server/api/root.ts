import { createTRPCRouter } from "./trpc";
import { nftRouter } from "./routers/nft";
import { collectionRouter } from "./routers/collections";
import { contentRouter } from "./routers/content";
import { kycRouter } from "./routers/kyc";
import { aiRouter } from "./routers/ai";
import { statsRouter } from "./routers/stats";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter({
  collection: collectionRouter,
  nft: nftRouter,
  content: contentRouter,
  kyc: kycRouter,
  ai: aiRouter,
  stats: statsRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
