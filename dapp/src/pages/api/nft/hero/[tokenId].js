const {Hero} = require('common');

const ROOT_HTTP = `https://bladesofvalor.com`
const HERO_RESOURCE_PATH = `/pub/heroes/`
const HERO_TOKEN_PATH = `/heroNFT/`

export default async function handler(req, res) {
  const { tokenId } = req.query

  const hero = await Hero.findOne({ where: {tokenId} })

  if (hero == null) {
    res.status(404).json({error:"Cannot find the requested token"})
  } else {
    //default to secure
    const root_proto = req.headers["x-forwarded-proto"] ? req.headers["x-forwarded-proto"] : 'https'
    const root_http = `${root_proto}://${req.headers.host}`
    const image = `${root_http}${HERO_RESOURCE_PATH}${hero.resourceId}/Hero.jpg`
    const external_url = `${root_http}${HERO_TOKEN_PATH}${hero.tokenId}`
    const animation_url = `${root_http}/hero/${hero.id}/embed`
    const name = hero.name
    const description = `${name}, a level ${hero.level} human ${hero.charClass}.`
    const attributes = []

    attributes.push({trait_type:'Strength', value:hero.str})
    attributes.push({trait_type:'Dexterity', value:hero.dex})
    attributes.push({trait_type:'Constitution', value:hero.con})
    attributes.push({trait_type:'Intelligence', value:hero.int})
    attributes.push({trait_type:'Wisdom', value:hero.wis})
    attributes.push({trait_type:'Charisma', value:hero.cha})

    attributes.push({trait_type:'DNA', value:hero.dna})

    res.json({name, description, image, external_url, animation_url, attributes })
  }
}
