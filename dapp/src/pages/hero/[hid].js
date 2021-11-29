import { useEffect, useState } from 'react'
import StatsDisplay from '../../components/StatsDisplay'


const Hero = ({hero}) => {
  const [show3d, setShow3d] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
  const [is3dLoaded, setIs3dLoaded] = useState(false)
  //const buildUrl = '/3d/default/Build'
  const remoteUrl = `/pub/heroes/?h=${hero.resourceId}`
  const heroImageUrl = '/pub/heroes/' + hero.resourceId + '/Hero.jpg'
  const heroHeadUrl = '/pub/heroes/' + hero.resourceId + '/Face.jpg'

  useEffect(()=> {
    if (typeof window !== "undefined") {
      window.unityLoadComplete = () => {
        setIs3dLoaded(true);
        setShow3d(true);
      }
    }
  }, [])

  return <div>
    {showDetails && <div className="container" style={{padding:0}}>
      <div className="col-md-10 offset-md-1">
        <div className="container border rounded-1 m-1">
          <div className="float-end" role="button" onClick={()=> setShowDetails(false)} >
            X
          </div>
          <div>
          <img src={heroHeadUrl} onError={(e)=>{e.target.onerror = null; e.target.src=heroImageUrl}} className="float-end" style={{width:200}}/>
          </div>
          <div className="row">
            <h3>{hero.name}</h3> 
            <h3>{hero.charClass}</h3>
            <h3>Level: {hero.level}</h3>
            <div style={{ borderStyle: 'solid', border:1, borderColor:'white', width:300 }}>Experience: {hero.experience}</div>

          </div>
          <div className="row" style={{width:300}}>
            <div className="col-sm" >
              <StatsDisplay character={hero}/>
            </div>
          </div>
    </div>
    </div>
    </div>}
    {!showDetails && <div style={{position:'absolute', width:'100%', zIndex:10, visibility:'true'}}>
       <div className="container" style={{padding:0}}>
          <div className="col-md-8 offset-md-2">
              <div style={{ position:'absolute', zIndex:20, color:'white'}}>
                 <div className="row">
                  <div className="col">
                  <div className="container border rounded-1 m-1" style={{width:250}}>
                    <div className="row">
                      <h3>{hero.name}</h3> 
                      <h3>{hero.charClass}</h3>
                      <h3>Level: {hero.level}</h3>
                    </div>
                    <div className="row" >
                      <div className="col-sm">
                        <StatsDisplay character={hero}/>
                      </div>
                    </div>
                    <div className="row" >
                      <div className="col-sm">
                        <button type='button' className='btn btn-secondary' onClick={()=> setShowDetails(true)}>Character Loadout</button>
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
            <img src={heroImageUrl}  style={{display:show3d ? 'none' : 'block', width:'100%'}}/>
          </div>
       </div>
    </div>
    </div>}
    <iframe src={remoteUrl} width={'100%'} height={'100%'} allowFullScreen={true} style={{height:642, visibility:(show3d && !showDetails) ? '':'hidden'}} />
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
