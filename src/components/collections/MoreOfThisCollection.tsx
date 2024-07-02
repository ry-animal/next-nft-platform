import { Collection, Nft } from "@prisma/client";
import React, { useEffect, useState } from "react";
import { api } from "../../utils/api";
import { b64toBlob } from "../../core/contentUtils";
import { StaticBackground } from "../BackgroundStatic";

import Link from "next/link";
import NftCard from "../nfts/card";
interface NFTProps {
  collection: Collection;
}

export const MoreOfThisCollection = (props: NFTProps) => {
  const token = "ETH";
  const nfts = api.nft.getNfts.useQuery({
    collectionId: props.collection.id,
    start: 0,
    count: 3,
  });

  return (
    <div className=" w-full ">
      <StaticBackground amount={0.5} dark={true} className="py-[1rem]">
        <div className="items-left mb-3 flex gap-12 px-7 py-5 md:py-12 md:pl-8 md:pr-4">
          <div className="text-center font-bungeeshade text-3xl md:text-left md:text-5xl">
            More of this Collection
          </div>
        </div>
        <div className="flex grid-cols-4 flex-col-reverse pb-10 md:grid md:grid-cols-4 md:pb-20 md:pr-4 lg:grid-cols-4">
          <div
            key="see_all"
            className=" my-[1rem] mx-auto items-center  text-center  md:my-auto"
          >
            <div className="relative h-fit w-40 md:h-20">
              <Link
                href={"/collection/" + props.collection.identifier}
                className="absolute left-1 top-1 z-0  h-11  w-32 border border-white  py-2  px-6 font-neutral"
              >
                SEE ALL
              </Link>
              <Link
                href={"/collection/" + props.collection.identifier}
                className="absolute left-0 top-0 z-10  h-11  w-32 border   border-white bg-zinc-800 py-2 px-6"
              >
                SEE ALL
              </Link>
            </div>
          </div>
          {nfts.data?.map((nft: Nft) => (
            <div key={nft.id}>
              <div className="flex h-full items-center justify-center p-2 ">
                <NftCard
                  nft={nft}
                  collection={props.collection}
                  userAddress=""
                />
              </div>
            </div>
          ))}
        </div>
      </StaticBackground>
    </div>
  );
};
