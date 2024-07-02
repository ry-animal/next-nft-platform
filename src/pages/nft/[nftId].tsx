import { type NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import {
  ExclamationTriangleIcon,
  MinusSmallIcon,
  PlayIcon,
  PlusSmallIcon,
  StopIcon,
} from "@heroicons/react/24/outline";

import { useContext, useEffect, useRef, useState, Fragment } from "react";
import { api } from "../../utils/api";

import thwack from "thwack";
import { LoaderBlack } from "../../components/loaderBlack";
import { AlertMessage, Attribute, Metadata } from "../../types";
import {
  ethToWei,
  getToken,
  maticToWei,
  weiToEth,
  weiToMatic,
  weiToUSD,
} from "../../core/web3/currency";
import { IconFlash } from "../../assets/IconFlash";
import { Collection } from "@prisma/client";
import { compressAddress, parseMetaImageURL } from "../../core/web3/utils";
import { IconCamera } from "../../assets/IconCamera";
import { IconTrendUp } from "../../assets/IconTrendUp";
import ReactPlayer from "react-player";
import AuthContext from "../../contexts/AuthContext";
import { Contracts } from "../../core/web3/contracts";
import { Scaffold } from "../../components/Scaffold";
import { StaticBackground } from "../../components/BackgroundStatic";
import { IconBack } from "../../assets/IconBack";
import ScDialogXs from "../../components/modals/ScDialogXs";
import { Dialog, Disclosure, Transition } from "@headlessui/react";
import { Transaction } from "ethers";
import { IconMatic } from "../../assets/IconMatic";
import { IconMore } from "../../assets/IconMore";
import { MoreOfThisCollection } from "../../components/collections/MoreOfThisCollection";
import { MoreDetails } from "../../components/collections/MoreDetails";
import Image from "next/image";
import { IconETH } from "../../assets/IconETH";
import TransactionSuccesModal from "../../components/modals/TransactionSuccesModal";

const NFTPage: NextPage = () => {
  const [error, setError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<AlertMessage>({
    title: "",
    message: "",
    type: "info",
  });

  const router = useRouter();
  const { nftId } = router.query;
  const {
    buyNFT,
    listNFT,
    deListNFT,
    signer,
    updateNFT,
    isWaiting,
    getBlockchain,
  } = useContext(AuthContext);
  const [loading, setLoading] = useState<boolean>(true);
  const [imageRendering, setImageRendering] = useState<boolean>(false);
  const [transactionDescription, setTransactionDescription] = useState<string>(
    "Processing your transaction"
  );
  //listing
  const [askPrice, setAskPrice] = useState<boolean>(false);
  const [listingPrice, setListingPrice] = useState<string>("0");
  const [platFormFee, setPlatformFee] = useState<number | undefined>(0);
  const [creatorFee, setCreatorFee] = useState<number | undefined>(0);

  const [transactionInProgress, setTransactionInProgress] =
    useState<boolean>(false);
  const [mediaType, setMediatype] = useState<"Image" | "Video" | undefined>(
    undefined
  );
  const [mediaUrl, setMediaUrl] = useState<string>("");
  const [collection, setCollection] = useState<Collection | undefined>(
    undefined
  );
  const [address, setAddress] = useState<string | undefined>(undefined);

  async function listNFTForPrice(price: string) {
    try {
      setAskPrice(false);
      setTransactionDescription(
        `Listing your NFT for sale on ${
          getBlockchain().name
        } for ${price} ${getToken(collection?.blockchain!)}`
      );
      setTransactionInProgress(true);
      const response = await listNFT(
        nftQuery.data!,
        collection!,
        ethToWei(price)
      );
      nftQuery.refetch();
      setTransactionInProgress(false);
      if (response != null) {
        setTransactionSuccesMessage("NFT listed succesfully");
      }
    } catch (e) {
      setTransactionInProgress(false);
      console.log(e);
    }
  }

  //modals
  const [transactionSuccesMessage, setTransactionSuccesMessage] = useState<
    string | undefined
  >(undefined);

  useEffect(() => {
    signer?.getAddress().then((adr) => {
      setAddress(adr);
    });
  }, [signer]);

  const path = router.asPath;

  const nftApi = api.nft;
  const nftQuery = nftApi.getNFT.useQuery({
    id: nftId ? `${nftId}` : "63ee0161a312c119e2d072a1",
  });

  function getMediaType(metadata: Metadata) {
    if (!metadata) {
      return "Image";
    }
    if (
      metadata.properties &&
      metadata.properties.files &&
      metadata.properties.category === "video"
    ) {
      for (let i = 0; i < metadata.properties.files.length; i++) {
        if (metadata.properties.files![i]!.type === "video/mp4") {
          setMediaUrl(metadata.properties.files![i]!.uri);
          return "Video";
        }
      }
    }
    return "Image";
  }

  function getNFTDescription(metadata: Metadata) {
    if (!metadata) {
      return "";
    }
    if (metadata.attributes) {
      for (let i = 0; i < metadata.attributes.length; i++) {
        if (metadata!.attributes![i]!.trait_type === "Description") {
          return metadata!.attributes[i]!.value;
        }
      }
    }
    return metadata.description;
  }
  async function getOnchainData(col: Collection, tokenId: number) {
    if (signer) {
      console.log("getting onchain data", col.contractAddress);

      const nftOnchain = await Contracts.getOnChainNFTData(
        col,
        tokenId,
        signer!
      );

      if (
        !(
          nftOnchain?.owner === nftQuery.data?.owner &&
          nftOnchain?.isListed === nftQuery.data?.isListed
        ) ||
        (nftOnchain?.isListed && nftOnchain?.price !== nftQuery.data?.price)
      ) {
        console.log("updating nft");
        await updateNFT(nftQuery.data!);
        nftQuery.refetch();
      }
    }
  }

  const context = api.useContext();
  async function getCollection() {
    if (nftQuery.data) {
      const col = await context.collection.getCollection.fetch({
        collectionId: nftQuery.data?.collectionId!,
      });
      getOnchainData(col!, nftQuery.data?.tokenId!);
      setCollection(col!);
      console.log("#####################collection", col!);
    }
  }

  useEffect(() => {
    if (nftQuery.isFetched) {
      setBlobUrl(nftQuery.data?.thumb ? nftQuery.data?.thumb : "");
      getCollection();
      const media = getMediaType(nftQuery.data?.metaData! as any);
      if (mediaType !== media) {
        setMediatype(media);
      }

      fetchImageData(
        parseMetaImageURL((nftQuery.data?.metaData! as any)?.image!)
      );
    }
  }, [nftQuery.isFetched]);
  const [blobUrl, setBlobUrl] = useState("");
  async function fetchImageData(url: string) {
    const { data } = await thwack.get(url, { responseType: "blob" });
    setBlobUrl(URL.createObjectURL(data)); // set in state
    setLoading(false);
  }

  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(true);
  const [duration, setDuration] = useState(0);
  const [pos, setPos] = useState(0);
  const [videoOnReady, setVideoOnReady] = useState(false);

  const videoRef = useRef<any>();
  const handleProgress = (process: any) => {
    //Autoplay 5 sec preview on page load
    setPos(process.playedSeconds);
  };

  return (
    <Scaffold noise={0.2}>
      {nftQuery && nftQuery.data && (
        <div className="mx-auto mt-24">
          <div className=" flex h-[100vh] flex-col border-b border-black px-6 sm:flex-row md:h-auto md:px-[0]">
            <div className="h-[25%] w-full md:flex-1">
              <div className=" relative h-full w-full   bg-black   text-center shadow-lg">
                <a
                  href={parseMetaImageURL(
                    (nftQuery.data?.metaData! as any).image
                  )}
                >
                  <img
                    src={blobUrl}
                    alt="loading"
                    className={
                      "h-full w-full  object-contain   object-center sm:h-full sm:w-full " +
                      (loading ? "blur-sm grayscale" : "")
                    }
                  />
                </a>
                {loading && (
                  <div className="absolute left-2 top-2 font-bungee text-white">
                    Loading{" "}
                  </div>
                )}
              </div>
            </div>
            <div className="flex flex-col border-black md:flex-1 md:border-l ">
              <div className="flex flex-1 flex-row py-[20px] md:py-[0]">
                <div className="flex-1">
                  <div className=" px-2 font-poppins text-sm  text-black sm:px-10 sm:pt-10 ">
                    {(nftQuery.data?.metaData! as any).collection &&
                      (nftQuery.data?.metaData! as any).collection.name}
                    {!(nftQuery.data?.metaData! as any).collection &&
                      (nftQuery.data?.metaData! as any).name + " Collection"}
                  </div>
                  <div className="px-2 pt-4 font-neutral text-2xl font-bold text-black sm:px-10 md:text-4xl">
                    {(nftQuery.data?.metaData! as any).name}.
                  </div>

                  <div className="px-2 pt-4 font-poppins text-xs font-medium text-black   sm:px-10">
                    Created by: {collection?.producer}
                  </div>
                  <div className="py-4 px-2 pt-4 font-poppins text-xs font-medium  text-black sm:px-10">
                    Owned by:{" "}
                    {nftQuery.data?.owner == address ? (
                      <span className="font-normal">You</span>
                    ) : (
                      nftQuery.data?.owner
                    )}
                  </div>

                  <div className="flex flex-row pt-3 md:py-4 md:px-5  ">
                    <div className="">
                      {transactionInProgress && <div className="  "></div>}
                      {!transactionInProgress &&
                        !(
                          nftQuery.data?.owner != address &&
                          !nftQuery.data?.isListed
                        ) && (
                          <button
                            type="button"
                            onClick={async () => {
                              if (
                                collection?.whiteListContract &&
                                collection?.whiteListContract != ""
                              ) {
                                let whitelisted = await Contracts.isWhiteListed(
                                  collection,
                                  address!,
                                  signer
                                );
                                if (!whitelisted) {
                                  setErrorMessage({
                                    title: "Transaction not allowed",
                                    message: `Wallet ${address} is not on the KYC list for this collection, go to the collection page to KYC your wallet.`,
                                    type: "info",
                                  });
                                  setError(true);
                                  return;
                                }
                              }
                              setTransactionInProgress(true);
                              if (
                                nftQuery.data?.owner != address &&
                                nftQuery.data?.isListed
                              ) {
                                try {
                                  setTransactionDescription(
                                    `Buying NFT with token ${
                                      nftQuery.data!.tokenId
                                    }  and contract ${
                                      collection?.contractId
                                    } on ${getBlockchain().name}`
                                  );
                                  const response = await buyNFT(
                                    nftQuery.data!,
                                    collection!
                                  );
                                  nftQuery.refetch();
                                  setTransactionInProgress(false);
                                  if (response != null) {
                                    setTransactionSuccesMessage(
                                      "NFT bought successfully"
                                    );
                                  }
                                } catch (e) {
                                  console.log(e);
                                }
                              } else if (
                                nftQuery.data?.owner == address &&
                                nftQuery.data?.isListed
                              ) {
                                try {
                                  setTransactionDescription(
                                    `Unlisting your NFT on ${
                                      getBlockchain().name
                                    }`
                                  );
                                  const response = await deListNFT(
                                    nftQuery.data!,
                                    collection!
                                  );
                                  nftQuery.refetch();
                                  setTransactionInProgress(false);
                                  if (response != null) {
                                    setTransactionSuccesMessage(
                                      "NFT unlisted successfully"
                                    );
                                  }
                                } catch (e) {
                                  console.log(e);
                                }
                              } else if (
                                nftQuery.data?.owner == address &&
                                !nftQuery.data?.isListed
                              ) {
                                setPlatformFee(
                                  await Contracts.getPlatformFee(collection!)
                                );
                                setAskPrice(true);
                                nftQuery.refetch();
                                setTransactionInProgress(false);
                              }
                            }}
                            className=" group relative my-2 flex  items-center border   bg-black p-2 font-neutral  text-sm font-thin leading-4 text-white drop-shadow-lg   hover:text-white/50 hover:transition-all  "
                          >
                            <div className="flex flex-1 items-center justify-center">
                              <div className="px-2 pt-1 ">
                                {nftQuery.data?.owner != address &&
                                  nftQuery.data?.isListed && <div>Buy Now</div>}
                                {nftQuery.data?.owner == address &&
                                  nftQuery.data?.isListed && (
                                    <div>Delist your NFT</div>
                                  )}
                                {nftQuery.data?.owner == address &&
                                  !nftQuery.data?.isListed && (
                                    <div>List your NFT for Sale</div>
                                  )}
                              </div>
                            </div>
                          </button>
                        )}
                    </div>
                    <div className="flex-1 p-5 font-neutral text-sm text-black">
                      <span
                        className="
                     text-black"
                      >
                        {weiToEth(nftQuery.data?.price)}
                      </span>{" "}
                      {collection && collection.blockchain
                        ? getToken(collection!.blockchain!)
                        : "ETH"}{" "}
                      <span className=" font-neutral">
                        $
                        {weiToUSD(
                          nftQuery.data?.price,
                          collection?.blockchain!
                        )}
                      </span>
                      <br />
                    </div>
                  </div>
                </div>
                <div className="hidden w-8 border-l border-black sm:w-[2.5rem] md:block"></div>
              </div>
              <div className="flex w-full border-t border-black">
                <div className="  text-md  flex-1  py-4 px-2 pt-4 text-black sm:px-10">
                  <div className="pt-2 font-bungee font-bold">DESCRIPTION</div>
                  <div className="pt-2 font-poppins">
                    {getNFTDescription(nftQuery.data?.metaData! as any)}
                  </div>
                </div>
                <div className="hidden w-8 border-l border-black sm:w-[2.5rem] md:block"></div>
              </div>
            </div>
          </div>
          <Disclosure as="div" key={"more"} className="">
            {({ open }) => (
              <>
                <dt>
                  <Disclosure.Panel as="dd" className="">
                    {collection && nftQuery.data && (
                      <MoreDetails
                        collection={collection}
                        nft={nftQuery.data!}
                      />
                    )}
                  </Disclosure.Panel>
                  <Disclosure.Button className="flex h-20 w-full justify-between text-left font-poppins text-gray-900">
                    <div className="flex-1"></div>
                    <div className=" flex  items-center p-7">
                      {!open ? (
                        <div className="flex">
                          {"More Details".toUpperCase()}
                        </div>
                      ) : (
                        <div className="flex">
                          {"Less Details".toUpperCase()}
                        </div>
                      )}
                      <IconMore
                        className={
                          open
                            ? "ml-4 -rotate-90  transition-all "
                            : "ml-4 transition-all"
                        }
                        height={12}
                      />
                    </div>
                    <div className="flex-1"></div>
                  </Disclosure.Button>
                </dt>
              </>
            )}
          </Disclosure>
          {collection && <MoreOfThisCollection collection={collection} />}
        </div>
      )}
      <TransactionSuccesModal
        hideCloseButton={true}
        open={transactionSuccesMessage != undefined}
        setOpen={(open: boolean) => {
          setTransactionSuccesMessage(undefined);
        }}
        title="Transaction Succesful"
        content={transactionSuccesMessage || "Success"}
      />
      {error != undefined && (
        <ScDialogXs
          setOpen={setError}
          open={error}
          onClose={() => {
            setError(false);
          }}
        >
          <div className="sm:flex sm:items-start">
            <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center sm:mx-0 sm:h-10 sm:w-10">
              <ExclamationTriangleIcon
                className="h-6 w-6 text-yellow-600"
                aria-hidden="true"
              />
            </div>
            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <Dialog.Title
                as="h3"
                className="font-mono text-xl font-semibold leading-6 text-zinc-200"
              >
                {errorMessage.title}
              </Dialog.Title>
              <div className="mt-2">
                <p className="text-sm text-zinc-200">{errorMessage.message}</p>
              </div>
            </div>
          </div>
          <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              className=" w-30 relative mt-3 inline-flex w-full justify-center px-3 py-2 text-sm font-semibold text-zinc-200   sm:mt-0 sm:w-auto"
              onClick={() => {
                router.push(`/collection/${collection?.identifier}`);
                setError(false);
              }}
            >
              <div className="absolute top-1 left-1 h-2 w-2  animate-ping border-t border-l border-[#52B157]/50"></div>
              <div className="absolute top-1 right-1 h-2 w-2 animate-ping border-r border-t border-[#52B157]/50"></div>
              <div className="absolute bottom-1 left-1 h-2 w-2 animate-ping border-l border-b border-[#52B157]/50"></div>
              <div className="absolute bottom-1 right-1 h-2 w-2 animate-ping border-r border-b border-[#52B157]/50"></div>
              Go to collection page
            </button>
          </div>
        </ScDialogXs>
      )}
      <Transition.Root show={transactionInProgress} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={setTransactionInProgress}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center bg-black/60 p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden  border border-black bg-white px-4  text-left transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                  <div>
                    <div className="mt-3 text-center ">
                      <Dialog.Title
                        as="h3"
                        className="font-neutral text-base font-semibold leading-6 text-black"
                      >
                        Transaction in progress
                      </Dialog.Title>
                      <div className="mx-auto flex  items-center justify-center  bg-white">
                        <Image
                          src="/images/home/ball.svg"
                          height={110}
                          width={110}
                          alt="ball"
                          className="animate-spin-slow m-8"
                        />
                      </div>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          {transactionDescription}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 sm:mt-6">
                    <button
                      type="button"
                      className="text-poppins inline-flex w-full  justify-center border border-black px-3 py-2 text-sm font-semibold text-black  hover:bg-black/10 focus-visible:outline focus-visible:outline-2  "
                      onClick={() => setTransactionInProgress(false)}
                    >
                      Close
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
      {error != undefined && (
        <ScDialogXs
          setOpen={setAskPrice}
          /*open={true}*/
          open={askPrice}
          onClose={() => {
            setAskPrice(false);
          }}
        >
          <div className="w-96 sm:flex sm:items-start">
            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <Dialog.Title
                as="h3"
                className="text-normal font-neutral text-base font-semibold leading-6 text-black"
              >
                List your NFT
              </Dialog.Title>
              <div className="mt-2">
                <p className="mb-4 flex flex-col py-2 text-sm text-black">
                  <div className="mb-2">
                    You are about to list the following NFT for sale:
                  </div>
                  <div className="mb-4 flex h-fit w-full flex-row border border-black">
                    <div>
                      {nftQuery.data && (
                        <img
                          src={
                            nftQuery.data
                              ? parseMetaImageURL(
                                  (nftQuery.data!.metaData as any).image
                                )
                              : ""
                          }
                          height={80}
                          width={80}
                          alt="test"
                          className="border-r border-black"
                        />
                      )}
                    </div>
                    <div className="flex w-full flex-col justify-center px-2 py-2">
                      {nftQuery.data && (
                        <p className="font-neutral text-sm font-bold">
                          {(nftQuery.data!.metaData as any).title
                            ? (nftQuery.data!.metaData as any).title
                            : "Token ID: " + nftQuery.data!.tokenId}
                        </p>
                      )}
                      <p className="text-sm">
                        {collection && (collection?.metaData as any).name}
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-row">
                    <input
                      className="focus:shadow-outline w-full appearance-none border  border-black py-2 px-3 pl-4 leading-tight text-black shadow focus:outline-none"
                      id="username"
                      type="text"
                      placeholder="Listing price"
                      onChange={(e) => {
                        setListingPrice(e.target.value);
                      }}
                    />
                    <div className="absolute top-3 right-4">
                      <Image
                        src="/images/matic-logo.svg"
                        height={20}
                        width={20}
                        alt="test"
                        className=""
                      />
                    </div>
                  </div>
                  <p className="my-1 text-right">
                    Current value:{" "}
                    {weiToUSD(ethToWei(listingPrice), collection?.blockchain)}$
                  </p>
                </p>
                <p className="mb-4 font-poppins text-base font-bold">
                  Transaction summary
                </p>
                <div className="flex w-full flex-row justify-between text-left text-sm">
                  <div>
                    <p className="mb-3">Listing price</p>
                    <p className="mb-3">Service fee</p>
                    <p className="mb-3">Creator earnings</p>
                  </div>
                  <div className="text-right text-sm">
                    <p className="mb-3">
                      {weiToEth(ethToWei(listingPrice))}{" "}
                      {getToken(collection?.blockchain!)}
                    </p>
                    <p className="mb-3">{platFormFee}%</p>
                    <p className="mb-3">{collection?.creatorRoyalty}%</p>
                  </div>
                </div>
                <div className="border-[0.5px] border-black"></div>
                <div className="mt-4 flex w-full flex-row justify-between text-left text-sm">
                  <div>
                    <p className="mb-3">Total</p>
                  </div>
                  <div className="text-right text-sm">
                    <p className="mb-3">
                      {platFormFee &&
                        (((parseFloat(listingPrice) * (100 - platFormFee!)) /
                          100) *
                          (100 - creatorFee!)) /
                          100}{" "}
                      {getToken(collection?.blockchain!)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
            <button
              disabled={
                listingPrice == undefined ||
                !parseFloat(listingPrice) ||
                parseFloat(listingPrice) <= 0
              }
              type="button"
              className={
                (listingPrice == undefined ||
                !parseFloat(listingPrice) ||
                parseFloat(listingPrice) <= 0
                  ? " text-zinc-400 "
                  : " text-black ") +
                " w-30 relative mt-3 inline-flex w-full  justify-center border border-black px-3 py-2 font-neutral text-sm sm:w-auto "
              }
              onClick={() => {
                listNFTForPrice(listingPrice);
              }}
            >
              <p className="mt-1">Complete Listing</p>
            </button>
          </div>
        </ScDialogXs>
      )}
    </Scaffold>
  );
};

export default NFTPage;
