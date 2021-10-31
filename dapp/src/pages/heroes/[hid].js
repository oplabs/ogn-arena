import { useEffect, useState } from 'react'


function AttrDisplay({name, attr}) {
    return <div className="row"><div className="col-3">{name}:</div><div className="col-9" style={{position:'relative'}}>{attr}
      <div style={{position:'absolute', zIndex:-1, backgroundColor:'red', width:Math.floor((attr/18.0)*100), height:22, top:0}}></div></div></div>

}

const Hero = ({hero}) => {
  //const buildUrl = '/3d/default/Build'
  const remoteUrl = 'http://localhost:8080'

  return <div>
      <div className="container border rounded-1 m-1" style={{minWidth:300, position:'absolute', zIndex:10}}>
        <div className="row">
          <h3>{hero.name}</h3>
          <h3>{hero.charClass}</h3>
        </div>
        <div className="row" >
          <div className="col-sm">
            <AttrDisplay name='Str' attr={hero.str} />
            <AttrDisplay name='Dex' attr={hero.dex} />
            <AttrDisplay name='Con' attr={hero.con} />
            <AttrDisplay name='Int' attr={hero.int} />
            <AttrDisplay name='Wis' attr={hero.wis} />
            <AttrDisplay name='Cha' attr={hero.cha} />
          </div>
        </div>
      </div>
    <iframe src={remoteUrl} heigth={'100%'} width={'100%'} allowfullscreen={true} style={{height:800}} />
  </div>
}

// This gets called on every request
export async function getServerSideProps(context) {
  console.log(context.query)
  const { hid } = context.query;
  const { Hero } = require('common');

  //
  const hero = JSON.parse(JSON.stringify(await Hero.findByPk(hid,{raw:true})));

  // Pass data to the page via props
  return { props:{ hero } } 
}


export default Hero
