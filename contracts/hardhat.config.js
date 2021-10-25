require('dotenv').config({ path: '../common/.env' })
const { mnemonic, privateKeys } = require('./config/accounts')
require("@nomiclabs/hardhat-waffle");
require('@nomiclabs/hardhat-etherscan')

require('hardhat-deploy')
require('hardhat-deploy-ethers')

const PROVIDER_URL = process.env.PROVIDER_URL || 'http://localhost:8545'

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    hardhat: {
      accounts: { mnemonic },
      hardfork: 'london',
      initialBaseFeePerGas: '1000000000'
    },
    rinkeby: {
      url: PROVIDER_URL,
      accounts: privateKeys.slice(0, 2)
    },
    mainnet: {
      url: PROVIDER_URL,
      accounts: privateKeys.slice(0, 2)
    },
    goerli: {
      url: PROVIDER_URL,
      accounts: privateKeys.slice(0, 2)
    },
    mumbai: { //polygon testnet
      url: "https://rpc-mumbai.matic.today",
      accounts: privateKeys.slice(0, 2)
    }
  },
  namedAccounts: {
    deployerAddr: {
      default: 0,
      localhost: 0
    },
    signerAddr: {
      default: 1,
      localhost: 1
    },
    masterAddr: {
      default: 2,
      localhost: 2
    },
  },
  paths: {
    sources: './src',
  },
};
