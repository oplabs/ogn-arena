const defaultSkill = {
  mage:['flame_wall', 'shield', undefined, undefined],
  fighter: ['shield_bash', 'overhead_strike', undefined, undefined]
}

const skillInfo = {
  'flame_wall':{desc:"A wall of flame to melt some faces."},
  'shield':{desc:"A magical barrier against swords and arrows."},
  'shield_bash':{desc:"Smash your shield in their face."},
  'overhead_strike':{desc:"Bring down the thunder."}
}

module.exports = {defaultSkill, skillInfo}
