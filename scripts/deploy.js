const hre = require("hardhat");

async function main() {
  const Contract = await hre.ethers.getContractFactory("MyContract");
  const contract = await Contract.deploy();

  const airdropAddress = ["0xA2A5e1a5597e8b59279800eBD8d156F9E10586aA"];
  for (let i = 0; i < airdropAddress.length; i++) {
    await contract.airdrop(airdropAddress[i]);
  }

  console.log("inside this contract address", contract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
