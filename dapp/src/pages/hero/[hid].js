import { useEffect, useState } from 'react'


function AttrDisplay({name, attr}) {
    return <div className="row"><div className="col-3">{name}:</div><div className="col-9" style={{position:'relative'}}>{attr}
      <div style={{position:'absolute', zIndex:-1, backgroundColor:'red', width:Math.floor((attr/18.0)*100), height:22, top:0}}></div></div></div>

}

const Hero = ({hero}) => {
  const [show3d, setShow3d] = useState(false)
  const [is3dLoaded, setIs3dLoaded] = useState(false)
  //const buildUrl = '/3d/default/Build'
  const remoteUrl = `/pub/heroes/?h=${hero.resourceId}`

  useEffect(()=> {
    if (typeof window !== "undefined") {
      window.unityLoadComplete = () => {
        setIs3dLoaded(true);
        setShow3d(true);
      }
    }
  }, [])

  return <div>
    <div style={{position:'absolute', width:'100%', zIndex:10, visibility:'true'}}>
       <div className="row">
          <div className="col-md-8 offset-md-2">
              <div style={{ position:'absolute', zIndex:20, color:'white'}}>
                 <div className="row">
                  <div className="col">
                  <div className="container border rounded-1 m-1" style={{width:250}}>
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
                  </div>
                <div className="col">
                  <button type='button' className='btn btn-outline-danger' onClick={()=> setShow3d(!show3d)} >{show3d ? "Show Portrait":"Show 3d"}</button>
                </div>
                </div>
              </div>
             <div>
            <img src={'/pub/heroes/' + hero.resourceId + '/Hero.jpg'}  style={{display:show3d ? 'none' : 'block'}}/>
          </div>
       </div>
    </div>
      <iframe src={remoteUrl} width={'100%'} height={'100%'} allowFullScreen={true} style={{height:642, visibility:show3d ? '':'hidden'}} />
    </div>
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
