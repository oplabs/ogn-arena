const defaultSkill = {
  mage:['flame_wall', 'shield', undefined, undefined],
  fighter: ['shield_bash', 'overhead_strike', undefined, undefined],
  cleric:["bless", "healing_aura", undefined, undefined],
  rogue:["backstab", "sneak", undefined, undefined]
}

const skillInfo = {
  'flame_wall':{title:"Flame Wall", desc:"A wall of flame to melt some faces."},
  'shield':{title:"Shield", desc:"A magical barrier against swords and arrows."},
  'shield_bash':{title:"Shield Bash", desc:"Slam your shield in their face."},
  'overhead_strike':{title:"Overhead strike", desc:"Bring down the thunder."},
  'bless':{title:"Bless", desc:"Imbue you and your allies with the favor of you god."},
  'healing_aura':{title:"Healing Aura", desc:"The wounds of you and your nearest allies will slowly begin to heal."},
  'backstab':{title:'Backstab', desc:'Stab your mark from behind, doing extra damage.'},
  'sneak':{title:'Sneak', desc:'You move quietly, slipping in and out of any engagement.'}
}

module.exports = {defaultSkill, skillInfo}
