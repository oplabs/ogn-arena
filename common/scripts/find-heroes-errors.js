const {Hero} = require('common')
const path = require('path')
const fs = require('fs')


const resourceDir = process.env.RESOURCE_DIRECTORY
const doFix = true

const findErrors = async () => {
  const classLists = {}

  for(const hero of await Hero.findAll({order:[['id', 'DESC']]})) {
    if(hero.ccAttrs && 'Error' in hero.ccAttrs) {
      if(doFix && !hero.noMint){
	      hero.noMint = true
	      await hero.save()
      }
      console.log(`hero[${hero.id}] has Error: ${hero.ccAttrs['Error']} mint: ${!hero.noMint}`)
    }
  }
}

findErrors().then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
