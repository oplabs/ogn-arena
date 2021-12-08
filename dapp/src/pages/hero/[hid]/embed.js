import { useEffect, useState } from 'react'
import Unity, { UnityContext } from "react-unity-webgl";


const Embed = ({hero}) => {
  const buildUrl = `/pub/heroes/${hero.resourceId}/Build`
  const [unityContext, setUnityContext] = useState()
  const [progress, setProgress] = useState(0);

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
        console.log("setting progress at:", progression);
      });
      console.log("setting context");
      return function () {
        context.removeEventListener("progress");
      };
    }
  }, []);

  return <div>
    <div style={{position:'relative', maxWidth:960, width:'100%', maxHeight:600, height:'100vh'}} className="mx-auto">
      <div className="container border rounded-1 m-1" style={{width:'fit-content', minWidth:300, position:'absolute', zIndex:10}}>
        <div className="row">
          <h3>{hero.name}</h3>
          <h3>{hero.charClass}</h3>
        </div>
      </div>
      {(progress < 1) && <div style={{position:'absolute', top:'50%', left:'35%', width:'200px'}}>loading...
        <div style={{position:'absolute', zIndex:-1, backgroundColor:'blue', width:Math.floor(progress*200), height:22, top:0}}></div>
      </div> }
      {unityContext && <Unity unityContext={unityContext} style={{ width:'100%', height: '100%' }} />}
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


export default Embed
