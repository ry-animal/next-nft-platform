import { type NextPage } from "next";
import { useContext, useEffect, useState } from "react";
import { LandingSection } from "../components/home/LandingSection";
import { Scaffold } from "../components/Scaffold";
import Image from "next/image";
import Marquee from "../components/home/Marquee";
import InfoSection from "../components/home/InfoSection";
import CollectionSection from "../components/home/CollectionSection";
import PartnershipSection from "../components/home/PartnershipSection";
import AuthContext from "../contexts/AuthContext";

const Home: NextPage = () => {
  const { isBlue, setIsBlue } = useContext(AuthContext);
  return (
    <Scaffold>
      <div className="z-10  bg-transparent">
        <div className="flex min-h-screen flex-col">
          <div className="relative flex  flex-1  text-white">
            <div
              className="flex flex-col items-center justify-center p-4 md:p-0"
              id="streaming"
            >
              <LandingSection isBlue={isBlue} />
            </div>
            <div className=" absolute top-[90px] right-1 -z-10 block h-[320px] w-[283px] sm:right-24 md:h-[350px] md:w-[309px] lg:h-[475px] lg:w-[420px]">
              <Image src="/images/home/brutalism.svg" fill alt="brutalism" />
            </div>
          </div>
          <Marquee isBlue={isBlue} />
        </div>
        <InfoSection isBlue={isBlue} />

        <CollectionSection />
      </div>
      <div className="flex h-52 w-screen bg-logo-background bg-cover bg-center bg-no-repeat opacity-10" />

      <PartnershipSection />
    </Scaffold>
  );
};

export default Home;
