const { network, deployments, ethers, getNamedAccounts } = require("hardhat");
const { assert, expect } = require("chai");

describe("add", async () => {
  let addContract;
  let deployer;
  let num1;
  let num2;
  beforeEach(async () => {
    deployer = (await getNamedAccounts()).deployer;
    await deployments.fixture(["all"]);
    addContract = await ethers.getContract("add", deployer);
    console.log("Contract is ready for testing");
//   });
//   describe("setNum", async () => {
//     it("Fail if you dont pass two values", async () => {
//       await expect(addContract.setNum()).to.be.revertedWith(
//         "Please both the Numbers"
//       );
//     });
//   });
//   it("set two nums", async () => {
//     await addContract.setNum({ value1: num1, value2: num2 });

  });
});
