// Returns the private keys of accounts in the network
const { ethers } = require('ethers')

// Used only on test/local environments
const mnemonic = 'test test test test test test test test test test test junk'

const privateKeys = []

const derivePath = "m/44'/60'/0'/0/"
for (let i = 0; i <= 10; i++) {
  const wallet = new ethers.Wallet.fromMnemonic(mnemonic, `${derivePath}${i}`)
  privateKeys.push(wallet.privateKey)
}

// Override deployer and signer keys on prod
if (process.env.NODE_ENV !== 'test') {
  if (process.env.DEPLOYER_PK) {
    privateKeys[0] = process.env.DEPLOYER_PK
  }
  if (process.env.SIGNER_PK) {
    privateKeys[1] = process.env.SIGNER_PK
  }
  if (process.env.MASTER_PK) {
    privateKeys[2] = process.env.MASTER_PK
  }
}

const deployerAccount = new ethers.Wallet(privateKeys[0])
const signerAccount = new ethers.Wallet(privateKeys[1])
const masterAccount = new ethers.Wallet(privateKeys[2])

module.exports = {
  mnemonic,
  privateKeys,
  deployerPk: privateKeys[0],
  signerPk: privateKeys[1],
  masterPk: privateKeys[2],
  deployerAccount,
  signerAccount,
  masterAccount,
  hotWalletAddress: process.env.HOT_WALLET_ADDRESS
}
