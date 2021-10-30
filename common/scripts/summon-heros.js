const {Hero} = require('common')
const fs = require('fs')
const fcg = require('fantasy-content-generator')

function roll(numDice, sides) {
  let a = 0;
  for (let i =0; i< numDice; i++ ) {
    a += Math.ceil(Math.random() * sides)
  }
  return a;
}

const ATTRS = ['str', 'dex', 'con', 'int', 'wis', 'cha'];

const FIGHTER_PRIORTY = ['str', 'con', 'dex'];

function reserveStats(rolls, priority, attrs) {
  for(const p of priority) {
    let maxIndex = rolls.indexOf(Math.max(...rolls));
    attrs[p] = rolls[maxIndex];
    //take out the max
    rolls.splice(maxIndex, 1);
  }
}

function assignFighterAttrs(rolls) {
  const attrs = {}
  // pick strength first
  reserveStats(rolls, FIGHTER_PRIORTY, attrs);
  
  for (const a of ATTRS) {
    if (!FIGHTER_PRIORTY.includes(a)) {
      attrs[a] = rolls.shift();
    }
  }

  return attrs;
}

const summon = async () => {
  const resourceDir = process.env.RESOURCE_DIRECTORY

  console.log("Summoning heros from...", resourceDir)

  const dirs = await fs.readdirSync(resourceDir);

  for(const d of dirs) {
    if (d.endsWith('.jpg')) {
      const id = d.slice(0, -4);
      console.log('Summoning...', id);

      if(await Hero.findOne({where:{resourceId:id}}))
      {
        console.log("found..");
        //already generated
        continue;
      }
      console.log("not found..");

      rolls = [];
      for(let i = 0; i < 6; i++) {
        rolls.push(roll(3, 6));
      }
      const total = rolls.reduce( (a, acc) => a+ acc)
      attrs = assignFighterAttrs(rolls);
      //console.log('attrs: ', attrs);
      
      let data
      do {
        data = fcg.Names.generate({race:'human'}); // can set gender
      } while(await Hero.findOne({where:{name:data.name}}))

      const character = data.formattedData;
      character.attrs = attrs;
      console.log("Character: ", character);
      console.log("totalAttrs:", total)
      const {name,firstName, lastName, gender,race} = character;
      await Hero.create({name, firstName, lastName, gender, race, resourceId:id, ...attrs});
    }
  }

}

summon().then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })