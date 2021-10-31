
function AttrDisplay({name, attr}) {
    return <div className="row"><div className="col-3">{name}:</div><div className="col-9" style={{position:'relative'}}>{attr}
      <div style={{position:'absolute', zIndex:-1, backgroundColor:'red', width:Math.floor((attr/18.0)*100), height:22, top:0}}></div></div></div>

}


function Gallery({characters}) {
  return <>
    <div className="container-fluid">
    <div className="row">
    {characters.map( c => 
        <div key={c.id} className="col-sm" >
          <div className="container border rounded-1 m-1" style={{minWidth:300}}>
            <div className="row">
              <h3>{c.name}</h3>
              <h3>{c.charClass}</h3>
            </div>
            <div className="row" >
              <div className="col-sm">
                <AttrDisplay name='Str' attr={c.str} />
                <AttrDisplay name='Dex' attr={c.dex} />
                <AttrDisplay name='Con' attr={c.con} />
                <AttrDisplay name='Int' attr={c.int} />
                <AttrDisplay name='Wis' attr={c.wis} />
                <AttrDisplay name='Cha' attr={c.cha} />
              </div>
              <div className="col-sm">
                <img style={{width:100 }} src={'/resource/' + c.resourceId + '.jpg'} />
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
  const characters = JSON.parse(JSON.stringify(await Hero.findAll({raw:true})));

  // Pass data to the page via props
  return { props: { characters } }
}

export default Gallery
