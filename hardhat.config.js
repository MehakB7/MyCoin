require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    sapolia: {
      url: process.env.SAPOLIA_URL,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};
