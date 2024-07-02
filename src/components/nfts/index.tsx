import { Collection, Nft } from "@prisma/client";

import { api } from "../../utils/api";
import React, { useState, useEffect, useContext } from "react";
interface NFTProps {
  collection: Collection;
  stats: CollectionStats | undefined;
}
import { CheckIcon } from "@heroicons/react/24/outline";
import AuthContext from "../../contexts/AuthContext";
import { Contracts } from "../../core/web3/contracts";
import { CollectionStats } from "../../types";
import NftCard from "./card";
import Link from "next/link";
import Tabs from "../Tabs";
import SearchInput from "../SearchInput";
import SelectBox from "../SelectBox";
import { IconDown } from "../../assets/IconDown";
import { IconSort } from "../../assets/IconSort";
import Pagination from "../Pagination";
import Table, { Column, SortDirection } from "../Table";

// Note: This is an example data for Table component usage. You can put adjust it with the real data that comes from the server.

type MyData = {
  Type: string;
  Artwork: string;
  From: string;
  To: string;
  Price: number;
  Date: string;
};
const columns: Column<MyData>[] = [
  {
    label: "Type",
    accessor: "Type",
  },
  {
    label: "Artwork",
    accessor: "Artwork",
  },
  {
    label: "From",
    accessor: "From",
  },
  {
    label: "To",
    accessor: "To",
  },
  {
    label: "Price",
    accessor: "Price",
    sort: (a, b, sortDirection) =>
      sortDirection === SortDirection.ASCENDING
        ? a.Price - b.Price
        : b.Price - a.Price, // Sort by price ascending or descending
    sortDirection: SortDirection.NONE,
  },
  {
    label: "Date",
    accessor: "Date",
  },
];

// const data: MyData[] = [
//   {
//     Type: "Auction",
//     Artwork: "Aaron Huey #069",
//     From: "@makeitrad",
//     To: "0xADd4…F2Ef",
//     Price: 1000000,
//     Date: new Date(1889, 5, 29).toISOString(),
//   },
//   {
//     Type: "Sell",
//     Artwork: "Aaron Huey #067",
//     From: "0xADd4…F2Ef",
//     To: "0xADd4…ras2",
//     Price: 5000000,
//     Date: new Date(1504, 0, 1).toISOString(),
//   },
// ];

const ITEMS_PER_PAGE = 6;

export const NftPage = (props: NFTProps) => {
  const { signer, isLoggedIn } = useContext(AuthContext);
  const [whiteListed, setWhiteListed] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const nfts = api.nft.getNfts.useQuery({
    collectionId: props.collection.id,
    start: 0,
    count: 10000,
    listed: false,
  });

  useEffect(() => {
    checkWhiteList();
    if (props.collection && isLoggedIn) {
      //getUserNFTSforCollection(props.collection);
    }
  }, [props.collection, isLoggedIn]);

  /*async function getUserNFTSforCollection(collection: Collection) {
    if (signer && collection) {
      const address = await signer!.getAddress();
      const tokens = await Contracts.listTokensOfOwner(collection, signer!);
      const isApprovedForAll = await Contracts.isApprovedForAll(
        collection,
        signer!
      );
      console.log("isApprovedForAll: " + isApprovedForAll);
      console.log(address + " >>>> tokens: " + tokens);
    }
  }*/
  let checkWhite = false;

  const [address, setAddress] = useState<string | undefined>(undefined);
  const apiContext = api.useContext();

  const checkWhiteList = async () => {
    if (signer && !checkWhite) {
      const address = await signer.getAddress();
      setAddress(address);
      if (props.collection.whiteListContract) {
        let whitelisted = await Contracts.isWhiteListed(
          props.collection,
          address,
          signer
        );
        if (!whiteListed) {
          const res = await apiContext.kyc.checkKYC.fetch({
            address: address,
            contract: props.collection.contractAddress!,
          });
          if (res) {
            whitelisted = true;
          }
        }
        setWhiteListed(whitelisted == true);
      }
    }
  };

  const NFTs =
    nfts && nfts.data
      ? nfts?.data.filter((nft) => {
          let hits: Map<string, boolean> = new Map<string, boolean>();
          let answer = true;
          hits.forEach((value: boolean, key: string) => {
            if (!value) {
              answer = false;
            }
          });

          return answer;
        })
      : nfts.data;

  const tabs = [
    {
      label: "NFTS",
      content: (
        <NftsTabContent
          searchQuery={searchQuery}
          NFTs={NFTs}
          address={address}
          collection={props.collection}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      ),
    },
    {
      label: "Description",
      content: (
        <DescriptionTabContent
          description={(props.collection.metaData as any)?.description}
        />
      ),
    },
    {
      label: "Activity",
      content: (
        <div className="overflow-x-scroll border-t border-b border-black py-[40px] px-8 md:overflow-x-auto md:px-[60px]">
          <Table data={[]} columns={columns} />
        </div>
      ),
    },
  ];

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1);
    console.log(event.target.value);
  };

  return (
    <div className="min-h-auto relative bg-[url('/images/collection/hero-bg.png')] bg-cover ">
      <div className="absolute inset-0 bg-white bg-opacity-80" />

      {props.collection.whiteListContract && (
        <div className="relative z-10 flex flex-row  bg-black p-1 px-2 font-poppins text-xs text-white">
          <CheckIcon className="w-5 px-1 " />
          <span>
            This collection is in compliance with Know Your Customer (KYC)
            standards designed for identity verification.{" "}
          </span>
        </div>
      )}

      <div className="min-h-auto relative z-10 mx-auto mt-20 w-full pb-[0px]">
        <div className="h-full w-full">
          <Tabs
            tabs={tabs}
            filtering_tools={{ showONTabIndex: 0, handleSearch: handleSearch }}
          />
        </div>
      </div>
    </div>
  );
};

const NftsTabContent = ({
  NFTs,
  collection,
  address,
  searchQuery,
  setCurrentPage,
  currentPage,
}: {
  NFTs: Nft[] | undefined;
  collection: Collection;
  address: string | undefined;
  searchQuery: string;
  setCurrentPage: any;
  currentPage: number;
}) => {
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  const filteredData = NFTs?.filter(
    (nft) =>
      (nft?.metaData as any).name
        ?.toLowerCase()
        ?.indexOf(searchQuery.toLowerCase()) !== -1
  );

  const itemsToRender = filteredData?.slice(startIndex, endIndex);
  return (
    <div>
      <div className=" grid w-[100%] grid-cols-2 gap-2 px-4 pb-[25px] pt-4 md:grid-cols-3 md:gap-0 md:px-[0] md:pt-[0] md:pb-[0] ">
        {itemsToRender &&
          itemsToRender.map((nft) => (
            <div
              key={nft.id}
              className="h-full border border-black  p-[0] md:border-t-0 md:px-8 md:py-[35px] "
            >
              <NftCard
                nft={nft}
                collection={collection}
                userAddress={address}
                light={true}
              />
            </div>
          ))}
      </div>
      <div className="flex w-full items-center justify-center bg-white pt-[50px] md:pt-[80px]">
        <Pagination
          light={false}
          currentPage={currentPage}
          itemsPerPage={ITEMS_PER_PAGE}
          totalItems={filteredData?.length || 0}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

const DescriptionTabContent = ({
  description,
}: {
  description: string | undefined;
}) => {
  return (
    <div className="flex w-full border-t  border-b border-black bg-transparent">
      <div className="w-full border-r border-black py-[30px]  px-8 md:w-[88%] md:px-[60px]">
        <p className="w-full font-poppins text-black">{description || "!"}</p>
      </div>
      <div className="hidden w-[12%] items-center justify-center py-[30px] pl-[20px] pr-[10px] md:flex">
        <img src="/images/description.svg" alt="" />
      </div>
    </div>
  );
};
