import { Collection } from "@prisma/client";
import React, { useEffect, useState } from "react";
import { api } from "../../utils/api";
import { b64toBlob } from "../../core/contentUtils";
import { CollectionProps } from "./CollectionHeader";

export const CollectionCard = (props: CollectionProps) => {
  const apiContext = api.useContext();
  const [thumb, setThumb] = useState<string | undefined>(undefined);

  const token = "ETH";
  useEffect(() => {
    if (props.collection) fetchThumb();
  }, [props.collection]);

  async function fetchThumb() {
    const thumbs = new Map<string, string>();
    if (props.collection.thumb == null) return;

    const thumb = await apiContext.content.getAsset.fetch({
      id: props.collection.thumb!,
    });
    if (thumb == null) return;
    const thumbBlob = b64toBlob(thumb!.data! as string, thumb!.mime);

    setThumb(URL.createObjectURL(thumbBlob));
  }

  return (
    <div className="h-full w-full">
      <a href={`/collection/${props.collection.identifier}`}>
        <div className="flex h-full w-full flex-1 flex-col items-start grayscale transition duration-1000 hover:grayscale-0">
          <div className="min-h-[65%] w-full flex-1">
            <div className="burns h-full w-full">
              {thumb ? (
                <img
                  src={thumb}
                  alt=""
                  className="min-h-[364px] w-full object-cover"
                />
              ) : (
                <div className="flex h-[332px] items-center justify-center font-bungee text-white">
                  Loading
                </div>
              )}
            </div>
          </div>

          <div className="flex w-full flex-1  flex-col p-3">
            <div className=" mt-4  px-2 text-left font-neutral text-xl font-bold text-white">
              {(props.collection.metaData! as any).name}
            </div>
            <div className="flex-1"></div>
            <div className="flex flex-1 flex-row items-start  ">
              <div className="flex flex-1 flex-col items-start  ">
                <div className="text-md text-[#DDDDDD]-400 mt-2 px-2  font-poppins">
                  Floor
                </div>
                <div className=" text-white-600 px-2 font-poppins text-xl">
                  {props.collection.tokenCount} {token}
                </div>
              </div>
              <div className="flex flex-1 flex-col items-end  ">
                <div className="text-md text-[#DDDDDD]-400 mt-2 px-2  font-poppins">
                  Items
                </div>
                <div className=" text-white-600 px-2 font-poppins text-xl">
                  {props.collection.tokenCount}
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};
