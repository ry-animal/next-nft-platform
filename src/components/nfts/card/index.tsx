import { Collection, Nft } from "@prisma/client";
import { useState } from "react";
import { LoaderBlack } from "../../loaderBlack";
import { IconCollection } from "../../../assets/IconCollection";
import { getToken, weiToEth, weiToMatic } from "../../../core/web3/currency";
import { useRouter } from "next/router";
import Image from "next/image";

interface NFTProps {
  nft: Nft;
  collection?: Collection;
  userAddress?: string;
  light?: boolean;
  minimal?: boolean;
}

const NftCard = (props: NFTProps) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  let button = props.nft.isListed ? "BUY NOW" : "VIEW";
  if (props.userAddress == props.nft.owner) {
    button = "EDIT";
  }

  if (props.minimal) {
    return (
      <div
        key={props.nft.id}
        className={
          "group flex h-fit flex-col overflow-hidden border grayscale transition-all duration-500 hover:grayscale-0" +
          (!props.light
            ? " border-white shadow-[10px_10px_0__#ffffff]"
            : " border-black shadow-[10px_10px_0__rgba(0,0,0)]")
        }
      >
        <div className="relative flex flex-col ">
          <div className="burns group ">
            {!loading && (
              <Image
                onClick={() => {
                  router.push("/nft/" + props.nft.id);
                }}
                src={
                  props.nft.thumb
                    ? props.nft.thumb
                    : (props.nft.metaData! as any)?.image
                }
                width={300}
                height={300}
                loading="lazy"
                alt={(props.nft.metaData! as any)?.name}
                className="h-full w-full  object-cover object-center sm:h-full sm:w-full"
              />
            )}
            {loading && (
              <div>
                <LoaderBlack title="Loading NFT" />
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
  return (
    <div
      key={props.nft.id}
      className={
        "group flex flex-col overflow-hidden  border  grayscale transition-all duration-500 hover:grayscale-0" +
        (!props.light ? " border-white" : " border-black")
      }
    >
      <div className="relative flex flex-col ">
        <div className="burns group ">
          {!loading && (
            <Image
              onClick={() => {
                router.push("/nft/" + props.nft.id);
              }}
              src={
                props.nft.thumb
                  ? props.nft.thumb
                  : (props.nft.metaData! as any).image
              }
              width={300}
              height={300}
              loading="lazy"
              alt={(props.nft.metaData! as any).name}
              className="h-full w-full  object-cover object-center sm:h-full sm:w-full"
            />
          )}
          {loading && (
            <div>
              <LoaderBlack title="Loading NFT" />
            </div>
          )}
        </div>
      </div>

      <div
        className={
          "p-4 font-neutral text-sm font-light " +
          (!props.light ? " text-white" : " text-black")
        }
      >
        <a
          className="flex"
          href={"/nft/" + props.nft.id}
          onClick={(e) => {
            //props.setCurrentNft(props.nft);
          }}
        >
          {(props.nft.metaData! as any).name ?? ""}
        </a>
      </div>

      <div
        className={
          "px-4 pb-3 font-poppins text-sm" +
          (!props.light ? " text-white" : " text-black")
        }
      >
        <a href={"/nft/" + props.nft.id}>
          <div className=" font-bold ">
            {weiToEth(props.nft.price)}{" "}
            {props.collection && props.collection.blockchain
              ? getToken(props.collection!.blockchain!)
              : "ETH"}
          </div>
        </a>
      </div>
    </div>
  );
};

export default NftCard;
