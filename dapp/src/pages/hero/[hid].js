import { useEffect, useState } from 'react'
import StatsDisplay from '../../components/StatsDisplay'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'
import { useRouter } from 'next/router'
const { defaultEq, eqInfo } = require('common/src/eq/equipment');
const { defaultSkill, skillInfo } = require('common/src/skill/skill');
import Unity, { UnityContext } from "react-unity-webgl";

const Hero = ({hero}) => {
  const router = useRouter()
  const [show3d, setShow3d] = useState(false)
  const [showDetails, setShowDetails] = useState(router.query.details == '1')
  const [is3dLoaded, setIs3dLoaded] = useState(false)
  const [unityContext, setUnityContext] = useState()
  const [progress, setProgress] = useState(0);
  //const buildUrl = '/3d/default/Build'
  const buildUrl = `/pub/heroes/${hero.resourceId}/Build`
  const heroImageUrl = '/pub/heroes/' + hero.resourceId + '/Hero.jpg'
  const heroHeadUrl = '/pub/heroes/' + hero.resourceId + '/Face.jpg'
  const charClass = hero.charClass.charAt(0).toUpperCase() + hero.charClass.slice(1)

  const doShowDetails = (show) => {
    if (show ) {
     router.replace(`/hero/${hero.id}?details=1`, undefined, { shallow: true })
    } else {
     router.replace(`/hero/${hero.id}`, undefined, { shallow: true })
    }
    setShowDetails(show)
  }

  const showSkill = (skillSlot) => {
    const skill = defaultSkill[hero.charClass][skillSlot-1]
    const info = skillInfo[skill]
    const skillImg = '/images/skills/' + skill + '.jpg'
    if (skill && info) {
      return <OverlayTrigger
        placement="auto"
        overlay = {
          <Tooltip id={"skill-" + skill} className="skillTooltip">
            <div style={{width:300, height:150}}>
              <img src={skillImg} className="float-start" style={{height:150}}/>
              <p>{info.desc}</p>
            </div>
          </Tooltip>
        }
        >
        <div style={{height:'100%'}}>
        <img src={skillImg} style={{height:'100%', position:'relative', zIndex:-10}}/>
        </div>
      </OverlayTrigger>
    } else {
      return <></>
    }


  }

  const showEq = (part) => {
    const eq = defaultEq[hero.charClass][part]
    const info = eqInfo[eq]
    const eqImg = '/images/eq_icons/' + eq + '.png'
    if (eq && info) {
      return <OverlayTrigger
        placement="auto"
        overlay = {
          <Tooltip id={"eq-" + eq} className="eqTooltip">
            <div style={{width:300, height:150}}>
              <img src={eqImg} className="float-start" style={{height:150}}/>
              {info.type == 'weapon' ? <>
              <p>{info.subType} {info.damageType}({info.damage[0]}-{info.damage[1] * info.damage[0]})</p>
              <p>{info.desc}</p>
              </> : <>
              <p>{info.subType} armor ({info.armor})</p>
              <p>{info.desc}</p>
              </>
              }
            </div>
          </Tooltip>
        }
        >
        <img src={eqImg} style={{height:'100%'}}/>
      </OverlayTrigger>
    } else {
      return <></>
    }
  }

  useEffect(()=> {
    if (typeof window !== "undefined")
    {
      const context = new UnityContext({
        loaderUrl: buildUrl + `/${hero.resourceId}.loader.js`,
        dataUrl: buildUrl + `/${hero.resourceId}.data.gz`,
        frameworkUrl: buildUrl + `/${hero.resourceId}.framework.js.gz`,
        codeUrl: buildUrl + `/${hero.resourceId}.wasm.gz`,
        companyName: "Origin Protocol Inc.",
        productName: "OgnArena",
        productVersion: "0.1",
      });
      setUnityContext(context);

      context.on("progress", function (progression) {
        setProgress(progression)
        if (progression == 1) {
          setIs3dLoaded(true);
          setShow3d(true);
        }
      });
      console.log("setting context");
      return function () {
        context.removeEventListener("progress");
      };
    }
  }, []);

  return <div>
    {showDetails && <div className="container" style={{padding:0}}>
      <div className="col-md-10 offset-md-1">
        <div className="container border rounded-1 m-1">
          <div className="float-end">
            <div>
              <img src={heroHeadUrl} onError={(e)=>{e.target.onerror = null; e.target.src=heroImageUrl}} style={{width:200}}/> 
            </div>
            <div className="text-center">
              <button type='button' className='btn btn-secondary' onClick={()=> doShowDetails(false)}>Character View</button>
            </div>
          </div>
          
          <div className="row">
            <h3>{hero.name}</h3> 
            <h3>{charClass} Level: {hero.level}</h3>
            <OverlayTrigger
              placement="auto"
              overlay = {
                  <Tooltip id={"exp"} className="expTooltip">
                  Gain experience by sending your hero to the arena, dungeon, or training area.
                  </Tooltip>
              }
            >
            <div style={{ border:'1px solid yellow', width:200, margin:5 }}>Experience: {hero.experience}</div>
            </OverlayTrigger>
          </div>
          <div className="row" style={{width:250, marginBottom:60}}>
            <div className="col-sm" >
              <StatsDisplay character={hero}/>
            </div>
          </div>
          <div className="row">
            <div className="col-auto">
            <div className="container" style={{width:400}}>
              <div>Equipment(New equipment coming soon!):</div>
              <div className="row">
                <div className="col" />
                <div className="col-auto">
                  <div className="eq-box" style={{height:60, width:70}}>{showEq('head')}</div>
                </div>
                <div className="col" />
              </div>
              <div className="row g-0">
                <div className="col">
                  <div className="eq-box float-end" style={{width:60, height:60}}>{showEq('rightHand')}</div>
                </div>
                <div className="col-auto">
                  <div className="eq-box" style={{height:80, width:110}}>{showEq('body')}</div>
                </div>
                <div className="col">
                  <div className="eq-box float-start" style={{height:60, width:60, marginLeft:10}}>{showEq('leftHand')}</div>
                </div>
              </div>
              <div className="row">
                  <div className="col" />
                  <div className="col-auto" >
                    <div className="eq-box" style={{height:80, width:100}}>{showEq('legs')}</div>
                  </div>
                  <div className="col" />
              </div>
              <div className="row">
                  <div className="col" />
                  <div className="col-auto" >
                    <div className="eq-box" style={{height:50, width:100}}>{showEq('feet')}</div>
                  </div>
                  <div className="col" />
              </div>
              <div className="row" style={{height:10}}/>
            </div>
          </div>
          <div className="col-auto"> 
            <div className="container" style={{width:300}}>
              <div>Skills(Active):</div>
              <div className="row g-0">
                <div className="col-auto">
                    <div className="skill-box">{showSkill(1)}</div>
                </div>
                <div className="col-auto">
                    <div className="skill-box">{showSkill(2)}</div>
                </div>
                <div className="col-auto">
                    <div className="skill-box">{showSkill(3)}</div>
                </div>
                <div className="col-auto">
                    <div className="skill-box">{showSkill(4)}</div>
                </div>
              </div>
              <div className="row" style={{height:10}}/>
            </div>
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
                      <h3>{charClass} Level: {hero.level}</h3>
                    </div>
                    <div className="row" >
                      <div className="col-sm">
                        <button type='button' className='btn btn-secondary' onClick={()=> doShowDetails(true)}>Character Details</button>
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
          <div style={{display:show3d ? 'none' : 'block', position:'relative'}}>
            <div onClick={() => router.back()} style={{width:100, position:'absolute', right:0, cursor:'pointer'}} >
              <img style={{width:'100%'}} src={'/favicons/270x270.png'} />
            </div>
            <img src={heroImageUrl}  style={{width:'100%'}}/>
          </div>
          </div>
       </div>
    </div>
    </div>}
    <div style={{position:'relative', maxWidth:960, width:'100%', maxHeight:800, height:'100vh', visibility:(show3d && !showDetails) ? '':'hidden'}} className="mx-auto">
      <div onClick={() => router.back()} style={{width:100, position:'absolute', right:0, cursor:'pointer'}} >
          <img style={{width:'100%'}} src={'/favicons/270x270.png'} />
      </div>
      {(progress < 1) && <div style={{position:'absolute', top:'50%', left:'35%', width:'200px'}}>loading...
        <div style={{position:'absolute', zIndex:-1, backgroundColor:'blue', width:Math.floor(progress*200), height:22, top:0}}></div>
      </div>}
      <div onClick={() => { unityContext.setFullscreen(true); } } style={{position:'absolute', bottom:0, right:0, margin:5, cursor:'pointer', fontSize:16}}>Full Screen <i className="bi bi-fullscreen" style={{fontSize:18, color:'white'}}></i></div>
      {unityContext && <Unity unityContext={unityContext} style={{ width:'100%', height: '100%' }} />}
    </div>
      <style jsx>{`
        .skill-box {
          box-shadow:inset 4px 2px 8px 2px rgba(0, 0, 0);
          margin:4px;
          width:50px;
          height:50px;
        }
        .eq-box {
          box-shadow:inset 4px 2px 8px 2px rgba(0, 0, 0);
          margin:2px;
          text-align:center;
        }
      `}</style>
      <style global jsx>{`
        .skillTooltip .tooltip-inner {
          background-color: grey !important;
          max-width:100%;
          max-height:100%;
        }
        .skillTooltip.bs-tooltip-auto[data-popper-placement^=right] > .tooltip-arrow:before {
          border-right-color: grey !important;
        }
        .skillTooltip.bs-tooltip-auto[data-popper-placement^=left] > .tooltip-arrow:before {
          border-left-color: grey !important;
        }
        .skillTooltip.bs-tooltip-auto[data-popper-placement^=bottom] > .tooltip-arrow:before {
          border-bottom-color: grey !important;
        }
        .skillTooltip.bs-tooltip-auto[data-popper-placement^=top] > .tooltip-arrow:before {
          border-top-color: grey !important;
        }
        .eqTooltip .tooltip-inner {
          background-color: grey !important;
          max-width:100%;
          max-height:100%;
        }
        .eqTooltip.bs-tooltip-auto[data-popper-placement^=right] > .tooltip-arrow:before {
          border-right-color: grey !important;
        }
        .eqTooltip.bs-tooltip-auto[data-popper-placement^=left] > .tooltip-arrow:before {
          border-left-color: grey !important;
        }
        .eqTooltip.bs-tooltip-auto[data-popper-placement^=bottom] > .tooltip-arrow:before {
          border-bottom-color: grey !important;
        }
        .eqTooltip.bs-tooltip-auto[data-popper-placement^=top] > .tooltip-arrow:before {
          border-top-color: grey !important;
        }
        .tooltip.show {
          opacity:1.0;
         }
      `}</style>
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
