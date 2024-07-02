import { Collection } from "@prisma/client";
import { api } from "../../utils/api";
import { useContext, useEffect, useState } from "react";
import { b64toBlob } from "../../core/contentUtils";
import { Avatar } from "../../assets/Avatar";
import { IconCopy } from "../../assets/IconCopy";
import { IconWallet } from "../../assets/IconWallet";
import AuthContext from "../../contexts/AuthContext";
import { weiToEth } from "../../core/web3/currency";
import { Contracts } from "../../core/web3/contracts";
import { NftOnChain } from "../../types";
import { Nft } from "@prisma/client";
import ScDialogXs from "../modals/ScDialogXs";
import { Dialog } from "@headlessui/react";
import { AlertMessage } from "../../core/types";
import {
  ExclamationCircleIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";
import { IconMore } from "../../assets/IconMore";
import Tabs from "../Tabs";
import Link from "next/link";

export const PageType = {
  USER: "user",
  COLLECTION: "collection",
} as const;

type PageType = (typeof PageType)[keyof typeof PageType];

interface UserNFTProps {
  type: PageType;
  address: string;
}

export const UserNftPage = ({ type, address }: UserNFTProps) => {
  const [error, setError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<AlertMessage>({
    title: "",
    message: "",
    type: "info",
  });
  const [thumb, setThumb] = useState<string | undefined>(undefined);
  const [balance, setBalance] = useState<string>("0");
  const { signer, getBlockchain } = useContext(AuthContext);
  const [askToken, setAskToken] = useState<boolean>(false);
  const [token, setToken] = useState<string>("");
  const [contract, setContract] = useState<Collection | undefined>(undefined);
  const [nfts, setNfts] = useState<Map<string, NftOnChain[]>>(
    new Map<string, NftOnChain[]>()
  );
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);
  const [approval, setApproval] = useState<Map<string, boolean>>(
    new Map<string, boolean>()
  );
  const [filterOption, setFilterOption] = useState("all");
  const apiContext = api.useContext();
  const collectionsQuery = api.collection.getAll.useQuery();
  const nftQuery = api.nft.getNftsForUser.useQuery({ owner: address });

  useEffect(() => {
    if (signer) {
      fetchBalance();
    }
  }, [collectionsQuery.data]);

  useEffect(() => {
    fetchUserNftsOnChain();
  }, [collectionsQuery.data, nftQuery.data]);

  async function addTokenToMarketplace(collection: Collection, token: string) {
    try {
      const nftOnChain = await Contracts.getOnChainNFTData(
        collection,
        parseInt(token),
        signer
      );
      console.log("nftOnChain : " + nftOnChain);
      if (nftOnChain?.owner === (await signer?.getAddress())) {
        await apiContext.nft.checkNFT.fetch({
          token: parseInt(token),
          contract: collection.contractAddress!,
        });
      } else {
        setErrorMessage({
          title: "Error",
          message: "You are not the owner of this NFT",
          type: "error",
        });
        setError(true);
      }
      nftQuery.refetch();
    } catch (e) {
      setErrorMessage({
        title: "Error",
        message: "Error adding NFT to DB",
        type: "error",
      });
      setError(true);
    }
  }

  async function fetchUserNftsOnChain() {
    let nftsMap: Map<string, NftOnChain[]> = new Map<string, NftOnChain[]>();
    let nftsMapDb: Map<string, Nft[]> = new Map<string, Nft[]>();
    if (!nftQuery.data) return;
    for (const nft of nftQuery.data!) {
      if (nftsMapDb.has(nft.collectionId)) {
        nftsMapDb.get(nft.collectionId)?.push(nft);
      } else {
        nftsMapDb.set(nft.collectionId, [nft]);
      }
    }

    if (
      nftQuery.data &&
      collectionsQuery.data &&
      collectionsQuery.data.length > 0
    ) {
      for (const collection of collectionsQuery.data) {
        let nftsOfCollection: (Nft | NftOnChain)[] = [];
        let isApproved = await Contracts.isApprovedForAll(collection, signer);
        console.log(collection.id + " isApproved : " + isApproved);
        setApproval(approval.set(collection.id, isApproved == true));
        const tokens = await Contracts.countTokensOfOwner(collection, signer);
        console.log(collection.id + " tokens for user: " + tokens);
        let maxToken = 0;
        if (tokens) {
          for (let i = 0; i < tokens; i++) {
            if (
              nftsMapDb.get(collection.id) &&
              i < nftsMapDb.get(collection.id)!.length
            ) {
              maxToken =
                maxToken < nftsMapDb.get(collection.id)![i]!.tokenId
                  ? nftsMapDb.get(collection.id)![i]!.tokenId
                  : maxToken;
              nftsOfCollection.push(nftsMapDb.get(collection.id)![i]!);
            } else {
              maxToken++;
              nftsOfCollection.push({
                tokenId: maxToken,
                collectionId: collection.id,
                owner: address,
                metaData: undefined,
              } as NftOnChain);
            }

            /*
            for (const nftData of nftQuery.data) {
              if (
                nftData.tokenId == parseInt(token) &&
                nftData.collectionId == collection.id
              ) {
                nft.metaData = nftData.metaData;
                nft.metaDataUrl = nftData.metaDataUrl;
                nft.nft = nftData;
                break;
              }
            }
            if (!nft.nft) {
              const nftOnChain = await Contracts.getOnChainNFTData(
                collection,
                nft.tokenId,
                signer
              );
              console.log("nftOnChain : " + nftOnChain);
              if (nftOnChain) nft.metaData = nftOnChain.metaData;
                          apiContext.nft.checkNFT.fetch({
                            token: nft.tokenId,
                            contract: collection.contractAddress!,
                          });
            }

            nftsOfCollection.push(nft);*/
          }
        }
        nftsMap.set(collection.id, nftsOfCollection);
        console.log(
          `[${collection.contractAddress}] tokens found : ` +
            tokens +
            " nftsOfCollection : " +
            nftsOfCollection.length
        );
      }
    }
    setNfts(nftsMap);
  }

  async function fetchBalance() {
    const bal = await signer?.getBalance();
    if (bal) {
      setBalance(bal.toString());
    }
  }
  const { data: nftData, isFetched: nftIsFetched } =
    api.nft.getNftsForUser.useQuery({
      owner: address,
    });

  async function fetchThumb(collection: Collection) {
    const thumb = await apiContext.content.getAsset.fetch({
      id: collection.thumb!,
    });
    if (thumb == null) return;
    const thumbBlob = b64toBlob(thumb!.data! as string, thumb!.mime);
    setThumb(URL.createObjectURL(thumbBlob));
  }

  async function givePermissionForTrading(
    collection: Collection,
    permission: boolean
  ) {
    await Contracts.setApprovedForAll(collection, permission, signer);
    fetchUserNftsOnChain();
  }

  const tabs = [
    {
      label: "Collected",
      content: (
        <CollectedTabContent
          collections={collectionsQuery.data}
          nfts={nfts}
          filterOption={filterOption}
        />
      ),
    },
    { label: "Activity", content: <>!</> },
    {
      label: "External NFT",
      content: (
        <ExternalNftsTabContent
          nfts={nfts}
          approval={approval}
          givePermissionForTrading={givePermissionForTrading}
          collections={collectionsQuery.data}
        />
      ),
    },
  ];
  return (
    <div className="min-h-auto flex h-full flex-col items-center">
      <div className=" h-24"></div>
      <div className="flex h-60 w-full flex-row  border-b border-black text-black">
        <div className="w-10"></div>
        <div className="w-60 p-10">
          <Avatar />
        </div>
        <div className="flex flex-1 flex-col">
          <div className="flex-1"></div>
          <div className="font-bungeeshade text-6xl">MY ACCOUNT</div>
          <div className="flex flex-row pt-5 font-neutral text-sm">
            <IconCopy height={16}></IconCopy>
            <div>{address}</div>
            <div className="w-20"></div>
            <IconWallet height={16}></IconWallet>
            <div className="pl-2">
              {weiToEth(balance)} {getBlockchain().currency}
            </div>
          </div>
          <div className="flex-1"></div>
        </div>
      </div>
      <div className="relative flex w-full items-center">
        <div className="w-full">
          <Tabs tabs={tabs} onChange={(tab) => setActiveTabIndex(tab)} />
        </div>
        <div className="absolute top-0 right-[35px] flex h-[70px] items-center">
          <button className="mr-3 w-fit cursor-pointer border border-black bg-transparent px-[23px] py-[5px] text-center font-poppins text-black">
            + Add NFT manually
          </button>

          {activeTabIndex === 0 && (
            <div className="flex w-fit items-center text-black">
              <span>Filter:</span>
              <select
                className="ml-[10px] block h-[40px] w-[180px] border border-black bg-[#EEEEEE] text-black"
                defaultValue={filterOption}
                onChange={(e) => {
                  setFilterOption(e.target.value);
                }}
              >
                <option value="all">All Collections</option>
                {collectionsQuery.data &&
                  collectionsQuery.data?.map((collection) => {
                    return (
                      <option key={collection.id} value={collection.id}>
                        {collection.producer}
                      </option>
                    );
                  })}
              </select>
            </div>
          )}
        </div>
      </div>
      <ScDialogXs
        setOpen={setAskToken}
        open={askToken}
        onClose={() => {
          setAskToken(false);
        }}
      >
        <div className="w-96 sm:flex sm:items-start">
          <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
            <Dialog.Title
              as="h3"
              className="text-normal font-bungee text-sm font-semibold leading-6 text-black"
            >
              Enter The token you want to list from this collection on our
              platform
            </Dialog.Title>
            <div className="mt-2">
              <p className="flex py-2 text-sm text-black">
                <div className="w-2"></div>
                <input
                  className="focus:shadow-outline w-full appearance-none border  border-black py-2 px-3 pl-4 leading-tight text-black shadow focus:outline-none"
                  id="username"
                  type="text"
                  placeholder="TokenId"
                  onChange={(e) => {
                    setToken(e.target.value);
                  }}
                />
              </p>
            </div>
          </div>
        </div>
        <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
          <button
            disabled={!parseInt(token)}
            type="button"
            className={
              !parseInt(token)
                ? " text-zinc-400 "
                : " text-black " +
                  " w-30 relative mt-3 inline-flex w-full  justify-center border border-black px-3 py-2 text-sm font-semibold    sm:mt-0 sm:w-auto "
            }
            onClick={() => {
              addTokenToMarketplace(contract!, token);
              setAskToken(false);
            }}
          >
            LIST
          </button>
        </div>
      </ScDialogXs>
      {error != undefined && (
        <ScDialogXs
          setOpen={setError}
          open={error}
          onClose={() => {
            setError(false);
          }}
        >
          <div className="sm:flex sm:items-start">
            <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center  sm:mx-0 sm:h-10 sm:w-10">
              {errorMessage?.type !== "error" ? (
                <ExclamationTriangleIcon
                  className="h-6 w-6 text-black"
                  aria-hidden="true"
                />
              ) : (
                <ExclamationCircleIcon
                  className="h-6 w-6 text-black"
                  aria-hidden="true"
                />
              )}
            </div>
            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <Dialog.Title
                as="h3"
                className="font-poppins text-xl font-semibold leading-6 text-black"
              >
                {errorMessage?.title}
              </Dialog.Title>
              <div className="mt-2">
                <p className="text-sm text-black">
                  {errorMessage!.message.substring(0, 100)}
                </p>
              </div>
            </div>
          </div>
          <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              className=" w-30 relative mt-3 inline-flex w-full  justify-center border border-black px-3 py-2 text-sm font-semibold text-black   sm:mt-0 sm:w-auto"
              onClick={() => {
                setError(false);
              }}
            >
              OK
            </button>
          </div>
        </ScDialogXs>
      )}
    </div>
  );
};

const CollectedTabContent = ({
  collections,
  nfts,
  filterOption,
}: {
  collections: Collection[] | undefined;
  nfts: Map<string, NftOnChain[]>;
  filterOption: string;
}) => {
  const NftsToShow =
    filterOption === "all"
      ? Array.from(nfts.values()).flat()
      : nfts.has(filterOption)
      ? nfts.get(filterOption)
      : [];

  return (
    <div style={{ marginTop: "-1.5rem" }}>
      <div className="mb-[40px] flex items-start justify-between px-8 text-black">
        <p className="w-[50%] font-poppins text-[16px]  leading-[22px] text-[#555555]">
          These are the nfts that are listed or linked to our platform
        </p>
      </div>

      <div className="grid w-full grid-cols-3 border-t border-black">
        {NftsToShow?.map((item: NftOnChain) => (
          <CustomNftCard data={item} collections={collections} />
        ))}
      </div>
    </div>
  );
};

const ExternalNftsTabContent = ({
  collections,
  givePermissionForTrading,
  approval,
  nfts,
}: {
  collections: Collection[] | undefined;
  givePermissionForTrading: any;
  approval: Map<string, boolean>;
  nfts: Map<string, NftOnChain[]>;
}) => {
  const [selectedCollection, setSelectedCollection] = useState<string>("");

  return (
    <div style={{ marginTop: "-1.5rem" }} className="border-t border-black">
      <div className="w-full">
        {collections &&
          collections?.map((collection) => {
            return (
              <div
                className="flex w-full flex-col  font-poppins text-2xl text-black"
                key={collection.id}
              >
                <div className="flex w-full flex-row items-center justify-start border-b border-black p-7 pl-9 pt-9">
                  <button
                    onClick={() => {
                      setSelectedCollection(
                        selectedCollection == collection.id ? "" : collection.id
                      );
                    }}
                    className="flex flex-row font-neutral text-xl font-bold"
                  >
                    <IconMore
                      className={
                        selectedCollection != collection.id
                          ? " -rotate-90  transition-all "
                          : " transition-all"
                      }
                      height={22}
                    />
                    <div className="pl-4">
                      {(collection.metaData as any).name}
                    </div>
                  </button>

                  <button
                    className="ml-[40px] bg-black px-10 py-2 font-poppins text-sm text-white hover:bg-zinc-500"
                    onClick={() =>
                      givePermissionForTrading(
                        collection,
                        !(
                          approval.has(collection.id) &&
                          approval.get(collection.id) == true
                        )
                      )
                    }
                  >
                    {approval.has(collection.id) &&
                    approval.get(collection.id) == true
                      ? "Retract access permission"
                      : "Give access permission"}
                  </button>
                </div>
                {selectedCollection == collection.id && (
                  <div>
                    <div className="grid flex-1 grid-cols-3">
                      {nfts.has(collection.id) &&
                        nfts.get(collection.id)!.map((nft) => {
                          return (
                            <CustomNftCard
                              data={nft}
                              collections={collections}
                            />
                          );
                        })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
      </div>
    </div>
  );
};

const CustomNftCard = ({
  data,
  collections,
}: {
  data: NftOnChain;
  collections: any;
}) => {
  console.log("NFT:", data);
  return (
    <div
      className={`border-b border-l border-r border-black p-[40px] text-black`}
    >
      <div className=" h-full min-h-[500px] w-full border border-black">
        <Link href={`/nft/${(data as any).id}`}>
          <div className="relative h-[65%] w-full">
            <div className="absolute top-[12px] left-[12px] w-fit bg-white py-1 px-3 font-poppins text-[14px] text-black ">
              {
                collections?.find(
                  (collection: any) => collection.id === data.collectionId
                )?.producer
              }
            </div>
            <img
              src={
                data?.nft?.thumb ||
                (data?.metaData! as any)?.image ||
                (data?.nft?.metaData as any)?.image
              }
              alt=""
              className="h-full w-full"
            />
          </div>
        </Link>
        <div className="flex h-[35%] w-full flex-col items-start justify-between py-[20px] px-[25px]">
          <Link href={`/nft/${data?.nft?.id}`}>
            <div className=" font-neutral text-[16px]">
              {(data?.nft?.metaData as any)?.name || data?.metaData?.name}
            </div>
          </Link>
          <div className=" font-poppins text-[16px]">
            TokenId: #{data?.tokenId}
          </div>
          <button className="w-full cursor-pointer border border-black bg-transparent py-[5px] text-center font-poppins text-[16px]">
            List this NFT
          </button>
        </div>
      </div>
    </div>
  );
};
