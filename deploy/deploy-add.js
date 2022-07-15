const { getNamedAccounts, network, deployments } = require("hardhat");
const {
  networkConfig,
  developmentChains,
} = require("../helper-hardhat-config");
const {verify} = require("../utils/verify");
module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();
  const chainId = network.config.chainId;
  console.log("Deploying contract....");
  const add = await deploy("add", {
    from: deployer,
    log: true,
    waitConfirmations: network.config.blockConfirmations || 1,
  });
  log(`add contract deployed at ${add.address}`);

  if (
    !developmentChains.includes(network.name) &&
    process.env.ETHERSCAN_API_KEY
  ) {
    await verify(add.address);
  }
};
// module.exports.tags = ["all", "add"];
