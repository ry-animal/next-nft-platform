import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { Analytics } from "@vercel/analytics/react";

import { api } from "../utils/api";

import "../styles/globals.css";
import { AuthProvider } from "../contexts/AuthContext";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <AuthProvider>
        <Analytics />
        <Component {...pageProps} />.
      </AuthProvider>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
