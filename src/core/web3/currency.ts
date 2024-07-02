import { useEvmTokenPrice } from "@moralisweb3/next";
import { BigNumber, Utils } from "alchemy-sdk";

export function weiToMatic(wei: string, precision?: number): string {
  return (Number(wei) / 1e18).toFixed(precision ? precision : 2);
}

export function weiToEth(wei: string, precision?: number): string {
  return (Number(wei) / 1e18).toFixed(precision ? precision : 4);
}

export function getToken(blockChain?: string): string {
  if (blockChain && blockChain.toLowerCase() === "matic") {
    return "MATIC";
  }
  return "ETH";
}

export function ethToWei(matic: string): string {
  return (
    parseInt(Number(matic) * 1000 + "") + "000" + "000" + "000" + "000" + "000"
  );
}

export function maticToWei(matic: string): string {
  return (
    parseInt(Number(matic) * 1000 + "") + "000" + "000" + "000" + "000" + "000"
  );
}

let pricesMATIC: any = {
  data: {
    base: "MATIC",
    currency: "USD",
    amount: "1.51",
  },
};

let pricesETH: any = {
  data: {
    base: "ETH",
    currency: "USD",
    amount: "1959.35",
  },
};

async function fetchPrice() {
  const response = await fetch(
    "https://api.coinbase.com/v2/prices/MATIC-USD/buy"
  );
  pricesMATIC = await response.json();
  const responseETH = await fetch(
    "https://api.coinbase.com/v2/prices/ETH-USD/buy"
  );
  pricesETH = await responseETH.json();
}

fetchPrice();

export function weiToUSD(wei: string, token?: string | null): string {
  if (token && getToken(token) == "MATIC") {
    return weiToUSDMatic(wei);
  } else {
    return weiToUSDETH(wei);
  }
}

function weiToUSDMatic(wei: string): string {
  const exchange = parseFloat(pricesMATIC.data.amount);
  return ((Number(wei) / 1e18) * exchange).toFixed(2);
}
function weiToUSDETH(wei: string): string {
  const exchange = parseFloat(pricesETH.data.amount);
  return ((Number(wei) / 1e18) * exchange).toFixed(2);
}
