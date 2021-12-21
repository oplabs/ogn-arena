const {Hero} = require('common')
const path = require('path')

const sort = async () => {
  const classLists = {}

  let total = 0
  for(const hero of await Hero.findAll({order:[['id', 'DESC']]})) {
    const {charClass, gender } = hero
    const key = `${charClass}-${gender}`
    if (key in classLists) {
      classLists[key].push(hero)
    } else {
      classLists[key] = [hero]
    }
    total += 1
  }

  // calculate probabilities
  let totalProbs = 0
  const classProbs = []
  for (const [key, hs]  of Object.entries(classLists)) {
    //assumes order is stable
    totalProbs += Math.max(hs.length / total, 0.1)
    classProbs.push([key, totalProbs])
  }

  console.log("probs is:", classProbs)
  console.log("total is:", totalProbs)

  for (let i = 0; i < total; i++) {
     const o = total - i
     let heroSet = false
     while(!heroSet){
       const p = Math.random() * totalProbs
       for ( const [key, prob] of classProbs) {
        if (prob > p) {
          if (classLists[key].length > 0){
            const hero = classLists[key].shift()
            hero.sortOrder = o
            await hero.save()
            heroSet = true
            break;
          }
        }
       }
    }
  }
}

sort().then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
