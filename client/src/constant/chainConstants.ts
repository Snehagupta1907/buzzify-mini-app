import { http } from "viem";
const citreaTestnet = {
  id: 5115,
  name: "Citrea Testnet",
  iconUrl:"https://www.opencampus.xyz/static/media/coin-logo.39cbd6c42530e57817a5b98ac7621ca7.svg",
  nativeCurrency: { name: "Citrea", symbol: "cBTC", decimals: 18 },
  rpcUrls: {
    default: { http: ["https://rpc.testnet.citrea.xyz/"] },
  },
  blockExplorers: {
    default: { name: "Citrea Testnet", url: "https://explorer.testnet.citrea.xyz/" },
  },
}


const rootstockTestnet = {
  id: 31,
  name: "Rootstock Testnet",
  iconUrl:"https://www.opencampus.xyz/static/media/coin-logo.39cbd6c42530e57817a5b98ac7621ca7.svg",
  nativeCurrency: { name: "Rootstock", symbol: "tRBTC", decimals: 18 },
  rpcUrls: {
    default: { http: ["https://public-node.testnet.rsk.co/"] },
  },
  blockExplorers: {
    default: { name: "Rootstock Testnet", url: "https://explorer.testnet.rsk.co/" },
  },
 
}

export const chainArray = [citreaTestnet,rootstockTestnet];
export const transportsObject = {
  [citreaTestnet.id]: http(),
  [rootstockTestnet.id]: http(),
};
