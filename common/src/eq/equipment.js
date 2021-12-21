const defaultEq = {
  mage:
    {
      body:'mage-robe',
      legs:'mage-pants',
      feet:'mage-boots',
      rightHand:'mage-staff'
    },
  fighter: {
      body:'leather-armor',
      legs:'canvas-pants',
      feet:'boots',
      rightHand:'rusty-sword',
      leftHand:'worn-buckler'
    },
  rogue: {
    body:'rogue-armor',
    legs:'pocket-pants',
    feet:'rogue-boots',
    rightHand:'dagger'
  },
  cleric: {
    body:'cleric-armor',
    legs:'cleric-pants',
    feet:'cleric-boots',
    rightHand:'mace',
    leftHand:'v-holy-symbol'

  }
}

const eqInfo = {
  'mage-robe':{desc:"Standard robe for magic users. Offer minimal protection with minimal interference.",
  armor:3,
  type:'armor',
  subType:'light'
  },
  'mage-pants':{desc:"Nice baggy pants for the magic inclined.",
    armor:1,
    type:'armor',
    subType:'light'
  },
  'mage-boots':{desc:"Fancy boots to help you get away quickly.",
    armor:1,
    movement:10,
    type:'armor',
    subType:'light'},
  'mage-staff':{desc:"Standard issued staff. The elements will be at your beck and call.",
      damage:[1, 6],
      damageType:'bludgeon',
      type:'weapon',
      subType:'staff'
    },
  'leather-armor':{desc:"Leather jacket given to all incoming fighters. Might deflect a glancing blow.",
      armor:5,
      type:'armor',
      subType:'medium'},
  'canvas-pants':{desc:"Simple canvas pants. Keeps the heat out.",
      armor:1,
      type:'armor',
      subType:'light'},
  'boots':{desc:"Sturdy leather boots. Keeps mud off your feet.",
      armor:1,
      type:'armor',
      subType:'light'},
  'rusty-sword':{desc:'Standard issued sword. A bit rusty, but that might be a good thing.',
      damage:[1, 8],
      damageType:'slash',
      type:'weapon',
      subType:'sword'
  },
  'worn-buckler':{desc:'A worn buckler. Can take one more hit.',
      armor:2,
      type:'armor',
      subType:'shield'},
  'cleric-armor':{desc:'Standard issue worn chainmail and robe for the clergy.',
      armor:6,
      type:'armor',
      subType:'medium'
  },
  'cleric-pants': {desc:'Heavy cloth pants',
      armor:1,
      type:'armor',
      subType:'light'
    },
  'cleric-boots': {desc:'Plated boots to protect the shins',
      armor:2,
      type:'armor',
      subType:'medium'
  },
  'v-holy-symbol':{desc:'The holy symbol of Valoria.',
      type:'accessory',
      subType:'holy'
  },
  'mace':{desc:'A blunt instrument of the clergy.',
    type:'weapon',
    damage:[1, 6],
    damageType:'blunt',
    subType:'mace'
  },
  'rogue-armor':{desc:'A nicely patched up piece of leather banded mail.',
    type:'armor',
    subType:'light',
    armor:4},
  'pocket-pants':{ desc:'Pants with pockets for holding many nasty surprises.',
    type:'armor',
    subType:'light',
    armor:1},
  'rogue-boots':{ desc:'Supple leather boots with a soft step.',
    type:'armor',
    subType:'light',
    armor:1},
  'dagger': { desc:'A small stabby thing.',
    type:'weapon',
    damage:[1, 4],
    damageType:'pierce',
    subType:'dagger'}
}

module.exports = {defaultEq, eqInfo}
