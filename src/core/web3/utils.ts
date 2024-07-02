import { ethers } from "ethers";
import { Gasfees } from "../types";
import { weiToEth, weiToMatic } from "./currency";
import { chains } from "./chains";

export const GASLIMIT = 350000;

export function compressAddress(address: string): string {
  return `${address?.slice(0, 6)}...${address?.slice(-4)}`;
}

export function formatTime(unix_timestamp: number): string {
  // Create a new JavaScript Date object based on the timestamp
  // multiplied by 1000 so that the argument is in milliseconds, not seconds.
  var date = new Date(unix_timestamp * 1000);
  // Hours part from the timestamp

  // Will display time in 10:30:23 format
  var formattedTime =
    date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
  return formattedTime;
}

export function getRPcProvider(): ethers.providers.JsonRpcProvider {
  const provider = new ethers.providers.JsonRpcProvider(chains.Matic!.rpc);
  return provider;
}
export async function getBalance(address: string): Promise<string> {
  return weiToEth((await getRPcProvider().getBalance(address)).toString());
}
export function getWallet(privateKey: string): ethers.Wallet {
  const provider = new ethers.providers.JsonRpcProvider(chains.Matic!.rpc);
  return new ethers.Wallet(privateKey, getRPcProvider());
}

export function parseMetaImageURL(url: string): string {
  if (url?.startsWith("ipfs://")) {
    console.log(`https://snowcrash.infura-ipfs.io/ipfs/${url.slice(7)}`);
    return `https://snowcrash.infura-ipfs.io/ipfs/${url.slice(7)}`;
  }

  return url;
}
export async function getGasFees(): Promise<Gasfees> {
  // get max fees from gas station
  let maxFeePerGas = ethers.BigNumber.from(40000000000); // fallback to 40 gwei
  let maxPriorityFeePerGas = ethers.BigNumber.from(40000000000); // fallback to 40 gwei
  try {
    const response = await fetch("https://gasstation-mainnet.matic.network/v2");
    const data = await response.json();
    console.log("data", data);
    maxFeePerGas = ethers.utils.parseUnits(
      Math.ceil(data.fast.maxFee) + "",
      "gwei"
    );
    maxPriorityFeePerGas = ethers.utils.parseUnits(
      Math.ceil(data.fast.maxPriorityFee) + "",
      "gwei"
    );
  } catch {
    // ignore
  }
  return {
    maxFeePerGas: maxFeePerGas,
    maxPriorityFeePerGas: maxPriorityFeePerGas,
  };
}
