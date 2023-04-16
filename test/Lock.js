const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");

describe("MyToken", function () {
  async function deployMyToken() {
    const [owner] = await ethers.getSigners();

    const airDropAddress = [];

    for (let i = 0; i < 5; i++) {
      let signer = await ethers.getSigner(i + 1);
      const address = signer.address;
      airDropAddress.push(address);
    }

    const Contract = await ethers.getContractFactory("MyContract");
    const contract = await Contract.deploy();
    console.log("inside this balance of each one", airDropAddress);

    return { contract, owner, airDropAddress };
  }

  describe("AirDrop", function () {
    it("should air drop 5 accounts", async function () {
      const { contract, airDropAddress, owner } = await loadFixture(
        deployMyToken
      );

      for (let i = 0; i < airDropAddress.length; i++) {
        await contract.airdrop(airDropAddress[i]);
        expect(
          (await contract.balanceOf(airDropAddress[i])) / 10 ** 18
        ).to.equal(10);
      }
    });
  });
});
