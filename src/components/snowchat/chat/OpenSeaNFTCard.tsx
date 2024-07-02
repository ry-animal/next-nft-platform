import { Os_collection, Os_nft } from "@prisma/client";
import { useState } from "react";

import { weiToEth, weiToMatic } from "../../../core/web3/currency";
import { useRouter } from "next/router";
import Image from "next/image";

interface NFTProps {
  nft: Os_nft;
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

  return (
    <div
      key={"card_" + props.nft.id}
      className={
        "group flex flex-col overflow-hidden border  transition-all duration-500 " +
        (!props.light ? " border-white" : " border-black")
      }
    >
      <div className="relative flex flex-col ">
        <div className="burns group ">
          {!loading && (
            <img
              onClick={() => {
                router.push(props.nft.permalink);
              }}
              src={parseMetaURL(props.nft.imageUrl)}
              width={300}
              height={300}
              loading="lazy"
              alt={(props.nft.metaData! as any).name}
              className="h-[300px] w-full object-cover object-center"
            />
          )}
          {loading && <div>Loading</div>}
        </div>
      </div>

      <div
        className={
          "p-4 font-neutral text-sm font-light " +
          (!props.light ? " text-white" : " text-black")
        }
      >
        <a
          className="block w-full"
          href={props.nft.permalink}
          onClick={(e) => {
            //props.setCurrentNft(props.nft);
          }}
          style={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {props.nft.title}
        </a>
      </div>

      <div
        className={
          "px-4 pb-3 font-poppins text-sm" +
          (!props.light ? " text-white" : " text-black")
        }
      >
        <a href={props.nft.permalink}>
          <div className=" font-bold ">{props.nft.price} MATIC</div>
        </a>
      </div>
    </div>
  );
};

export default NftCard;
export function parseMetaURL(url: string): string {
  if (url?.startsWith("ipfs://")) {
    return `https://snowcrash.infura-ipfs.io/ipfs/${url.slice(7)}`;
  }

  return url;
}
