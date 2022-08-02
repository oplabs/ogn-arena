const {Hero} = require('common');

const ROOT_HTTP = `https://bladesofvalor.com`
const HERO_RESOURCE_PATH = `/pub/heroes/`
const HERO_TOKEN_PATH = `/heroNFT/`
const CONTRACT = {"name":"Blades of Valor Hero NFTs","description":"Blades of Valor is a P2E auto-battler built on the blockchain. Stake your hero, prepare for each fight, and earn as you gain experience. We’re building the next evolution of blockchain games for the community to build on.","external_link":"https://bov.story.xyz","seller_fee_basis_points":1000,"fee_recipient":"0x66709D7024e68FE92c116c1d5115b8492F34bC05","image":"https://73cb2316fa9a.story.xyz/73cb2316fa9a/assets/orig/스크린샷-2022-06-15-05-50-30.5b00636e.png"}

export default async function handler(req, res) {
  const { tokenId } = req.query

  if (tokenId == 'contract.json') {
     res.json(CONTRACT)
     return
  }

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
