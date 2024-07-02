import { Collection, Nft } from "@prisma/client";
import React, { useContext, useEffect } from "react";
import { api } from "../../utils/api";
import { StaticBackground } from "../BackgroundStatic";

import Link from "next/link";
import { Metadata } from "../../core/types";
import { PriceHistoryChart } from "./PriceHistoryChart";
import { compressAddress } from "../../core/web3/utils";
import { getToken, weiToUSD, weiToEth } from "../../core/web3/currency";
import { IconMatic } from "../../assets/IconMatic";
import AuthContext from "../../contexts/AuthContext";
interface NFTProps {
  collection: Collection;
  nft: Nft;
}

export const MoreDetails = (props: NFTProps) => {
  const { signer, getBlockchain } = useContext(AuthContext);
  const transactionsQuery = api.stats.getTransactionHistoryForNft.useQuery({
    id: props.nft ? `${props.nft.id}` : "",
  });

  function getTraits(metadata: Metadata) {
    if (!metadata) {
      return [];
    }
    if (!metadata.attributes) {
      return [];
    }
    if (metadata.attributes) {
      if (!Array.isArray(metadata.attributes)) {
        return [metadata.attributes];
      }
      if (metadata.attributes.length == 0) {
        return [];
      }
      if (metadata.attributes.length > 15) {
        return metadata.attributes?.slice(0, -5);
      } else {
        return metadata.attributes;
      }
    }
    return [];
  }

  return (
    <div className="w-full">
      <div className=" min-h-30 flex w-full flex-col border-b border-black text-black md:flex-row">
        <div className=" flex flex-1 flex-col border-black py-[10px] md:border-r md:p-10 md:py-[0]">
          <div className="pb-3 font-bungee">TRAITS</div>
          <div className="grid w-full grid-cols-2 gap-2 sm:grid-cols-3 ">
            {props.nft &&
              props.nft.metaData &&
              getTraits(props.nft.metaData as any as Metadata).map((trait) => (
                <div
                  key={trait.trait_type}
                  className="relative flex items-center   p-1      "
                >
                  <div className="min-w-0 flex-1 border border-black p-2">
                    <span className="absolute inset-0" aria-hidden="true" />
                    <p className="pt-1  text-center font-poppins  text-sm text-zinc-400 ">
                      {trait.trait_type}
                    </p>
                    <p className=" text-center  font-poppins text-base  text-black">
                      {trait.value}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className="flex flex-1 flex-col py-[10px] md:p-10 md:py-[0]">
          <div className="font-bungee">PRICE HISTORY</div>
          <div className="p-2">
            {transactionsQuery.data && (
              <PriceHistoryChart transactions={transactionsQuery.data} />
            )}
          </div>
        </div>
      </div>
      <div className=" min-h-30 flex w-full flex-col border-b border-black text-black md:flex-row">
        <div className=" flex w-full flex-col border-black py-[10px] md:w-1/3 md:border-r md:p-10 md:py-[0]">
          <div className="pb-3 font-bungee">DETAILS</div>
          <div className="font-poppins">
            <div className="my-2 border border-black bg-zinc-900/10 md:p-4">
              <div className="flex flex-col justify-between p-2 text-sm ">
                <div className="flex">Floor Price</div>
                <div className="flex  font-bold ">
                  {weiToEth(props.nft?.price!)}{" "}
                  {props.collection && props.collection.blockchain
                    ? getToken(props.collection!.blockchain!)
                    : "ETH"}
                </div>
              </div>
              <div className="flex flex-col justify-between p-2 text-sm ">
                <div className="flex">Creator Royalty</div>
                <div className="flex  font-bold ">
                  {props.collection.creatorRoyalty}
                </div>
              </div>
              <div className="flex flex-col justify-between p-2 text-sm ">
                <div className="flex">Token ID</div>
                <div className="flex  font-bold ">{props.nft?.tokenId}</div>
              </div>
              <div className="flex flex-col justify-between p-2 text-sm ">
                <div className="flex">Contract</div>
                <div className="flex  font-bold ">
                  {props.collection
                    ? compressAddress(props.collection.contractAddress!)
                    : "unknown"}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-col py-[10px] md:p-10 md:py-[0]">
          <div className="font-bungee">TRANSACTION HISTORY</div>
          <div className="pt-5">
            <div className=" flex  items-center  bg-zinc-900/10     font-poppins text-3xl   leading-4 text-black ">
              <table className="min-w-full divide-y divide-black border border-black ">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-right text-sm font-semibold "
                    >
                      Price
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-right text-sm font-semibold "
                    >
                      USD Price
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold  "
                    >
                      Type
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold "
                    >
                      Address
                    </th>

                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold "
                    >
                      Date
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-black ">
                  {transactionsQuery &&
                    transactionsQuery.data &&
                    transactionsQuery.data.map((transaction) => (
                      <tr key={transaction.id}>
                        <td className="whitespace-nowrap px-3 py-4 text-right text-sm ">
                          {weiToEth(transaction.price)}{" "}
                          {props.collection && props.collection.blockchain
                            ? getToken(props.collection!.blockchain!)
                            : "ETH"}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-right text-sm ">
                          $
                          {weiToUSD(
                            transaction.price,
                            props.collection?.blockchain!
                          )}
                        </td>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm  ">
                          {transaction.type.toUpperCase()}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm ">
                          {compressAddress(transaction.to)}
                        </td>

                        <td className="whitespace-nowrap px-3 py-4 text-sm ">
                          {parseInt(transaction.timeStamp) > 0 &&
                            new Date(
                              parseInt(transaction.timeStamp) * 1000
                            ).toLocaleTimeString()}{" "}
                          -{" "}
                          {parseInt(transaction.timeStamp) > 0 &&
                            new Date(
                              parseInt(transaction.timeStamp) * 1000
                            ).toLocaleDateString()}
                        </td>
                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                          <a
                            href={
                              getBlockchain().explorer +
                              "/tx/" +
                              transaction.hash
                            }
                            key={transaction.hash + "_aa"}
                            target="_blank"
                          >
                            <IconMatic size={30} />
                          </a>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/*
<div className="bg-black">
                      <div className="my-4 bg-zinc-900">
                        <div className="flex justify-between p-2 text-sm text-white">
                          <div className="flex">Floor Price:</div>
                          <div className="flex bg-zinc-200 font-bold text-zinc-800">
                            {weiToMatic(nftQuery.data?.price!)}
                          </div>
                        </div>
                        <div className="flex justify-between p-2 text-sm text-white">
                          <div className="flex">Creator Royalty:</div>
                          <div className="flex bg-zinc-200 font-bold text-zinc-800">
                            10%
                          </div>
                        </div>
                        <div className="flex justify-between p-2 text-sm text-white">
                          <div className="flex">Token ID:</div>
                          <div className="flex bg-zinc-200 font-bold text-zinc-800">
                            {nftQuery.data?.tokenId}
                          </div>
                        </div>
                        <div className="flex justify-between p-2 text-sm text-white">
                          <div className="flex">Contract:</div>
                          <div className="flex bg-zinc-200 font-bold text-zinc-800">
                            {collection
                              ? compressAddress(collection.contractAddress!)
                              : "unknown"}
                          </div>
                        </div>
                      </div>
                      <div className="mt-5 flex w-full items-center  bg-zinc-900/80 p-4   font-mono text-2xl   leading-4 text-zinc-100 ">
                        <div className="flex-1">
                          <IconTrendUp />
                        </div>
                        <div className="px-2"></div>
                        <div>Price History</div>
                        <div className="flex-1"></div>
                      </div>
                      <div className=" flex  items-center  bg-zinc-900/80     font-display text-3xl   leading-4 text-gray-700 ">
                        <table className="min-w-full divide-y divide-zinc-400 px-2">
                          <thead>
                            <tr>
                              <th
                                scope="col"
                                className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-zinc-300 "
                              >
                                Type
                              </th>
                              <th
                                scope="col"
                                className="px-3 py-3.5 text-left text-sm font-semibold text-zinc-300"
                              >
                                Address
                              </th>
                              <th
                                scope="col"
                                className="px-3 py-3.5 text-right text-sm font-semibold text-zinc-300"
                              >
                                Price
                              </th>
                              <th
                                scope="col"
                                className="px-3 py-3.5 text-left text-sm font-semibold text-zinc-300"
                              >
                                Date
                              </th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-200 ">
                            {transactionsQuery &&
                              transactionsQuery.data &&
                              transactionsQuery.data.map((transaction) => (
                                <tr key={transaction.id}>
                                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-[#52B157] ">
                                    {transaction.type.toUpperCase()}
                                  </td>
                                  <td className="whitespace-nowrap px-3 py-4 text-sm text-zinc-300">
                                    {compressAddress(transaction.to)}
                                  </td>
                                  <td className="whitespace-nowrap px-3 py-4 text-right text-sm text-zinc-300">
                                    {weiToMatic(transaction.price)} MATIC
                                  </td>
                                  <td className="whitespace-nowrap px-3 py-4 text-sm text-zinc-300">
                                    {parseInt(transaction.timeStamp) > 0 &&
                                      new Date(
                                        parseInt(transaction.timeStamp) * 1000
                                      ).toLocaleTimeString()}{" "}
                                    -{" "}
                                    {parseInt(transaction.timeStamp) > 0 &&
                                      new Date(
                                        parseInt(transaction.timeStamp) * 1000
                                      ).toLocaleDateString()}
                                  </td>
                                  <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                                    <a
                                      href={
                                        process.env
                                          .NEXT_PUBLIC_POLYGON_BASE_URL +
                                        "/tx/" +
                                        transaction.hash
                                      }
                                      key={transaction.hash + "_aa"}
                                      target="_blank"
                                    >
                                      <IconMatic size={30} />
                                    </a>
                                  </td>
                                </tr>
                              ))}
                          </tbody>
                        </table>
                      </div>
                      <div className="mt-5 flex w-full items-center  bg-zinc-900/80  p-4  font-mono text-2xl    leading-4 text-zinc-100 ">
                        <div className="flex-1">
                          <IconCamera />
                        </div>
                        <div className="px-2"></div>
                        <div>Traits</div>
                        <div className="flex-1"></div>
                      </div>
                      <div className=" flex  items-center bg-zinc-900/80 p-2  font-display text-3xl  leading-4 text-gray-700 ">
                        <div className="grid w-full grid-cols-1 gap-2 sm:grid-cols-3">
                          {getTraits(
                            nftQuery.data!.metaData as any as Metadata
                          ).map((trait) => (
                            <div
                              key={trait.trait_type}
                              className="relative flex items-center space-x-3 rounded border border-zinc-500  bg-zinc-800/50    "
                            >
                              <div className="min-w-0 flex-1 ">
                                <span
                                  className="absolute inset-0"
                                  aria-hidden="true"
                                />
                                <p className="pt-1  text-center font-display  text-sm text-zinc-200 ">
                                  {trait.trait_type.toUpperCase()}
                                </p>
                                <p className=" text-center  font-display text-base  text-gray-200">
                                  {trait.value}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>*/
