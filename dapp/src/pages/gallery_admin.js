import ReactStars from "react-rating-stars-component";
import { useEffect, useState } from 'react'
const { partGroups } = require('common/src/cc/parts_mapping');

function AttrDisplay({name, attr}) {
    return <div className="row"><div className="col-3">{name}:</div><div className="col-9" style={{position:'relative'}}>{attr}
      <div style={{position:'absolute', zIndex:-1, backgroundColor:'red', width:Math.floor((attr/18.0)*100), height:22, top:0}}></div></div></div>

}

function isPartBad(part, badParts) {
  if (badParts) {
    for (const badPart of badParts) {
      if (badParts.includes('+')) {
        const subBadParts = badPart.split('+')
        for (const subBadPart of subBadParts) {
          const checkPart = (subBadPart == "head" && part.endsWith("_head")) ? part.slice(0, -5) : part
          if(partGroups[subBadPart].includes(checkPart)){
            return true;
          }
        }
      } else {
        if (badPart == "head" && (part.endsWith(" Female") || part.endsWith(" Male")))
        {
          continue;
        }
        const checkPart = (badPart == "head" && part.endsWith("_head")) ? part.slice(0, -5) : part
        if(partGroups[badPart].includes(checkPart)) {
          return true;
        }
      }
    }
  }
}

function PartButton({part, badParts, onMouseEnter, onClick, onMouseLeave}) {
  return <button type={'button'} className={"btn " + ((badParts && badParts.includes(part)) ? "btn-primary" : "btn-outline-primary")}
      onMouseEnter={onMouseEnter} onClick={onClick} onMouseLeave={onMouseLeave} style={{margin:5}}>{part}</button>

}

function CCAttrs({ character }) {
    const c = character
    const [badParts, setBadParts] = useState(character.badParts)

    const togglePart = (part) => {
      const parts = badParts || []
      const index = parts.indexOf(part)
      if (index > -1) {
        parts.splice(index)
      } else {
        parts.push(part)
      }
      setBadParts(parts)
      console.log("parts:", parts)
    }
  
    const setBadPart = async (part) => {
      const parts = character.badParts || []
      const index = parts.indexOf(part)
      if (index > -1) {
        parts.splice(index)
      } else {
        parts.push(part)
      }

      //set it in the db
      const result = await fetch(`/api/hero/${character.id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({badParts:parts}),
      })

      console.log("set bad parts result", result)

      character.badParts = parts
      setBadParts(parts)
    }

    const unToggle = () => {
      setBadParts(character.badParts)
    }

    return <div style={{height:600}}>
        <div>Bad:</div>
        <PartButton part={'nose'} badParts={badParts} onMouseEnter={()=>togglePart('nose')} onClick={()=>setBadPart('nose')} onMouseLeave={()=>unToggle()} />
        <PartButton part={'head'} badParts={badParts} onMouseEnter={()=>togglePart('head')} onClick={()=>setBadPart('head')} onMouseLeave={()=>unToggle()} />
        <PartButton part={'body'} badParts={badParts} onMouseEnter={()=>togglePart('body')} onClick={()=>setBadPart('body')} onMouseLeave={()=>unToggle()} />
        <div style={{height:500, overflow:'auto'}}>
        {c.ccAttrs && Object.entries(c.ccAttrs).map(([key, value], index) =>
          <div key={index} style={{backgroundColor:isPartBad(key, badParts) ? 'lightblue': ''}} >
          {key} : {value}
          </div>
          )}
        </div>
    </div>
}

const ratingChanged = async (heroId, rating) => {
  const result = await fetch(`/api/hero/${heroId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({rating}),
  })
  console.log("Rating set result is:", result)
}

function Gallery({characters}) {
  return <>
    <div className="container-fluid">
    <div className="row">
    {characters.map( c => 
        <div key={c.id} className="col-sm" >
          <div className="container border rounded-1 m-1" style={{width:900}}>
            <div className="row">
              <h3>{c.name}</h3>
              <h3>{c.charClass}</h3>
            </div>
            <div className="row" >
              <div className="col">
                <AttrDisplay name='Str' attr={c.str} />
                <AttrDisplay name='Dex' attr={c.dex} />
                <AttrDisplay name='Con' attr={c.con} />
                <AttrDisplay name='Int' attr={c.int} />
                <AttrDisplay name='Wis' attr={c.wis} />
                <AttrDisplay name='Cha' attr={c.cha} />
                <ReactStars count={5} onChange={(newRating) => ratingChanged(c.id, newRating)} size={24} value={c.rating} />
                <CCAttrs character={c} />
              </div>
              <div className="col">
                <a href={`/pub/heroes/${c.resourceId}`} style={{color:'black', textDecoration:'none'}} target="_">
                <img style={{width:600 }} src={'/pub/heroes/' + c.resourceId + '/Hero.jpg'} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
    </div>
    </>
}


// This gets called on every request
export async function getServerSideProps() {
  const { Hero } = require('common');
  // Fetch data from external API
  //
  const characters = JSON.parse(JSON.stringify(await Hero.findAll({order:[['id', 'DESC']]}, {raw:true})));

  // Pass data to the page via props
  return { props: { characters } }
}

export default Gallery
