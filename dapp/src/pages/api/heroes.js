const {Hero} = require('common');

export default async function handler(req, res) {
  const heroes = await Hero.findAll({raw:true})
  res.status(200).json(heroes)
}
