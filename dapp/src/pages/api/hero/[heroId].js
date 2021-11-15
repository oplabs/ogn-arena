const {Hero} = require('common');

export default async function handler(req, res) {
  const { heroId } = req.query

  if(req.method == "POST") {
    const hero = await Hero.findByPk(heroId)
    if ('rating' in req.body) {
      hero.rating = req.body['rating'] 
      await hero.save()
      res.json({ updated: true })
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
