/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export declare namespace SCTradeContract {
  export type ListingStruct = {
    seller: PromiseOrValue<string>;
    tokenAddress: PromiseOrValue<string>;
    tokenId: PromiseOrValue<BigNumberish>;
    price: PromiseOrValue<BigNumberish>;
    isForSale: PromiseOrValue<boolean>;
  };

  export type ListingStructOutput = [
    string,
    string,
    BigNumber,
    BigNumber,
    boolean
  ] & {
    seller: string;
    tokenAddress: string;
    tokenId: BigNumber;
    price: BigNumber;
    isForSale: boolean;
  };
}

export interface SCTradeContractInterface extends utils.Interface {
  functions: {
    "_tradableContractAddresses(uint256)": FunctionFragment;
    "addTradableContract(address)": FunctionFragment;
    "deleteTradableContract(address)": FunctionFragment;
    "getListing(address,uint256)": FunctionFragment;
    "getPlatformFeePercentage()": FunctionFragment;
    "getTradableContracts()": FunctionFragment;
    "isListed(address,uint256)": FunctionFragment;
    "isTradingEnabled()": FunctionFragment;
    "listNFT(address,uint256,uint256)": FunctionFragment;
    "owner()": FunctionFragment;
    "platformFeePercentage()": FunctionFragment;
    "purchaseNFT(address,uint256)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setPlatformFeePercentage(uint256)": FunctionFragment;
    "setTradingEnabled(bool)": FunctionFragment;
    "tradableContracts(address)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "unlistNFT(address,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "_tradableContractAddresses"
      | "addTradableContract"
      | "deleteTradableContract"
      | "getListing"
      | "getPlatformFeePercentage"
      | "getTradableContracts"
      | "isListed"
      | "isTradingEnabled"
      | "listNFT"
      | "owner"
      | "platformFeePercentage"
      | "purchaseNFT"
      | "renounceOwnership"
      | "setPlatformFeePercentage"
      | "setTradingEnabled"
      | "tradableContracts"
      | "transferOwnership"
      | "unlistNFT"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "_tradableContractAddresses",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "addTradableContract",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "deleteTradableContract",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getListing",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getPlatformFeePercentage",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getTradableContracts",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isListed",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "isTradingEnabled",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "listNFT",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "platformFeePercentage",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "purchaseNFT",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setPlatformFeePercentage",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "setTradingEnabled",
    values: [PromiseOrValue<boolean>]
  ): string;
  encodeFunctionData(
    functionFragment: "tradableContracts",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "unlistNFT",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(
    functionFragment: "_tradableContractAddresses",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addTradableContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "deleteTradableContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getListing", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getPlatformFeePercentage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTradableContracts",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isListed", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isTradingEnabled",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "listNFT", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "platformFeePercentage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "purchaseNFT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setPlatformFeePercentage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setTradingEnabled",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tradableContracts",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "unlistNFT", data: BytesLike): Result;

  events: {
    "NFTListed(address,uint256,uint256)": EventFragment;
    "NFTPurchased(address,uint256,uint256)": EventFragment;
    "NFTUnlisted(address,uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "NFTListed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NFTPurchased"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NFTUnlisted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export interface NFTListedEventObject {
  tokenAddress: string;
  tokenId: BigNumber;
  price: BigNumber;
}
export type NFTListedEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  NFTListedEventObject
>;

export type NFTListedEventFilter = TypedEventFilter<NFTListedEvent>;

export interface NFTPurchasedEventObject {
  tokenAddress: string;
  tokenId: BigNumber;
  price: BigNumber;
}
export type NFTPurchasedEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  NFTPurchasedEventObject
>;

export type NFTPurchasedEventFilter = TypedEventFilter<NFTPurchasedEvent>;

export interface NFTUnlistedEventObject {
  tokenAddress: string;
  tokenId: BigNumber;
}
export type NFTUnlistedEvent = TypedEvent<
  [string, BigNumber],
  NFTUnlistedEventObject
>;

export type NFTUnlistedEventFilter = TypedEventFilter<NFTUnlistedEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface SCTradeContract extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: SCTradeContractInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    _tradableContractAddresses(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    addTradableContract(
      tokenAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    deleteTradableContract(
      tokenAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getListing(
      tokenAddress: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[SCTradeContract.ListingStructOutput]>;

    getPlatformFeePercentage(overrides?: CallOverrides): Promise<[BigNumber]>;

    getTradableContracts(overrides?: CallOverrides): Promise<[string[]]>;

    isListed(
      tokenAddress: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isTradingEnabled(overrides?: CallOverrides): Promise<[boolean]>;

    listNFT(
      tokenAddress: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      price: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    platformFeePercentage(overrides?: CallOverrides): Promise<[BigNumber]>;

    purchaseNFT(
      tokenAddress: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setPlatformFeePercentage(
      newPlatformFeePercentage: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setTradingEnabled(
      enableTrade: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    tradableContracts(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    unlistNFT(
      tokenAddress: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  _tradableContractAddresses(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  addTradableContract(
    tokenAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  deleteTradableContract(
    tokenAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getListing(
    tokenAddress: PromiseOrValue<string>,
    tokenId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<SCTradeContract.ListingStructOutput>;

  getPlatformFeePercentage(overrides?: CallOverrides): Promise<BigNumber>;

  getTradableContracts(overrides?: CallOverrides): Promise<string[]>;

  isListed(
    tokenAddress: PromiseOrValue<string>,
    tokenId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isTradingEnabled(overrides?: CallOverrides): Promise<boolean>;

  listNFT(
    tokenAddress: PromiseOrValue<string>,
    tokenId: PromiseOrValue<BigNumberish>,
    price: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  platformFeePercentage(overrides?: CallOverrides): Promise<BigNumber>;

  purchaseNFT(
    tokenAddress: PromiseOrValue<string>,
    tokenId: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setPlatformFeePercentage(
    newPlatformFeePercentage: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setTradingEnabled(
    enableTrade: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  tradableContracts(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  unlistNFT(
    tokenAddress: PromiseOrValue<string>,
    tokenId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    _tradableContractAddresses(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    addTradableContract(
      tokenAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    deleteTradableContract(
      tokenAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    getListing(
      tokenAddress: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<SCTradeContract.ListingStructOutput>;

    getPlatformFeePercentage(overrides?: CallOverrides): Promise<BigNumber>;

    getTradableContracts(overrides?: CallOverrides): Promise<string[]>;

    isListed(
      tokenAddress: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isTradingEnabled(overrides?: CallOverrides): Promise<boolean>;

    listNFT(
      tokenAddress: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      price: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    platformFeePercentage(overrides?: CallOverrides): Promise<BigNumber>;

    purchaseNFT(
      tokenAddress: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setPlatformFeePercentage(
      newPlatformFeePercentage: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setTradingEnabled(
      enableTrade: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    tradableContracts(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    unlistNFT(
      tokenAddress: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "NFTListed(address,uint256,uint256)"(
      tokenAddress?: PromiseOrValue<string> | null,
      tokenId?: PromiseOrValue<BigNumberish> | null,
      price?: null
    ): NFTListedEventFilter;
    NFTListed(
      tokenAddress?: PromiseOrValue<string> | null,
      tokenId?: PromiseOrValue<BigNumberish> | null,
      price?: null
    ): NFTListedEventFilter;

    "NFTPurchased(address,uint256,uint256)"(
      tokenAddress?: PromiseOrValue<string> | null,
      tokenId?: PromiseOrValue<BigNumberish> | null,
      price?: null
    ): NFTPurchasedEventFilter;
    NFTPurchased(
      tokenAddress?: PromiseOrValue<string> | null,
      tokenId?: PromiseOrValue<BigNumberish> | null,
      price?: null
    ): NFTPurchasedEventFilter;

    "NFTUnlisted(address,uint256)"(
      tokenAddress?: PromiseOrValue<string> | null,
      tokenId?: PromiseOrValue<BigNumberish> | null
    ): NFTUnlistedEventFilter;
    NFTUnlisted(
      tokenAddress?: PromiseOrValue<string> | null,
      tokenId?: PromiseOrValue<BigNumberish> | null
    ): NFTUnlistedEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
  };

  estimateGas: {
    _tradableContractAddresses(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    addTradableContract(
      tokenAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    deleteTradableContract(
      tokenAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getListing(
      tokenAddress: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPlatformFeePercentage(overrides?: CallOverrides): Promise<BigNumber>;

    getTradableContracts(overrides?: CallOverrides): Promise<BigNumber>;

    isListed(
      tokenAddress: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isTradingEnabled(overrides?: CallOverrides): Promise<BigNumber>;

    listNFT(
      tokenAddress: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      price: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    platformFeePercentage(overrides?: CallOverrides): Promise<BigNumber>;

    purchaseNFT(
      tokenAddress: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setPlatformFeePercentage(
      newPlatformFeePercentage: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setTradingEnabled(
      enableTrade: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    tradableContracts(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    unlistNFT(
      tokenAddress: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    _tradableContractAddresses(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    addTradableContract(
      tokenAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    deleteTradableContract(
      tokenAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getListing(
      tokenAddress: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPlatformFeePercentage(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTradableContracts(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isListed(
      tokenAddress: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isTradingEnabled(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    listNFT(
      tokenAddress: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      price: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    platformFeePercentage(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    purchaseNFT(
      tokenAddress: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setPlatformFeePercentage(
      newPlatformFeePercentage: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setTradingEnabled(
      enableTrade: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    tradableContracts(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    unlistNFT(
      tokenAddress: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
