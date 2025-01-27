/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  NativeMetaTransaction,
  NativeMetaTransactionInterface,
} from "../../../../../contracts/sc-polygon-2/common/meta-transactions/NativeMetaTransaction";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address payable",
        name: "relayerAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "functionSignature",
        type: "bytes",
      },
    ],
    name: "MetaTransactionExecuted",
    type: "event",
  },
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
    inputs: [
      {
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "functionSignature",
        type: "bytes",
      },
      {
        internalType: "bytes32",
        name: "sigR",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "sigS",
        type: "bytes32",
      },
      {
        internalType: "uint8",
        name: "sigV",
        type: "uint8",
      },
    ],
    name: "executeMetaTransaction",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "payable",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "getNonce",
    outputs: [
      {
        internalType: "uint256",
        name: "nonce",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040526000805460ff1916905534801561001a57600080fd5b506107778061002a6000396000f3fe60806040526004361061004a5760003560e01c80630c53c51c1461004f5780630f7e59701461007857806320379ee5146100a55780632d0335ab146100c45780633408e470146100fa575b600080fd5b61006261005d3660046104f1565b61010d565b60405161006f9190610627565b60405180910390f35b34801561008457600080fd5b50610062604051806040016040528060018152602001603160f81b81525081565b3480156100b157600080fd5b506001545b60405190815260200161006f565b3480156100d057600080fd5b506100b66100df36600461063a565b6001600160a01b031660009081526002602052604090205490565b34801561010657600080fd5b50466100b6565b60408051606081810183526001600160a01b0388166000818152600260209081529085902054845283015291810186905261014b87828787876102fc565b6101a65760405162461bcd60e51b815260206004820152602160248201527f5369676e657220616e64207369676e617475726520646f206e6f74206d6174636044820152600d60fb1b60648201526084015b60405180910390fd5b6001600160a01b0387166000908152600260205260409020546101ca9060016103ec565b6001600160a01b0388166000908152600260205260409081902091909155517f5845892132946850460bff5a0083f71031bc5bf9aadcd40f1de79423eac9b10b9061021a90899033908a90610655565b60405180910390a1600080306001600160a01b0316888a60405160200161024292919061068a565b60408051601f198184030181529082905261025c916106c1565b6000604051808303816000865af19150503d8060008114610299576040519150601f19603f3d011682016040523d82523d6000602084013e61029e565b606091505b5091509150816102f05760405162461bcd60e51b815260206004820152601c60248201527f46756e6374696f6e2063616c6c206e6f74207375636365737366756c00000000604482015260640161019d565b98975050505050505050565b60006001600160a01b0386166103625760405162461bcd60e51b815260206004820152602560248201527f4e61746976654d6574615472616e73616374696f6e3a20494e56414c49445f5360448201526424a3a722a960d91b606482015260840161019d565b600161037561037087610401565b61047e565b6040805160008152602081018083529290925260ff851690820152606081018690526080810185905260a0016020604051602081039080840390855afa1580156103c3573d6000803e3d6000fd5b505050602060405103516001600160a01b0316866001600160a01b031614905095945050505050565b60006103f882846106dd565b90505b92915050565b60006040518060800160405280604381526020016106ff6043913980516020918201208351848301516040808701518051908601209051610461950193845260208401929092526001600160a01b03166040830152606082015260800190565b604051602081830303815290604052805190602001209050919050565b600061048960015490565b60405161190160f01b6020820152602281019190915260428101839052606201610461565b80356001600160a01b03811681146104c557600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b803560ff811681146104c557600080fd5b600080600080600060a0868803121561050957600080fd5b610512866104ae565b9450602086013567ffffffffffffffff8082111561052f57600080fd5b818801915088601f83011261054357600080fd5b813581811115610555576105556104ca565b604051601f8201601f19908116603f0116810190838211818310171561057d5761057d6104ca565b816040528281528b602084870101111561059657600080fd5b82602086016020830137600060208483010152809850505050505060408601359250606086013591506105cb608087016104e0565b90509295509295909350565b60005b838110156105f25781810151838201526020016105da565b50506000910152565b600081518084526106138160208601602086016105d7565b601f01601f19169290920160200192915050565b6020815260006103f860208301846105fb565b60006020828403121561064c57600080fd5b6103f8826104ae565b6001600160a01b03848116825283166020820152606060408201819052600090610681908301846105fb565b95945050505050565b6000835161069c8184602088016105d7565b60609390931b6bffffffffffffffffffffffff19169190920190815260140192915050565b600082516106d38184602087016105d7565b9190910192915050565b808201808211156103fb57634e487b7160e01b600052601160045260246000fdfe4d6574615472616e73616374696f6e2875696e74323536206e6f6e63652c616464726573732066726f6d2c62797465732066756e6374696f6e5369676e617475726529a264697066735822122050b6741ab1284291b51664a1289bec17ee5fd96d947615b181d8c83bcd4d7cad64736f6c63430008110033";

type NativeMetaTransactionConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: NativeMetaTransactionConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class NativeMetaTransaction__factory extends ContractFactory {
  constructor(...args: NativeMetaTransactionConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<NativeMetaTransaction> {
    return super.deploy(overrides || {}) as Promise<NativeMetaTransaction>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): NativeMetaTransaction {
    return super.attach(address) as NativeMetaTransaction;
  }
  override connect(signer: Signer): NativeMetaTransaction__factory {
    return super.connect(signer) as NativeMetaTransaction__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): NativeMetaTransactionInterface {
    return new utils.Interface(_abi) as NativeMetaTransactionInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): NativeMetaTransaction {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as NativeMetaTransaction;
  }
}
