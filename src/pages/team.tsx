import { type NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";

import { api } from "../utils/api";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { StaticBackground } from "../components/BackgroundStatic";

const Team: NextPage = () => {
  const collections = api.collection.getAll.useQuery();

  return (
    <>
      <Head>
        <title>Snowcrash</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen flex-col">
        <Header />

        <div className="">
          <main>
            <StaticBackground amount={5} className="  text-white">
              <div></div>
            </StaticBackground>
          </main>
        </div>
        <div className="grow"></div>
        <Footer />
      </div>
    </>
  );
};

export default Team;
