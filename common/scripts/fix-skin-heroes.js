const {Hero} = require('common')
const path = require('path')
const fs = require('fs')

// the skin is basically one off so the mapping is:
//   "Clean" => "Default"
//   "Khulan" => "Clean"
//   "" => "Khulan"
const FixSkinMapping = {
  'Clean':'Default',
  'Khulan':'Clean',
  '':'Khulan'
  }



const resourceDir = process.env.RESOURCE_DIRECTORY

const sort = async () => {
  const classLists = {}

  for(const hero of await Hero.findAll({order:[['id', 'DESC']]})) {
    if(hero.ccAttrs && 'Skin' in hero.ccAttrs) {
      const oldSkin  = hero.ccAttrs['Skin'].trim()
      const oldSkinString = `Skin: ${oldSkin}`
      const newSkin = FixSkinMapping[oldSkin]
      const newSkinString = `Skin: ${newSkin}`
      console.log('oldSkin Type:', oldSkin, oldSkin == 'Clean')

      // trim everyone!
      const newAttrs = {}
      for (const [k, v] of Object.entries(hero.ccAttrs)){
        if (k != 'Skin') {
          newAttrs[k] = v.trim()
        } else {
          newAttrs['Skin'] = newSkin
        }
      }
      hero.ccAttrs = newAttrs
      console.log("Remapping skin from: ", oldSkin, " to ",  newSkin)

      const file = path.join(resourceDir, hero.resourceId, 'attrs.txt')
      const content = fs.readFileSync(file, "utf8")
      if (content.indexOf(oldSkinString) > -1) {
        const result = content.replace(oldSkinString, newSkinString)
        fs.writeFileSync(file, result, 'utf8')
      }
      //save to the object
      await hero.save()
    }
  }
}

sort().then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
