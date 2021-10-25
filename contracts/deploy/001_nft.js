const hre = require('hardhat')

const {
  POLYGON_NFT_CONTRACT,
  POLYGON_CONTRACT_VERSION
} = require('common/src/const')

const {
  getPolygonChildChainManager
} = require('commmon/src/utils/polygon')


const isMainnet = hre.network.name === 'mainnet'
const isRinkeby = hre.network.name === 'rinkeby'

const deployNFT = async ({ getNamedAccounts, deployments }) => {
  const { deploy } = deployments
  const { deployerAddr, masterAddr } = await getNamedAccounts()

  console.log('Running 001_nft deployment...')
  console.log('Deployer address', deployerAddr)
  console.log('Master address', masterAddr)
  console.log('targetting network: ', hre.network)

  const contractName = POLYGON_NFT_CONTRACT

  await deploy(nftContractName, {
    from: deployerAddr,
    args: ['Origin Arena', 'OGNA', 'http://localhost/', getPolygonChildChainManager(hre.network.chainId)]
  })

  const nftContract = await hre.ethers.getContract(nftContractName)

  console.log(`${deployNFT.id} deployment done`)
  console.log(`${nftContractName} deployed to ${nftContract.address}`)

  return true
}

deployNFT.id = '001_nft'
deployNFT.tags = ['nft']
deployNFT.skip = () => isMainnet || isKovan || isRinkeby

module.exports = deployNFT
