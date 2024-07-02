import Image from "next/image";
import AuthContext from "../../contexts/AuthContext";
import { Fragment, useContext, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Popover, Transition } from "@headlessui/react";
import {
  ArrowRightOnRectangleIcon,
  WalletIcon,
} from "@heroicons/react/24/outline";
import MobileDropdown from "./MobileDropdown";

interface HeaderProps {
  dark?: boolean;
  title?: string;
}

import { IconSnowcrash } from "../../assets/IconSnowcrash";
import router from "next/router";
import { IconContrast } from "../../assets/IconContrast";
import { weiToEth } from "../../core/web3/currency";
import { IconMatic } from "../../assets/IconMatic";

export const Header = (props: HeaderProps) => {
  const [address, setAddress] = useState<string>("");
  const [balance, setBalance] = useState<string>("");
  const {
    login,
    logout,
    status,
    isLoggedIn,
    setOpenWallet,
    openWallet,
    setCounter,
    wallet,
    showWallet,
    counter,
    signer,
    isBlue,
    setIsBlue,
    getBlockchain,
  } = useContext(AuthContext);

  useEffect(() => {
    findAddress();
  }, [signer]);

  async function findAddress() {
    if (isLoggedIn) {
      const address = await signer?.getAddress();
      if (address) setAddress(address!);
      const bal = await signer?.getBalance();
      if (bal) {
        setBalance(weiToEth(bal?.toString()!));
      }
    }
  }
  const [showWalletMenu, setShowWalletMenu] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const [showWalletAssets, setShowWalletAssets] = useState(false);
  const buttonRef = useRef();
  const displayAddress = address?.slice(0, 6) + "..." + address?.slice(-4);

  return (
    <>
      <header
        className={
          props.dark
            ? " relative z-20 h-14 border-b border-white bg-black md:h-24"
            : " relative z-20 h-14 border-b border-black bg-white md:h-24"
        }
      >
        <div className="z-20 flex h-full pr-4 md:pr-0">
          <div className=" flex flex-col justify-center pl-4 md:pl-14">
            <Link href="/">
              {props.dark ? (
                <div className="font-bungeeshade text-5xl text-[#EFEFD0]">
                  SNOWGPT
                </div>
              ) : (
                <Image
                  src={"/images/snowcrash-logo-black-v2.svg"}
                  width="200"
                  height="30"
                  alt="snowcrash logo"
                  className="-m-[10px] block h-[30px] p-1 md:h-[50px]"
                />
              )}
            </Link>
          </div>

          <div className="grow"></div>

          {true && (
            <div className="mt-1 hidden  p-1 md:block">
              <Link href="/snowgpt">
                <button
                  type="button"
                  className={
                    "text-md h-full w-32 items-center border  border-transparent text-center font-neutral font-light leading-5 " +
                    (props.dark ? "text-white" : "text-black")
                  }
                >
                  SNOWGPT
                </button>
              </Link>
            </div>
          )}
          <div className="mt-1 hidden  p-1 md:block">
            <Link href="/collections">
              <button
                type="button"
                className={
                  "text-md h-full w-32 items-center border  border-transparent text-center font-neutral font-light leading-5 " +
                  (props.dark ? "text-white" : "text-black")
                }
              >
                COLLECTIONS
              </button>
            </Link>
          </div>
          <div className="hidden flex-col p-4 sm:flex md:flex">
            <div className="grow" />
            <button
              onClick={() => {
                setIsBlue(!isBlue);
              }}
            >
              <IconContrast
                className={
                  (isBlue ? "rotate-180 transition-all" : "transition-all") +
                  " " +
                  (props.dark ? "text-white" : "text-black")
                }
              />
            </button>

            <div className="grow" />
          </div>

          <div className="flex  flex-col p-4 md:flex md:pr-10">
            <div className="grow" />
            <div className="ml-auto flex h-[36px]  w-[200px] content-center items-center sm:hidden">
              {isLoggedIn && (
                <button
                  type="button"
                  ref={buttonRef as any}
                  onMouseDown={() => {
                    setShowWalletMenu(!showWalletMenu);
                    setShowWalletAssets(false);
                  }}
                  className={
                    "mr-3 flex h-full flex-1 content-center items-center border-transparent px-5  py-1  text-white transition-all sm:hidden " +
                    (!isBlue ? "bg-black" : "bg-[#4361EE] hover:bg-[#4361EE]")
                  }
                >
                  <>
                    <img src="/images/wallet.svg" alt="" className="mr-1" />
                    <span>{balance} ETH</span>
                  </>
                </button>
              )}

              <img
                onClick={() => {
                  setOpenMobileMenu(!openMobileMenu);
                }}
                className="ml-auto inline-block h-[20px] w-[20px] sm:hidden"
                src={`/images/${
                  openMobileMenu ? "close.svg" : "hamburger menu.svg"
                }`}
                alt=""
              />
            </div>

            {!isLoggedIn && (
              <button
                className={
                  "ml-3 hidden h-full w-[200px] content-center items-center justify-center border  bg-black  py-2 font-neutral text-[16px] text-white transition-all hover:border-black hover:bg-transparent hover:text-zinc-500 sm:flex sm:flex-1 " +
                  (props.dark ? "border-white" : "border-transparent")
                }
                onClick={() => login()}
              >
                Connect Wallet
              </button>
            )}

            {isLoggedIn && (
              <div className="ml-3 hidden h-[36px]  w-[200px] content-center items-center sm:flex">
                <button
                  className={
                    "flex h-full w-[170px] items-center justify-center border bg-black  py-2 font-neutral text-[16px] text-white " +
                    (props.dark ? "border-white" : "border-transparent")
                  }
                  onClick={() => {
                    setShowWalletMenu(!showWalletMenu);
                    setShowWalletAssets(false);
                    //setShowWalletAssets(!showWalletAssets);
                    //setShowWalletMenu(false);
                  }}
                >
                  <img src="/images/wallet.svg" alt="" className="mr-1" />
                  <span>
                    {balance} {getBlockchain().currency}
                  </span>
                </button>

                <div
                  onClick={() => {
                    setShowWalletMenu(!showWalletMenu);
                    setShowWalletAssets(false);
                  }}
                  className={
                    props.dark
                      ? " h-full w-[36px] flex-1 cursor-pointer content-center items-center border border-white bg-black font-neutral"
                      : " h-full w-[36px] flex-1 cursor-pointer content-center items-center border border-black bg-white font-neutral"
                  }
                >
                  <img
                    src="/images/walletAvatar.svg"
                    className="h-full w-full"
                    alt=""
                  />
                </div>
              </div>
            )}

            <div className="grow" />
          </div>
          {isLoggedIn && false && (
            <div className="mt-1 hidden md:block">
              <button
                type="button"
                onClick={async () => {
                  router.push("/collector/" + address);
                }}
                className="ml-4 mb-2 mr-6 h-full items-center hover:animate-spin hover:transition-all  "
              >
                <img
                  src="/images/user-placeholder.png"
                  className="mb-1 h-7 sm:h-8"
                />
              </button>
            </div>
          )}
        </div>
      </header>
      {showWalletMenu && (
        <WalletMenu
          logout={() => {
            logout();
            setShowWalletMenu(false);
          }}
          profile={() => {
            router.push("/collector/" + address);
            setShowWalletMenu(false);
            setShowWalletAssets(false);
          }}
        />
      )}
      {showWalletAssets && <WalletAssets balance={balance} />}
      {openMobileMenu && (
        <div className="fixed inset-0 top-[6%] h-full w-full bg-[#000000cc] pt-[80px] sm:hidden">
          <ul className="flex w-full flex-col px-[30px]">
            <li className="my-[20px] w-full cursor-pointer">
              <button
                onClick={() => {
                  setIsBlue(!isBlue);
                }}
              >
                <IconContrast
                  fill={"#ffffff"}
                  className={` ${
                    isBlue ? "rotate-180 transition-all" : "transition-all"
                  }`}
                />
              </button>
            </li>
            <li className="my-[20px] cursor-pointer">
              <Link className="font-neutral text-[25px]" href="/collections">
                Collections
              </Link>
            </li>
            <li className="my-[20px] cursor-pointer">
              <Link
                className="font-neutral text-[25px]"
                href="/collection/bb0f099a-6d1f-4a4c-b4af-62238246da31"
              >
                Exclusive
              </Link>
            </li>
            {!isLoggedIn && (
              <li className="my-[20px] cursor-pointer">
                <div
                  className="w-fit bg-white px-[23px] py-[10px] font-neutral text-[20px] text-black"
                  onClick={() => login()}
                >
                  Connect Wallet
                </div>
              </li>
            )}
          </ul>
        </div>
      )}
    </>
  );
};

export default Header;

interface WMProp {
  profile: () => void;
  logout: () => void;
}

const WalletMenu = (props: WMProp) => {
  return (
    <div className=" color-black absolute right-[40px] top-[96px] z-50 w-[200px]  bg-white text-black shadow-[10px_10px_0__rgba(0,0,0)]">
      <div className=" cursor-pointer border-b border-black  font-neutral">
        <button
          onClick={props.profile}
          className="flex w-full items-center py-[14px] px-[15px] font-medium  text-gray-900 hover:bg-zinc-300"
        >
          <img className="mr-2" src="/images/collected.svg" alt="" />
          Profile
        </button>
      </div>
      {false && (
        <div className=" cursor-pointer border-b border-black  font-neutral">
          <Link
            href="/"
            className="flex items-center py-[14px] px-[15px] font-medium text-gray-900"
          >
            <img className="mr-2" src="/images/activity.svg" alt="" />
            Activity
          </Link>
        </div>
      )}
      <button
        onClick={props.logout}
        className="flex w-full cursor-pointer items-center py-[14px] px-[15px] font-neutral hover:bg-zinc-300"
      >
        <img className="mr-2" src="/images/close.svg" alt="" />
        Logout
      </button>
    </div>
  );
};

interface WProp {
  balance: string;
}

const WalletAssets = (walletProp: WProp) => {
  return (
    <div className=" color-black absolute right-[40px] top-[96px] z-50 w-[230px]  bg-white text-black shadow-[10px_10px_0__rgba(0,0,0)]">
      <div className="flex cursor-pointer items-center py-[14px] px-[15px] font-neutral">
        <IconMatic />
        <div className="flex flex-col items-start justify-start font-bold ">
          <span className="mb-1 text-[16px]">zkEVM (ETH) </span>
          <span className="font-poppins text-[14px] font-medium">
            {walletProp.balance} ETH
          </span>
        </div>
      </div>
    </div>
  );
};
