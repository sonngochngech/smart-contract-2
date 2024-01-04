/** @type import('hardhat/config').HardhatUserConfig */
require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
module.exports = {
  solidity:{
    version:"0.8.20",
    settings: {
      optimizer: {
        enabled: true
      }
    }
  },
  networks:{
    localhost:{
      url:"http://127.0.0.1:8545"
    },
    bscTestnet: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545",
      accounts: [process.env.PRIVATE_KEY]
    }
  }

};
