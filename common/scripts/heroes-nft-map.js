const {Hero, Sequelize} = require('common')


const nftMap = async () => {
  const mapping_file = process.argv[2];

  console.log(`Mapping ${mapping_file} NFTs...`)

  const mapping = require(mapping_file)
  
  for (const [dna, tokenId] of Object.entries(mapping)) {
      const hero = await Hero.findOne({where:{dna}})

      if (hero === null) {
	console.log(`Dna ${dna} not found`);
      } else {
	hero.tokenId = tokenId
	await hero.save()
      }
  }
}

nftMap().then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
