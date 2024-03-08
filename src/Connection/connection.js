import { createWeb3Modal, defaultConfig } from "@web3modal/ethers/react";

export const SUPPORT_CHAIN = 11155111;

// 2. Set chains
const sepolia = {
  chainId: SUPPORT_CHAIN,
  name: "sepolia",
  currency: "ETH",
  explorerUrl: "https://sepolia.etherscan.io",
  rpcUrl: import.meta.env.VITE_rpc_url,
};

// 3. Create modal
const metadata = {
  name: "My Website",
  description: "My Website description",
  url: "https://mywebsite.com", // origin must match your domain & subdomain
  icons: ["https://avatars.mywebsite.com/"],
};

export const configureWeb3Modal = () =>
  createWeb3Modal({
    ethersConfig: defaultConfig({ metadata }),
    chains: [sepolia],
    projectId: import.meta.env.VITE_projectID,
    enableAnalytics: false, // Optional - defaults to your Cloud configuration
  });
