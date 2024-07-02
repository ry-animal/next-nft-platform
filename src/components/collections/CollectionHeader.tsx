import { Collection } from "@prisma/client";
import React, { useEffect, useState } from "react";
import { api } from "../../utils/api";
import { b64toBlob } from "../../core/contentUtils";
import { CollectionStats } from "../../types";
import { compressAddress } from "../../core/web3/utils";

export interface CollectionProps {
  collection: Collection;
  stats?: CollectionStats;
}

export const CollectionHeader = (props: CollectionProps) => {
  const apiContext = api.useContext();
  const [thumb, setThumb] = useState<string | undefined>(undefined);
  const [back, setBack] = useState<string | undefined>(undefined);
  const token = "ETH";
  useEffect(() => {
    if (props.collection) {
      fetchThumb();
      fetchBack();
    }
  }, [props.collection]);

  async function fetchBack() {
    if (props.collection.backgroundImage == null) return;

    const backgroundImage = await apiContext.content.getAsset.fetch({
      id: props.collection.backgroundImage!,
    });
    if (backgroundImage == null) return;
    const backBlob = b64toBlob(
      backgroundImage!.data! as string,
      backgroundImage!.mime
    );

    setBack(URL.createObjectURL(backBlob));
  }

  async function fetchThumb() {
    if (props.collection.thumb == null) return;

    const thumb = await apiContext.content.getAsset.fetch({
      id: props.collection.thumb!,
    });
    if (thumb == null) return;
    const thumbBlob = b64toBlob(thumb!.data! as string, thumb!.mime);

    setThumb(URL.createObjectURL(thumbBlob));
  }

  return (
    <div className=" flex w-full flex-col">
      <div className=" relative flex min-h-[85vh] w-full flex-col bg-black md:min-h-screen ">
        {back && (
          <img
            className="absolute left-0 top-0 z-0 h-full w-full object-cover"
            src={back}
          />
        )}
        <div className="absolute left-0 top-0 z-0 h-full w-full bg-black/75"></div>
        <div className="z-10 mt-[5rem] flex flex-1 flex-col justify-between p-4 font-bungeeshade text-5xl sm:text-7xl md:mt-[0] md:p-20">
          <div className="hidden flex-1 md:flex" />
          <div className="text-left text-[37px] leading-[50px] md:text-[60px] md:leading-[85px]">
            {(props.collection.metaData! as any).name}
          </div>
          <div className="pt-8 text-left font-neutral text-xl font-bold">
            <span className="font-light">BY</span> {props.collection.producer}
          </div>
          <div className="flex-1" />
        </div>

        <div className="relative bottom-[-45px] z-20 m-[0] mx-auto flex h-fit w-[90%] flex-row flex-wrap items-start justify-between bg-white py-[1rem] px-4 pt-[60px] shadow-[5px_5px_0__black,-5px_5px_0__black] md:bottom-[0] md:m-2 md:mx-[0] md:h-20 md:w-full md:flex-nowrap md:items-start md:justify-start md:p-[0] md:px-8 md:pt-[20px] md:shadow-none">
          <div className="z-11 absolute inset-0 top-[-40%] left-[22%]  ml-4 h-40 w-40 border-2 border-white bg-black/50 shadow-[10px_10px_0__black] md:top-[-135%]  md:left-[5%] md:border-black">
            {thumb && <img className="h-full w-full " src={thumb} />}
            {!thumb && (
              <div className="flex h-full w-full">
                <div className="m-auto"></div>
              </div>
            )}
          </div>
          <div className="hidden h-full w-[25%] md:block" />
          <div className="mt-[30px] mr-[0] flex w-[47%] flex-col text-[14px] text-black md:mr-auto md:mt-[0]  md:w-auto md:text-[16px]">
            <div className="flex-1  "></div>
            <div className="flex-1 font-bungee ">FLOOR PRICE</div>
            <div className="flex-1 font-poppins">
              {props.stats?.floorPrice} ETH
            </div>
            <div className="flex-1  "></div>
          </div>

          <div className="mt-[30px] mr-[0] flex w-[47%] flex-col text-[14px] text-black md:mr-auto md:mt-[0]  md:w-auto md:text-[16px]">
            <div className="flex-1  "></div>
            <div className="flex-1 font-bungee ">VOLUME</div>
            <div className="flex-1 font-poppins">
              {props.stats?.totalVolume} ETH
            </div>
            <div className="flex-1  "></div>
          </div>
          <div className="mt-[30px] mr-[0] flex w-[47%] flex-col text-[14px] text-black md:mr-auto md:mt-[0]  md:w-auto md:text-[16px]">
            <div className="flex-1  "></div>
            <div className="flex-1 font-bungee ">CREATOR ROYALTY</div>
            <div className="flex-1 font-poppins">
              {props.collection.creatorRoyalty}
            </div>
            <div className="flex-1  "></div>
          </div>
          <div className="mt-[30px] mr-[0] flex w-[47%] flex-col text-[14px] text-black md:mr-auto md:mt-[0]   md:w-auto md:text-[16px]">
            <div className="flex-1  "></div>
            <div className="flex-1 font-bungee ">BLOCKCHAIN</div>
            <div className="flex-1 font-poppins">
              {props.collection.blockchain}
            </div>
            <div className="flex-1  "></div>
          </div>
          <div className="mt-[30px] mr-[0] flex w-[47%] flex-col text-[14px] text-black md:mr-auto md:mt-[0]   md:w-auto md:text-[16px]">
            <div className="flex-1  "></div>
            <div className="flex-1 font-bungee ">CONTRACT</div>
            <div className="flex-1 font-poppins">
              {compressAddress(props.collection.contractAddress!)}
            </div>
            <div className="flex-1  "></div>
          </div>
        </div>
      </div>
    </div>
  );
};
