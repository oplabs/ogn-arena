const {Hero} = require('common')
const path = require('path')
const _ = require('lodash')
const fs = require('fs')
const sizeOf = require('image-size')

const ROOT_HTTP = `http://bladesofvalor.com`
const HERO_PATH = `/pub/heroes/`
const RESOURCE_DIRECTORY = process.env.RESOURCE_DIRECTORY

const nftCreator = async () => {
  const numHeroes = process.argv[2];

  console.log(`Converting ${numHeroes} heros to NFTs...`)
  
  const heroes = await Hero.findAll({order:[['id', 'DESC']], limit:numHeroes});

  const nfts = []

  for(const hero of heroes) {
    const file = `${RESOURCE_DIRECTORY}${hero.resourceId}/Hero.jpg`

    const stat = fs.statSync(file)
    const dimensions = sizeOf(file)

    const media = `${ROOT_HTTP}${HERO_PATH}${hero.resourceId}/Hero.jpg`
    const mediaWidth = dimensions.width
    const mediaHeight = dimensions.height
    const mediaSize = stat.size
    const posterMedia = `${ROOT_HTTP}/blades_logo.png`
    const name = hero.name
    const description = `${name}, a level ${hero.level} human ${hero.charClass}.`
    const timeZone= 'America/Los_Angeles'
    const listingType = 'Auction'
    const supportedCurrencies = ['ETH']
    const attributes = _.pick(hero, ['str', 'dex', 'con', 'int', 'wis', 'cha'])
    attributes.DNA = '<Place holder>'
    attributes.HID = hero.id
    const data = { attributes }
    nfts.push({ data, listingType, supportedCurrencies, mediaWidth, mediaHeight, media, posterMedia, name, description, timeZone,skipPostProcessing: true })
  }
  const outFile = 'heroes-nfts.json'
  fs.writeFileSync(outFile, JSON.stringify(nfts))
  console.log("Nfts written to:", outFile)
}

nftCreator().then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
