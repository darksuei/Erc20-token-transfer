// TypeScript
import { DeployFunction, DeployResult } from "hardhat-deploy/dist/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";
// import { network } from "hardhat";

const deployTokens: DeployFunction = async (
  hre: HardhatRuntimeEnvironment // pass in the hardhat runtime env
) => {
  const { deploy } = hre.deployments;
  const { deployer } = await hre.getNamedAccounts();
  //   const chainId = network.config.chainId!;

  const tokenA: DeployResult = await deploy("TokenA", {
    from: deployer,
    log: true,
    args: [deployer],
  });
};

export default deployTokens;
deployTokens.tags = ["all", "tokenA"];
