/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  SCPolygon2,
  SCPolygon2Interface,
} from "../../../contracts/sc-polygon-2/SCPolygon2";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
    ],
    name: "TokenListed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "TokenMinted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "buyer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
    ],
    name: "TokenPurchased",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
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
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "cancelTokenSale",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getListInfo",
    outputs: [
      {
        components: [
          {
            internalType: "bool",
            name: "isActive",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "price",
            type: "uint256",
          },
        ],
        internalType: "struct SCPolygon2.Sale",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
    ],
    name: "listTokenForSale",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "string",
        name: "tokenURI",
        type: "string",
      },
    ],
    name: "mintNFT",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
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
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "purchaseToken",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
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
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "tokenSales",
    outputs: [
      {
        internalType: "bool",
        name: "isActive",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
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
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040518060400160405280600a81526020016929a1a837b63cb3b7b71960b11b8152506040518060400160405280600581526020016429a1a8181960d91b815250816000908162000064919062000191565b50600162000073828262000191565b505050620000906200008a6200009660201b60201c565b6200009a565b6200025d565b3390565b600780546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b634e487b7160e01b600052604160045260246000fd5b600181811c908216806200011757607f821691505b6020821081036200013857634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200018c57600081815260208120601f850160051c81016020861015620001675750805b601f850160051c820191505b81811015620001885782815560010162000173565b5050505b505050565b81516001600160401b03811115620001ad57620001ad620000ec565b620001c581620001be845462000102565b846200013e565b602080601f831160018114620001fd5760008415620001e45750858301515b600019600386901b1c1916600185901b17855562000188565b600085815260208120601f198616915b828110156200022e578886015182559484019460019091019084016200020d565b50858210156200024d5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b611f46806200026d6000396000f3fe6080604052600436106101355760003560e01c8063715018a6116100ab578063c2db2c421161006f578063c2db2c4214610392578063c87b56dd146103a5578063e985e9c5146103c5578063eacabe14146103e5578063efc7377a14610405578063f2fde38b1461048057600080fd5b8063715018a61461030a5780638da5cb5b1461031f57806395d89b411461033d578063a22cb46514610352578063b88d4fde1461037257600080fd5b80632406e677116100fd5780632406e6771461020b5780632bda5ac31461022b57806342842e0e1461024b57806345cf084b1461026b5780636352211e146102bc57806370a08231146102dc57600080fd5b806301ffc9a71461013a57806306fdde031461016f578063081812fc14610191578063095ea7b3146101c957806323b872dd146101eb575b600080fd5b34801561014657600080fd5b5061015a6101553660046118ee565b6104a0565b60405190151581526020015b60405180910390f35b34801561017b57600080fd5b506101846104b1565b604051610166919061195b565b34801561019d57600080fd5b506101b16101ac36600461196e565b610543565b6040516001600160a01b039091168152602001610166565b3480156101d557600080fd5b506101e96101e43660046119a3565b61056a565b005b3480156101f757600080fd5b506101e96102063660046119cd565b610684565b34801561021757600080fd5b506101e9610226366004611a09565b6106b6565b34801561023757600080fd5b506101e961024636600461196e565b6107cc565b34801561025757600080fd5b506101e96102663660046119cd565b610874565b34801561027757600080fd5b506102a561028636600461196e565b6009602052600090815260409020805460019091015460ff9091169082565b604080519215158352602083019190915201610166565b3480156102c857600080fd5b506101b16102d736600461196e565b61088f565b3480156102e857600080fd5b506102fc6102f7366004611a2b565b6108ef565b604051908152602001610166565b34801561031657600080fd5b506101e9610975565b34801561032b57600080fd5b506007546001600160a01b03166101b1565b34801561034957600080fd5b50610184610989565b34801561035e57600080fd5b506101e961036d366004611a46565b610998565b34801561037e57600080fd5b506101e961038d366004611b0e565b6109a7565b6101e96103a036600461196e565b6109de565b3480156103b157600080fd5b506101846103c036600461196e565b610cc2565b3480156103d157600080fd5b5061015a6103e0366004611b8a565b610dd2565b3480156103f157600080fd5b506101e9610400366004611bbd565b610e00565b34801561041157600080fd5b5061046361042036600461196e565b6040805180820190915260008082526020820152506000908152600960209081526040918290208251808401909352805460ff1615158352600101549082015290565b604080518251151581526020928301519281019290925201610166565b34801561048c57600080fd5b506101e961049b366004611a2b565b610e6a565b60006104ab82610ee3565b92915050565b6060600080546104c090611c1f565b80601f01602080910402602001604051908101604052809291908181526020018280546104ec90611c1f565b80156105395780601f1061050e57610100808354040283529160200191610539565b820191906000526020600020905b81548152906001019060200180831161051c57829003601f168201915b5050505050905090565b600061054e82610f33565b506000908152600460205260409020546001600160a01b031690565b60006105758261088f565b9050806001600160a01b0316836001600160a01b0316036105e75760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b60648201526084015b60405180910390fd5b336001600160a01b038216148061060357506106038133610dd2565b6106755760405162461bcd60e51b815260206004820152603d60248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60448201527f6b656e206f776e6572206f7220617070726f76656420666f7220616c6c00000060648201526084016105de565b61067f8383610f92565b505050565b61068f335b82611000565b6106ab5760405162461bcd60e51b81526004016105de90611c59565b61067f83838361105e565b6106c1335b83611000565b61070d5760405162461bcd60e51b815260206004820181905260248201527f43616c6c6572206973206e6f74206f776e6572206e6f7220617070726f76656460448201526064016105de565b6000811161075d5760405162461bcd60e51b815260206004820152601f60248201527f5072696365206d7573742062652067726561746572207468616e207a65726f0060448201526064016105de565b604080518082018252600180825260208083018581526000878152600983528590209351845460ff1916901515178455519290910191909155905182815283917f1ea85aaf6731daa0c29195039c2a36576fb04e2cd16335504fab8967dfb03f15910160405180910390a25050565b6107d533610689565b6108215760405162461bcd60e51b815260206004820181905260248201527f43616c6c6572206973206e6f74206f776e6572206e6f7220617070726f76656460448201526064016105de565b600081815260096020526040808220805460ff191690555182917f1ea85aaf6731daa0c29195039c2a36576fb04e2cd16335504fab8967dfb03f159161086991815260200190565b60405180910390a250565b61067f838383604051806020016040528060008152506109a7565b6000818152600260205260408120546001600160a01b0316806104ab5760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b60448201526064016105de565b60006001600160a01b0382166109595760405162461bcd60e51b815260206004820152602960248201527f4552433732313a2061646472657373207a65726f206973206e6f7420612076616044820152683634b21037bbb732b960b91b60648201526084016105de565b506001600160a01b031660009081526003602052604090205490565b61097d6111c2565b610987600061121c565b565b6060600180546104c090611c1f565b6109a333838361126e565b5050565b6109b0336106bb565b6109cc5760405162461bcd60e51b81526004016105de90611c59565b6109d88484848461133c565b50505050565b6000818152600960209081526040918290208251808401909352805460ff16151580845260019091015491830191909152610a5b5760405162461bcd60e51b815260206004820152601c60248201527f546f6b656e206973206e6f74206c697374656420666f722073616c650000000060448201526064016105de565b8060200151341015610aa65760405162461bcd60e51b8152602060048201526014602482015273125b9cdd59999a58da595b9d081c185e5b595b9d60621b60448201526064016105de565b6000610ab18361088f565b9050336001600160a01b03821603610b0b5760405162461bcd60e51b815260206004820152601b60248201527f43616c6c657220697320616c726561647920746865206f776e6572000000000060448201526064016105de565b610b1681338561105e565b60008381526009602090815260408220805460ff19169055830151610b3c90349061136f565b90508015610bd657604051600090339083908381818185875af1925050503d8060008114610b86576040519150601f19603f3d011682016040523d82523d6000602084013e610b8b565b606091505b5050905080610bd45760405162461bcd60e51b815260206004820152601560248201527411985a5b1959081d1bc81cd95b99081c99599d5b99605a1b60448201526064016105de565b505b60208301516040516000916001600160a01b038516918381818185875af1925050503d8060008114610c24576040519150601f19603f3d011682016040523d82523d6000602084013e610c29565b606091505b5050905080610c735760405162461bcd60e51b815260206004820152601660248201527511985a5b1959081d1bc81cd95b99081c185e5b595b9d60521b60448201526064016105de565b336001600160a01b0316857f1cb6dd09e77cf64c9d88c8e0cf8555ebff062045f2068f22efcbc60905730e718660200151604051610cb391815260200190565b60405180910390a35050505050565b6060610ccd82610f33565b60008281526006602052604081208054610ce690611c1f565b80601f0160208091040260200160405190810160405280929190818152602001828054610d1290611c1f565b8015610d5f5780601f10610d3457610100808354040283529160200191610d5f565b820191906000526020600020905b815481529060010190602001808311610d4257829003601f168201915b505050505090506000610d7d60408051602081019091526000815290565b90508051600003610d8f575092915050565b815115610dc1578082604051602001610da9929190611ca6565b60405160208183030381529060405292505050919050565b610dca84611382565b949350505050565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b610e086111c2565b600854610e169060016113f5565b6008819055610e258382611401565b610e2f818361141b565b6040516001600160a01b0384169082907f3a5398bda6f1f57d6c96834fa9bf02b5517bdc847d14312015a917ba421c31c990600090a3505050565b610e726111c2565b6001600160a01b038116610ed75760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016105de565b610ee08161121c565b50565b60006001600160e01b031982166380ac58cd60e01b1480610f1457506001600160e01b03198216635b5e139f60e01b145b806104ab57506301ffc9a760e01b6001600160e01b03198316146104ab565b6000818152600260205260409020546001600160a01b0316610ee05760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b60448201526064016105de565b600081815260046020526040902080546001600160a01b0319166001600160a01b0384169081179091558190610fc78261088f565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b60008061100c8361088f565b9050806001600160a01b0316846001600160a01b0316148061103357506110338185610dd2565b80610dca5750836001600160a01b031661104c84610543565b6001600160a01b031614949350505050565b826001600160a01b03166110718261088f565b6001600160a01b0316146110975760405162461bcd60e51b81526004016105de90611cd5565b6001600160a01b0382166110f95760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b60648201526084016105de565b826001600160a01b031661110c8261088f565b6001600160a01b0316146111325760405162461bcd60e51b81526004016105de90611cd5565b600081815260046020908152604080832080546001600160a01b03199081169091556001600160a01b0387811680865260038552838620805460001901905590871680865283862080546001019055868652600290945282852080549092168417909155905184937fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b6007546001600160a01b031633146109875760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016105de565b600780546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b816001600160a01b0316836001600160a01b0316036112cf5760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c65720000000000000060448201526064016105de565b6001600160a01b03838116600081815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b61134784848461105e565b611353848484846114ae565b6109d85760405162461bcd60e51b81526004016105de90611d1a565b600061137b8284611d82565b9392505050565b606061138d82610f33565b60006113a460408051602081019091526000815290565b905060008151116113c4576040518060200160405280600081525061137b565b806113ce846115af565b6040516020016113df929190611ca6565b6040516020818303038152906040529392505050565b600061137b8284611d95565b6109a3828260405180602001604052806000815250611642565b6000828152600260205260409020546001600160a01b03166114965760405162461bcd60e51b815260206004820152602e60248201527f45524337323155524953746f726167653a2055524920736574206f66206e6f6e60448201526d32bc34b9ba32b73a103a37b5b2b760911b60648201526084016105de565b600082815260066020526040902061067f8282611df6565b60006001600160a01b0384163b156115a457604051630a85bd0160e11b81526001600160a01b0385169063150b7a02906114f2903390899088908890600401611eb6565b6020604051808303816000875af192505050801561152d575060408051601f3d908101601f1916820190925261152a91810190611ef3565b60015b61158a573d80801561155b576040519150601f19603f3d011682016040523d82523d6000602084013e611560565b606091505b5080516000036115825760405162461bcd60e51b81526004016105de90611d1a565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050610dca565b506001949350505050565b606060006115bc83611675565b600101905060008167ffffffffffffffff8111156115dc576115dc611a82565b6040519080825280601f01601f191660200182016040528015611606576020820181803683370190505b5090508181016020015b600019016f181899199a1a9b1b9c1cb0b131b232b360811b600a86061a8153600a850494508461161057509392505050565b61164c838361174d565b61165960008484846114ae565b61067f5760405162461bcd60e51b81526004016105de90611d1a565b60008072184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b83106116b45772184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b830492506040015b6d04ee2d6d415b85acef810000000083106116e0576d04ee2d6d415b85acef8100000000830492506020015b662386f26fc1000083106116fe57662386f26fc10000830492506010015b6305f5e1008310611716576305f5e100830492506008015b612710831061172a57612710830492506004015b6064831061173c576064830492506002015b600a83106104ab5760010192915050565b6001600160a01b0382166117a35760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f206164647265737360448201526064016105de565b6000818152600260205260409020546001600160a01b0316156118085760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e7465640000000060448201526064016105de565b6000818152600260205260409020546001600160a01b03161561186d5760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e7465640000000060448201526064016105de565b6001600160a01b038216600081815260036020908152604080832080546001019055848352600290915280822080546001600160a01b0319168417905551839291907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b6001600160e01b031981168114610ee057600080fd5b60006020828403121561190057600080fd5b813561137b816118d8565b60005b8381101561192657818101518382015260200161190e565b50506000910152565b6000815180845261194781602086016020860161190b565b601f01601f19169290920160200192915050565b60208152600061137b602083018461192f565b60006020828403121561198057600080fd5b5035919050565b80356001600160a01b038116811461199e57600080fd5b919050565b600080604083850312156119b657600080fd5b6119bf83611987565b946020939093013593505050565b6000806000606084860312156119e257600080fd5b6119eb84611987565b92506119f960208501611987565b9150604084013590509250925092565b60008060408385031215611a1c57600080fd5b50508035926020909101359150565b600060208284031215611a3d57600080fd5b61137b82611987565b60008060408385031215611a5957600080fd5b611a6283611987565b915060208301358015158114611a7757600080fd5b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b600067ffffffffffffffff80841115611ab357611ab3611a82565b604051601f8501601f19908116603f01168101908282118183101715611adb57611adb611a82565b81604052809350858152868686011115611af457600080fd5b858560208301376000602087830101525050509392505050565b60008060008060808587031215611b2457600080fd5b611b2d85611987565b9350611b3b60208601611987565b925060408501359150606085013567ffffffffffffffff811115611b5e57600080fd5b8501601f81018713611b6f57600080fd5b611b7e87823560208401611a98565b91505092959194509250565b60008060408385031215611b9d57600080fd5b611ba683611987565b9150611bb460208401611987565b90509250929050565b60008060408385031215611bd057600080fd5b611bd983611987565b9150602083013567ffffffffffffffff811115611bf557600080fd5b8301601f81018513611c0657600080fd5b611c1585823560208401611a98565b9150509250929050565b600181811c90821680611c3357607f821691505b602082108103611c5357634e487b7160e01b600052602260045260246000fd5b50919050565b6020808252602d908201527f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560408201526c1c881bdc88185c1c1c9bdd9959609a1b606082015260800190565b60008351611cb881846020880161190b565b835190830190611ccc81836020880161190b565b01949350505050565b60208082526025908201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060408201526437bbb732b960d91b606082015260800190565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b634e487b7160e01b600052601160045260246000fd5b818103818111156104ab576104ab611d6c565b808201808211156104ab576104ab611d6c565b601f82111561067f57600081815260208120601f850160051c81016020861015611dcf5750805b601f850160051c820191505b81811015611dee57828155600101611ddb565b505050505050565b815167ffffffffffffffff811115611e1057611e10611a82565b611e2481611e1e8454611c1f565b84611da8565b602080601f831160018114611e595760008415611e415750858301515b600019600386901b1c1916600185901b178555611dee565b600085815260208120601f198616915b82811015611e8857888601518255948401946001909101908401611e69565b5085821015611ea65787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6001600160a01b0385811682528416602082015260408101839052608060608201819052600090611ee99083018461192f565b9695505050505050565b600060208284031215611f0557600080fd5b815161137b816118d856fea26469706673582212208ddf5475db45e8ad36c29b8fbdf3001682a230a0723ba51879da7c6018d0e72164736f6c63430008110033";

type SCPolygon2ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SCPolygon2ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SCPolygon2__factory extends ContractFactory {
  constructor(...args: SCPolygon2ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<SCPolygon2> {
    return super.deploy(overrides || {}) as Promise<SCPolygon2>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): SCPolygon2 {
    return super.attach(address) as SCPolygon2;
  }
  override connect(signer: Signer): SCPolygon2__factory {
    return super.connect(signer) as SCPolygon2__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SCPolygon2Interface {
    return new utils.Interface(_abi) as SCPolygon2Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SCPolygon2 {
    return new Contract(address, _abi, signerOrProvider) as SCPolygon2;
  }
}