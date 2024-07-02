import { useSession } from "next-auth/react";
import { api } from "../utils/api";
import React, { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Session } from "next-auth";
import { Collection, Nft } from "@prisma/client";
import { Magic } from "magic-sdk";
import { useRouter } from "next/router";

import { IconMetaMask } from "../assets/IconMetamask";
import { IconWalletconnect } from "../assets/IconWalletconnect";
import { ethers } from "ethers";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Cookies from "js-cookie";
import ScDialogXs from "../components/modals/ScDialogXs";
import {
  ExclamationTriangleIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/outline";

import { AlertMessage } from "../types";
import { Contracts } from "../core/web3/contracts";
import Image from "next/image";
import TransactionSuccesModal from "../components/modals/TransactionSuccesModal";
import { Chain, chains } from "../core/web3/chains";

interface SCAuthContextProps {
  getBlockchain: () => Chain;
  loadingDescription: string;
  isLoggedIn: boolean;
  isWaiting: boolean;
  status: "loading" | "authenticated" | "unauthenticated";
  data: Session | null;
  magicData: any;
  login: () => Promise<void>;
  logout: () => Promise<void>;
  showWallet: (task: "onRamp" | "offRamp" | "change" | "show") => Promise<void>;
  openWallet: boolean;
  setOpenWallet: (value: boolean) => void;
  signer: ethers.providers.JsonRpcSigner | undefined;
  provider: ethers.providers.Web3Provider | undefined;
  wallet: "metamask" | "walletconnect" | "magic" | "none" | "connect";
  buyNFT: (nft: Nft, collection: Collection) => Promise<Nft | null>;
  listNFT: (
    nft: Nft,
    collection: Collection,
    price: string
  ) => Promise<Nft | null>;
  deListNFT: (nft: Nft, collection: Collection) => Promise<Nft | null>;
  counter: number;
  setCounter: (value: number) => void;
  updateNFT: (nft: Nft, tx?: string) => Promise<Nft | null>;
  setShowLogin: React.Dispatch<React.SetStateAction<boolean>>;
  isBlue: boolean;
  setIsBlue: React.Dispatch<React.SetStateAction<boolean>>;
}

const getBlockchain = () => chains.Matic!;
const customNodeOptions = {
  rpcUrl: getBlockchain().rpc, // Polygon RPC URL
  chainId: getBlockchain().chainId, // Polygon chain id
};
const magic =
  typeof window !== "undefined" &&
  new Magic(process.env.NEXT_PUBLIC_MAGIC_LINK_API_KEY || "a", {
    network: customNodeOptions,
  });
export const AuthContext = React.createContext<SCAuthContextProps>({
  loadingDescription: "",
  isLoggedIn: false,
  isWaiting: false,
  login: async () => {},
  logout: async () => {},
  showWallet: async (task: "onRamp" | "offRamp" | "change" | "show") => {},
  status: "unauthenticated",
  data: null,
  magicData: {},
  openWallet: false,
  setOpenWallet: (value: boolean) => {},
  signer: undefined,
  provider: undefined,
  wallet: "none",
  buyNFT: async (nft: Nft, collection: Collection) => null,
  listNFT: async (nft: Nft, collection: Collection, price: string) => null,
  deListNFT: async (nft: Nft, collection: Collection) => null,
  counter: 0,
  setCounter: (value: number) => {},
  updateNFT: async (nft: Nft, tx?: string) => null,
  setShowLogin: (value: any) => {},
  isBlue: false,
  setIsBlue: (value: any) => {},
  getBlockchain: getBlockchain,
});

export const AuthProvider = (props: any) => {
  const [openWallet, setOpenWallet] = useState(false);
  const { data, status } = useSession();
  const [provider, setProvider] = useState<
    ethers.providers.Web3Provider | undefined
  >(undefined);

  const [walletType, setWallet] = useState<
    "none" | "metamask" | "walletconnect" | "magic" | "connect"
  >("none");

  const [signer, setSigner] = useState<
    ethers.providers.JsonRpcSigner | undefined
  >(undefined);
  const [blue, setBlue] = useState(false);
  const [magicData, setMagicData] = useState<any>({});
  const [isWaiting, setIsWaiting] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [loadingDescription, setLoadingDescription] = useState("-");
  const [email, setEmail] = useState("");
  const router = useRouter();
  const [counter, setCounter] = useState(0);
  const apiContext = api.useContext();
  const [isError, setIsError] = useState<boolean>(false);
  const [error, setError] = useState<AlertMessage | undefined>(undefined);

  async function updateNft(nft: Nft, tx?: string): Promise<Nft | null> {
    if (tx) {
      await apiContext.stats.saveTransaction.fetch({
        transaction: tx,
        nftId: nft.id,
      });
    }

    return await apiContext.nft.updateNFT.fetch({ id: nft.id, tx: tx });
  }

  function setWalletType(
    walletName: "none" | "metamask" | "walletconnect" | "magic" | "connect"
  ) {
    setWallet(walletName);
    Cookies.set("wallet", walletName, { expires: 1 });
  }

  function getWalletType() {
    return Cookies.get("wallet") || "none";
  }

  function onEmailInputchange(event: any) {
    let value = event.target.value;
    setEmail(value);
  }

  async function login() {
    if (showLogin) {
      setShowLogin(false);
      return;
    }
    setLoadingDescription("Logging in");
    setIsWaiting(true);
    setShowLogin(true);
  }

  async function showWallet(task: "onRamp" | "offRamp" | "change" | "show") {
    try {
      if (walletType === "connect") {
        const walletInfo = await (magic as any).wallet.getInfo();
        const walletTypeIng = walletInfo.walletType;
        if (walletTypeIng === "magic") {
          await (magic as any).wallet.showUI();
        }
      }
    } catch (e: any) {
      setError({
        title: "Error showing wallet",
        message: e.message,
        type: "error",
      });
      setIsError(true);
    }
  }

  async function logout() {
    try {
      setWalletType("none");
      setLoadingDescription("Logging out");
      setIsWaiting(true);
      if (walletType === "magic") {
        await (magic as any).user.logout();
      } else if (walletType === "metamask") {
        await (window as any).ethereum.request({
          method: "eth_requestAccounts",
        });
      } else if (walletType === "walletconnect") {
        await (window as any).ethereum.request({
          method: "eth_requestAccounts",
        });
      } else if (walletType === "connect") {
        await (magic as any).wallet.disconnect();
      }

      //await signOut();
      setIsWaiting(false);
      setWalletType("none");
      setProvider(undefined);
      setSigner(undefined);
    } catch (e: any) {
      setError({
        title: "Error logging out",
        message: e.message,
        type: "error",
      });
      setIsError(true);
    }
  }

  async function buyNFT(nft: Nft, collection: Collection): Promise<Nft | null> {
    try {
      if (!signer) return null;
      const tx = await Contracts.buyNFT(nft, collection, signer);
      console.log("[FINAL] TransactionResponse:", tx);
      return await updateNft(nft, tx!.txhash);
    } catch (e: any) {
      setError({
        title: "Error while buying NFT",
        message: e.message,
        type: "error",
      });
      setIsError(true);
    }
    return null;
  }
  async function listNFT(
    nft: Nft,
    collection: Collection,
    price: string
  ): Promise<Nft | null> {
    try {
      if (!signer) return null;
      console.log("[FINAL] going for listing");
      console.log(signer?.getAddress());
      const tx = await Contracts.listNFT(nft, price, collection, signer);
      console.log("[FINAL]listNFT TransactionResponse:", tx);
      return await updateNft(nft, tx!.txhash);
    } catch (e: any) {
      setError({
        title: "Error listing NFT",
        message: e.message,
        type: "error",
      });
      setIsError(true);
    }
    return null;
  }
  async function deListNFT(
    nft: Nft,
    collection: Collection
  ): Promise<Nft | null> {
    try {
      if (!signer) return null;
      //console.log("[FINAL] going for delisting");
      const tx = await Contracts.delistNFT(nft, collection, signer);
      console.log("[FINAL]delistNFT TransactionResponse:", tx!.txhash);
      return await updateNft(nft, tx!.txhash);
    } catch (e: any) {
      setError({
        title: "Error unlisting NFT",
        message: e.message,
        type: "error",
      });
      setIsError(true);
    }
    return null;
  }

  /*async function magicLink() {
    try {
      const didToken = await (magic as any).auth.loginWithEmailOTP({
        email: email,
      });
      // sign in with NextAuth
      console.log("didToken", didToken);

      await signIn("credentials", {
        didToken,
        callbackUrl: router.query["callbackUrl"] as string,
      });
    } catch (e) {
      //console.log("error", e);
    }
    setIsWaiting(false);
  }*/

  useEffect(() => {
    checkWallet();
  }, []);

  async function checkWallet() {
    try {
      if (getWalletType() == "connect") {
        const newProvider = new ethers.providers.Web3Provider(
          (magic as any).rpcProvider
        );
        if (newProvider) {
          setProvider(newProvider);
          setSigner(newProvider.getSigner());
          setWalletType("connect");
        }
      }
      if (getWalletType() == "metamask") {
        const { ethereum } = window as any;
        const accounts = await ethereum.request({ method: "eth_accounts" });
        await checkChain();
        if (accounts && accounts.length > 0) {
          const newProvider = new ethers.providers.Web3Provider(
            (window as any).ethereum
          );
          (window as any).ethereum.on("accountsChanged", (accounts: any[]) => {
            // If user has locked/logout from MetaMask, this resets the accounts array to empty
            if (!accounts.length) {
              setWalletType("none");
              setProvider(undefined);
              setSigner(undefined);
            }
          });
          if (newProvider) {
            setProvider(newProvider);
            setSigner(newProvider.getSigner());
            setWalletType("metamask");
          }
        }
      }
    } catch (e: any) {
      setError({
        title: "Error while logging in to Metamask",
        message: e.message,
        type: "error",
      });
      setIsError(true);
    }
  }

  /*useEffect(() => {
    updateUser();
  }, [data?.user]);*/

  /*async function updateUser() {
    if (data?.user) {
      const magicData = await (magic as any).user.getMetadata();
      console.log("data", data);
      console.log("magicData", magicData);
      setMagicData(magicData);
      const newProvider = new ethers.providers.Web3Provider(
        (magic as any).rpcProvider
      );
      setWalletType("magic");
      setProvider(newProvider);
      setSigner(newProvider.getSigner());
    }
  }*/

  async function checkChain() {
    try {
      await (window as any).ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [
          {
            chainId: "0x" + parseInt(`${getBlockchain().chainId}`).toString(16),
          },
        ],
      });
    } catch (switchError: any) {
      // This error code indicates that the chain has not been added to MetaMask.
      if (switchError.code === 4902) {
        try {
          await (window as any).ethereum.request({
            method: "wallet_addEthereumChain",
            params: [
              {
                chainId:
                  "0x" + parseInt(`${getBlockchain().chainId}`).toString(16),
                chainName: getBlockchain().name,
                rpcUrls: [`${getBlockchain().rpc}`] /* ... */,
              },
            ],
          });
        } catch (addError) {
          // handle "add" error
        }
      }
      // handle other "switch" errors
    }
  }
  //ethers.js
  async function connectWallet(walletName: string) {
    // Get the provider and signer from the browser window
    let newProvider: ethers.providers.Web3Provider | undefined = undefined;
    if (walletName == "connect") {
      try {
        setWalletType("connect");
        newProvider = new ethers.providers.Web3Provider(
          (magic as any).rpcProvider
        );
        const accounts = await (magic as any).wallet.connectWithUI();
      } catch (e: any) {
        setError({
          title: "Error while logging in to Metamask",
          message: e.message,
          type: "error",
        });
        setIsError(true);
      }
    }
    if (walletName == "metamask") {
      try {
        setWalletType("metamask");
        await checkChain();
        newProvider = new ethers.providers.Web3Provider(
          (window as any).ethereum
        );
        (window as any).ethereum.on("accountsChanged", (accounts: any[]) => {
          // If user has locked/logout from MetaMask, this resets the accounts array to empty
          if (!accounts.length) {
            setWalletType("none");
            setProvider(undefined);
            setSigner(undefined);
          }
        });
      } catch (e: any) {
        setError({
          title: "Error while logging in to Metamask",
          message: e.message,
          type: "error",
        });
        setIsError(true);
      }
    }
    if (walletName == "walletconnect") {
      try {
        setWalletType("walletconnect");
        const walletConnectProvider = new WalletConnectProvider({
          infuraId: "27e484dcd9e3efcfd25a83a78777cdf1", // Required
          qrcode: true,
        });
        await walletConnectProvider.enable();
        newProvider = new ethers.providers.Web3Provider(walletConnectProvider);
      } catch (e: any) {
        setError({
          title: "Error while logging in to WalletConnect",
          message: e.message,
          type: "error",
        });
        setIsError(true);
      }
    }
    if (newProvider == undefined) {
      return;
    }
    if ((window as any).ethereum) {
      await newProvider.send("eth_requestAccounts", []);
    }
    setProvider(newProvider);
    setSigner(newProvider.getSigner());
    setIsWaiting(false);
  }

  return (
    <AuthContext.Provider
      value={{
        getBlockchain: () => chains.Matic!,
        showWallet: showWallet,
        isLoggedIn: signer?.getAddress() !== undefined,
        login: login,
        status: status,
        data: data,
        logout: logout,
        magicData: magicData,
        isWaiting: isWaiting,
        loadingDescription: loadingDescription,
        openWallet: openWallet,
        setOpenWallet: setOpenWallet,
        signer: signer,
        provider: provider,
        wallet: walletType,
        buyNFT: buyNFT,
        listNFT: listNFT,
        deListNFT: deListNFT,
        counter: counter,
        setCounter: setCounter,
        updateNFT: updateNft,
        setShowLogin: setShowLogin,
        isBlue: blue,
        setIsBlue: setBlue,
      }}
    >
      {props.children}

      {error != undefined && (
        <ScDialogXs
          setOpen={setIsError}
          open={isError}
          onClose={() => {
            setIsError(false);
            setIsWaiting(false);
          }}
        >
          <div className="sm:flex sm:items-start">
            <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center  sm:mx-0 sm:h-10 sm:w-10">
              {error?.type !== "error" ? (
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
                {error?.title}
              </Dialog.Title>
              <div className="mt-2">
                <p className="text-sm text-black">
                  {error!.message.substring(0, 100)}
                </p>
              </div>
            </div>
          </div>
          <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              className=" w-30 relative mt-3 inline-flex w-full  justify-center border border-black px-3 py-2 text-sm font-semibold text-black   sm:mt-0 sm:w-auto"
              onClick={() => {
                setIsError(false);
                setIsWaiting(false);
              }}
            >
              OK
            </button>
          </div>
        </ScDialogXs>
      )}

      <div className="absolute ">
        {/* Notification panel, dynamically insert this into the live region when it needs to be displayed */}
        <Transition
          as={Fragment}
          show={showLogin}
          enter=""
          enterFrom=""
          enterTo=""
          leave=""
          leaveFrom=""
          leaveTo=""
        >
          <Dialog
            as="div"
            className={"pointer-events-none fixed inset-0 bg-black/30"}
            aria-hidden="true"
            open={true}
            onClose={() => {
              setShowLogin(false);
            }}
          >
            <div className=" pointer-events-none absolute inset-x-2/4 inset-y-2/4 -mt-[202px] -ml-[191px] h-fit w-96 max-w-md flex-1 flex-col border border-black bg-white p-6">
              <div className=" items-start ">
                <div className="grow">
                  {/*<div className="block p-2 text-center  font-display text-2xl font-semibold text-gray-200">
                      Log In/Sign Up
                    </div>
                    <div className="mt-1">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={email}
                        onChange={onEmailInputchange}
                        className="block w-full  border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-lg"
                        placeholder="enter your email"
                        aria-describedby="email-description"
                      />
                    </div>
                    <button
                      type="button"
                      className=" mt-3 flex w-full items-center justify-center rounded-none  border border-transparent bg-black p-2 font-display text-xl font-light text-white hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      onClick={() => {
                        setShowLogin(false);
                        magicLink();
                      }}
                    >
                      Log in/Sign Up
                    </button>*/}

                  <div className="flex justify-between font-neutral text-xl font-bold text-black">
                    <p className="pointer-events-auto">Connect Wallet</p>
                    <Image
                      src="/images/cross.svg"
                      alt="close"
                      width={16}
                      height={16}
                      className="pointer-events-none"
                    />
                  </div>
                  <div className="pointer-events-auto mt-9 flex-col">
                    <div className="relative mb-5 h-10 w-full border border-black bg-white hover:border-white hover:bg-black">
                      <button
                        type="button"
                        className="Absolute relative -inset-x-1 -inset-y-1.5 h-10 w-full rounded-none border border-black bg-white p-1 hover:border-white hover:bg-black hover:text-white"
                        onClick={() => {
                          setShowLogin(false);
                          connectWallet("metamask");
                        }}
                      >
                        <Image
                          src="/images/metamask-icon.svg"
                          alt="MetaMask Fox"
                          width={20}
                          height={20}
                          className="mr-3 mb-1 inline"
                        />
                        <p className="mt-2 inline font-neutral leading-5">
                          Meta Mask
                        </p>
                      </button>
                    </div>
                    <fieldset disabled>
                      <div className="relative mb-5 h-10 w-full border border-black bg-white opacity-30">
                        <button
                          type="button"
                          className="Absolute relative -inset-x-1 -inset-y-1.5 h-10 w-full rounded-none border border-black bg-white p-1"
                          onClick={() => {
                            setShowLogin(false);
                            connectWallet("metamask");
                          }}
                        >
                          <Image
                            src="/images/walletconnect-icon.svg"
                            alt="Walletconnect"
                            width={20}
                            height={25}
                            className="mr-3 mb-1 inline"
                          />
                          <p className="mt-2 inline font-neutral leading-5">
                            Wallet Connect
                          </p>
                        </button>
                      </div>
                    </fieldset>
                    <fieldset disabled>
                      <div className="relative mb-5 h-10 w-full border border-black bg-white opacity-30">
                        <button
                          type="button"
                          className="Absolute relative -inset-x-1 -inset-y-1.5 h-10 w-full rounded-none border border-black bg-white p-1"
                          onClick={() => {
                            setShowLogin(false);
                            connectWallet("metamask");
                          }}
                        >
                          <Image
                            src="/images/coinbasewallet-icon.svg"
                            alt="coinbasewallet"
                            width={20}
                            height={20}
                            className="mr-3 mb-1 inline"
                          />
                          <p className="mt-2 inline font-neutral leading-5">
                            Coinbase Wallet
                          </p>
                        </button>
                      </div>
                    </fieldset>
                    <fieldset disabled>
                      <div className="relative h-10 w-full border border-black bg-white opacity-30">
                        <button
                          type="button"
                          className="Absolute relative -inset-x-1 -inset-y-1.5 h-10 w-full rounded-none border border-black bg-white p-1"
                          onClick={() => {
                            setShowLogin(false);
                            connectWallet("metamask");
                          }}
                        >
                          <Image
                            src="/images/phantomwallet-icon.svg"
                            alt="phantom"
                            width={20}
                            height={20}
                            className="mr-3 mb-1 inline"
                          />
                          <p className="mt-2 inline font-neutral leading-5">
                            Phantom
                          </p>
                        </button>
                      </div>
                    </fieldset>
                    <div className="align-left pointer-events-auto mt-8 font-poppins text-sm font-normal">
                      <p>
                        If you don't have a wallet, you can select a provider
                        and create one now.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Dialog>
        </Transition>
      </div>
    </AuthContext.Provider>
  );
};

export default AuthContext;
