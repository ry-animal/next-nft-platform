import { Collection } from "@prisma/client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { api } from "../../utils/api";
import { b64toBlob } from "../../core/contentUtils";

export interface CollectionProps {
  collection?: Collection;
}

function CollectionsHeroSection(props: CollectionProps) {
  const [thumb, setThumb] = useState<string | undefined>(undefined);
  const [back, setBack] = useState<string | undefined>(undefined);
  const apiContext = api.useContext();
  useEffect(() => {
    if (props.collection) {
      fetchThumb();
      fetchBack();
    }
  }, [props.collection]);

  async function fetchBack() {
    if (!props.collection) return;
    if (props.collection && props.collection.backgroundImage == null) return;

    const backgroundImage = await apiContext.content.getAsset.fetch({
      id: props.collection!.backgroundImage!,
    });
    if (backgroundImage == null) return;
    const backBlob = b64toBlob(
      backgroundImage!.data! as string,
      backgroundImage!.mime
    );

    setBack(URL.createObjectURL(backBlob));
  }

  async function fetchThumb() {
    if (!props.collection) return;
    if (props.collection.thumb == null) return;

    const thumb = await apiContext.content.getAsset.fetch({
      id: props.collection.thumb!,
    });
    if (thumb == null) return;
    const thumbBlob = b64toBlob(thumb!.data! as string, thumb!.mime);

    setThumb(URL.createObjectURL(thumbBlob));
  }

  return (
    <div className="relative h-full min-h-screen w-full bg-[url('/images/collection/hero-bg.png')] bg-cover pt-[4rem] md:pt-[10rem] ">
      <div className="absolute inset-0 bg-white bg-opacity-80" />
      <div className="relative z-10 flex h-full w-full flex-col text-black sm:flex-row md:px-[6rem] md:pb-[9.5rem]">
        <div className="flex w-[100%] flex-col items-center justify-center py-[3rem] px-[1rem] md:block md:w-[60%] md:py-[0] md:px-[0]">
          <div className="mb-[40px] text-center font-bungeeshade text-4xl md:text-left md:text-[90px] md:leading-[115px]">
            {props.collection && (props.collection.metaData as any).name}
          </div>
          <p className="leading-1.5 mb-[40px] w-[90%] font-neutral text-base font-medium">
            {props.collection && (props.collection.metaData as any).description}
          </p>
          <Link
            href={"/collection/" + props.collection?.identifier}
            className="flex-1 content-center items-center border-transparent bg-black px-5 py-3  font-neutral text-lg text-white transition-all"
          >
            Check it out!
          </Link>
        </div>

        <div className="relative flex h-full w-[100%] items-center justify-center md:block md:w-[40%]">
          <div className="hidden h-[100%] w-[85%] border border-black  p-[12px] md:block md:h-[420px] md:w-[420px]">
            <img
              className="h-full  w-full opacity-50 grayscale"
              src={back}
              alt=""
            />
          </div>
          <div className="h-[90%] w-[85%] border border-black p-[12px] md:absolute md:top-28 md:left-20 md:h-[420px] md:w-[420px]">
            <img className="h-full w-full" src={thumb} alt="" />
          </div>
        </div>
      </div>

      {/* <div className="absolute bottom-0 flex w-full justify-between border-t border-t-black md:h-[100px]">
        <div className="flex h-full ">
          <button className="flex h-full w-40 items-center justify-center border border-white bg-black">
            <img src="/images/arrow left.svg" alt="" />
          </button>
          <button className="flex h-full w-40 items-center justify-center border border-white bg-black">
            <img src="/images/arrow right.svg" alt="" />
          </button>
        </div>
      </div> */}
    </div>
  );
}

export default CollectionsHeroSection;
