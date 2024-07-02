export const chains: { [key: string]: Chain } = {
  Matic: {
    name: "Matic",
    chainId: 137,
    rpc: "https://rpc-mainnet.maticvigil.com",
    explorer: "https://polygonscan.com",
    explorerAPI: "https://api.polygonscan.com",
    currency: "MATIC",
  },
  zkEVM: {
    name: "zkEVM",
    chainId: 1101,
    rpc: "https://zkevm-rpc.com",
    explorer: "https://zkevm.polygonscan.com",
    explorerAPI: "https://api-zkevm.polygonscan.com",
    currency: "ETH",
  },
  zkEVMTestnet: {
    name: "zkEVMTestnet",
    chainId: 1442,
    rpc: "https://rpc.public.zkevm-test.net",
    explorer: "https://zkevm-testnet.polygonscan.com",
    explorerAPI: "https://api-testnet-zkevm.polygonscan.com",
    currency: "ETH",
  },
  Mumbai: {
    name: "Mumbai",
    chainId: 80001,
    rpc: "https://rpc-mumbai.maticvigil.com",
    explorer: "https://mumbai.polygonscan.com",
    explorerAPI: "https://api-testnet.polygonscan.com",
    currency: "MATIC",
  },
};

export const getBlockChainServer = (blockChain: string): Chain | undefined =>
  chains[blockChain];

export const supportedChains: string[] = Object.keys(chains);

export interface Chain {
  name: string;
  chainId: number;
  rpc: string;
  explorer: string;
  explorerAPI: string;
  currency: string;
}
