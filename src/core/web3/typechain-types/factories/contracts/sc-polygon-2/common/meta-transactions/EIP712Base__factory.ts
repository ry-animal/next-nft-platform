/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  EIP712Base,
  EIP712BaseInterface,
} from "../../../../../contracts/sc-polygon-2/common/meta-transactions/EIP712Base";

const _abi = [
  {
    inputs: [],
    name: "ERC712_VERSION",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getChainId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getDomainSeperator",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040526000805460ff1916905534801561001a57600080fd5b5061010c8061002a6000396000f3fe6080604052348015600f57600080fd5b5060043610603c5760003560e01c80630f7e597014604157806320379ee51460745780633408e470146085575b600080fd5b6060604051806040016040528060018152602001603160f81b81525081565b604051606b9190608a565b60405180910390f35b6001545b604051908152602001606b565b466078565b600060208083528351808285015260005b8181101560b557858101830151858201604001528201609b565b506000604082860101526040601f19601f830116850101925050509291505056fea2646970667358221220d682718727f33dac667ac45e903847ee9d84266076295968f88c19143765aa5764736f6c63430008110033";

type EIP712BaseConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: EIP712BaseConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class EIP712Base__factory extends ContractFactory {
  constructor(...args: EIP712BaseConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<EIP712Base> {
    return super.deploy(overrides || {}) as Promise<EIP712Base>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): EIP712Base {
    return super.attach(address) as EIP712Base;
  }
  override connect(signer: Signer): EIP712Base__factory {
    return super.connect(signer) as EIP712Base__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): EIP712BaseInterface {
    return new utils.Interface(_abi) as EIP712BaseInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): EIP712Base {
    return new Contract(address, _abi, signerOrProvider) as EIP712Base;
  }
}
