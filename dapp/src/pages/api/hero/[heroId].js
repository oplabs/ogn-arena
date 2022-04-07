const {Hero} = require('common');
const { getSession } = require("next-auth/react");

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default async function handler(req, res) {
  const session = await getSession({req})
  const { heroId } = req.query

  if (!session) {
    res.status(401).json({error:"Login session required"})
    return
  }

  if(req.method == "POST") {
    const hero = await Hero.findByPk(heroId)

    if ('noMint' in req.body) {
      hero.noMint = req.body['noMint']
      await hero.save()
      res.json({ updated: true, noMint:hero.noMint })
      return
    }

    if ('name' in req.body) {
      const name = req.body['name']
      const parts = name.split(' ')

      if(parts.length != 2) {
        res.status(500).json({error:"Invalid name"})
        return
      }

      if (await Hero.findOne({where:{name}})){
        res.status(500).json({error:"Name already exists"})
        return
      }

      hero.firstName = capitalizeFirstLetter(parts[0])
      hero.lastName = capitalizeFirstLetter(parts[1])
      hero.name = hero.firstName + " " + hero.lastName
      await hero.save()
      res.json({ updated: true , name:hero.name })
      return
    }
    if ('rating' in req.body) {
      hero.rating = req.body['rating'] 
      await hero.save()
      res.json({ updated: true, rating:hero.rating })
      return
    }
    if ('badParts' in req.body) {
      hero.badParts = req.body['badParts'] 
      await hero.save()
      res.json({ updated: true })
      return
    }
  } 
  res.end(`Invalid call`)
}
