const {Hero} = require('common')
const path = require('path')
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
const MAGE_PRIORTY = ['int'];

function reserveStats(rolls, priority, attrs) {
  for(const p of priority) {
    let maxIndex = rolls.indexOf(Math.max(...rolls));
    attrs[p] = rolls[maxIndex];
    //take out the max
    rolls.splice(maxIndex, 1);
  }
}

function readCCAttrs(path) {
  const content = fs.readFileSync(path, "utf8")
  if (content) {
    const data = {}
    for (const kv of content.split(/\r?\n/)) {
      const [k, v] = kv.split(':')
      if(!data[k]) {
        data[k] = v
      } else {
        const k_head = k + "_head"
        if (data[k_head]){
          console.log("REPEAT of " + k_head)
        }
        data[k + "_head"] = v
      }
    }
    return data
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

function assignMageAttrs(rolls) {
  const attrs = {}
  // pick strength first
  reserveStats(rolls, MAGE_PRIORTY, attrs);
  
  for (const a of ATTRS) {
    if (!MAGE_PRIORTY.includes(a)) {
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
    if (["index.html","TemplateData"].includes(d)) {
 	continue;
    } else if (d) {
      const id = d;
      console.log('Summoning...', id);

      const attrsFile = path.join(resourceDir, d, "attrs.txt");

      const existing = await Hero.findOne({where:{resourceId:id}})
      if(existing)
      {
        if (!existing.ccAttrs) {
          const ccAttrs = readCCAttrs(attrsFile)
          if (ccAttrs) {
            existing.ccAttrs = ccAttrs;
            await existing.save();
          }
        }
        console.log("found..");
        //already generated
        continue;
      }
      console.log("not found..");
      const parts = id.split("_");
      const gender = parts[0].toLowerCase();
      const charClass = parts[1].toLowerCase();

      rolls = [];
      for(let i = 0; i < 6; i++) {
        rolls.push(roll(3, 6));
      }
      const total = rolls.reduce( (a, acc) => a+ acc)
      const attrs = charClass == "mage" ? assignMageAttrs(rolls) : assignFighterAttrs(rolls);

      let data
      do {
        data = fcg.Names.generate({race:'human', gender}); // can set gender
      } while(await Hero.findOne({where:{name:data.name}}))

      const ccAttrs = readCCAttrs(attrsFile)
      const character = data.formattedData;
      character.attrs = attrs;
      console.log("Character: ", character);
      console.log("totalAttrs:", total)
      const {name,firstName, lastName, race} = character;
      await Hero.create({charClass, ccAttrs, name, firstName, lastName, gender, race, resourceId:id, ...attrs});
    }
  }

}

summon().then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
