import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "hardhat-deploy";
require("dotenv").config();

const config: HardhatUserConfig = {
  solidity: "0.8.20",
  defaultNetwork: "hardhat", //note hardhat is the default network
  networks: {
    hardhat: {
      chainId: 31337,
    },
    sepolia: {
      url: `${process.env.ALCHEMY_SEPOLIA_URL}`,
      accounts: [`0x${process.env.SEPOLIA_PRIVATE_KEY}`],
    },
  },
  namedAccounts: {
    deployer: {
      default: `${process.env.DEPLOYER_ADDRESS}`,
    },
  },
  paths: {
    deploy: "migrations",
    deployments: "deployments",
    imports: "imports",
  },
};

export default config;
