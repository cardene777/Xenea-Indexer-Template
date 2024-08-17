import { createConfig } from "@ponder/core";
import { http } from "viem";

import { CDH } from "./abis/CDH";
import { SampleERC20 } from "./abis/SampleERC20";
import { SampleERC721 } from "./abis/SampleERC721";
import { SampleERC1155 } from "./abis/SampleERC1155";

export default createConfig({
  networks: {
    kura: {
      chainId: 5555,
      transport: http(process.env.PONDER_RPC_URL_5555),
    },
  },
  contracts: {
    CDHContract: {
      network: "kura",
      abi: CDH,
      address: "0x3784213D4D5057AF218dA4ee8149B5d35fca8e06",
      startBlock: 601902,
    },
    SampleERC20: {
      network: "kura",
      abi: SampleERC20,
      address: [
        "0x376593252e3bf9B00042e7b802DE6684EBCcB53B",
        "0x7979584E09EFfccA84b6665E2834C703fFCC949F",
        "0x11A90C2d3e2FA036ff6C1A8DC960f4512eEE772d",
      ],
      startBlock: 638505,
    },
    SampleERC721: {
      network: "kura",
      abi: SampleERC721,
      address: [
        "0x2b8e8f6dfCCd54254A09f50f2CE1341D28EC5564",
        "0x27b9c1425135730369651b55aEA62710717825e6",
        "0xe6DFdAA1509B8d7efcB20c60296dF3A1b212a978",
      ],
      startBlock: 638501,
    },
    SampleERC1155: {
      network: "kura",
      abi: SampleERC1155,
      address: "0xEc756B6ef29f5cba4871a11b6f745d3555BBE655",
      startBlock: 638504,
    },
  },
});
