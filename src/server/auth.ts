import type { GetServerSidePropsContext } from "next";
import {
  getServerSession,
  type NextAuthOptions,
  type DefaultSession,
  RequestInternal,
} from "next-auth";

import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { env } from "../env/server.mjs";
import { prisma } from "./db";
import Credentials from "next-auth/providers/credentials";
import { Magic } from "@magic-sdk/admin";

/**
 * Module augmentation for `next-auth` types
 * Allows us to add custom properties to the `session` object
 * and keep type safety
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 **/
declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      authToken: string;
      // ...other properties
      // role: UserRole;
    } & DefaultSession["user"];
  }

  // interface User {
  //   // ...other properties
  //   // role: UserRole;
  // }
}

/**
 * Options for NextAuth.js used to configure
 * adapters, providers, callbacks, etc.
 * @see https://next-auth.js.org/configuration/options
 **/

const magic = new Magic(process.env.MAGIC_SECRET_KEY);

export const authOptions: NextAuthOptions = {
  secret: process.env.JWT_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  jwt: {
    maxAge: 30 * 24 * 60 * 60,
    secret: process.env.JWT_SECRET,
  },
  pages: {
    // override signIn page so we can integrate with Magic
    signIn: "/",
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    Credentials({
      name: "Magic Link",
      credentials: {
        didToken: { label: "DID Token", type: "text" },
      },
      async authorize(
        credentials: Record<"didToken", string> | undefined,
        req: Pick<RequestInternal, "body" | "query" | "headers" | "method">
      ) {
        // validate magic DID token
        console.log("credentials", process.env.MAGIC_SECRET_KEY);
        magic.token.validate(credentials!.didToken!);
        console.log("validated");
        // fetch user metadata
        const metadata = await magic.users.getMetadataByToken(
          credentials!.didToken!
        );
        console.log("metadata", metadata);
        // return user info
        return { ...metadata } as any;
      },
    }),
  ],
  callbacks: {
    signIn({ account, profile }) {
      console.log("signIn account", account, profile);
      return true; // Do different verification for other providers that don't have `email_verified`
    },

    jwt: async ({ token, user }) => {
      if (user) {
        token.authToken = (user as any).authToken;
        token.user = user;
      }
      return token;
    },
    session: async ({ session, token }) => {
      session.user = token.user as any;

      return session;
    },
  },
};

/**
 * Wrapper for getServerSession so that you don't need
 * to import the authOptions in every file.
 * @see https://next-auth.js.org/configuration/nextjs
 **/
export const getServerAuthSession = (ctx: {
  req: GetServerSidePropsContext["req"];
  res: GetServerSidePropsContext["res"];
}) => {
  return getServerSession(ctx.req, ctx.res, authOptions);
};
