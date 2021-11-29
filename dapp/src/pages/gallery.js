import Link from 'next/link'
import StatsDisplay from '../components/StatsDisplay'

function Gallery({characters}) {
  return <>
    <div className="container-fluid">
    <div className="row">
    {characters.map( c => 
        <div key={c.id} className="col-sm" >
	    {/*<a href={`/pub/heroes/${c.resourceId}`} style={{color:'black', textDecoration:'none'}}>*/}
	  <Link href={`/hero/${c.id}`}>
          <div className="container border rounded-1 m-1" style={{minWidth:300, maxWidth:350}}>
            <div className="row">
              <h3>{c.name}</h3>
              <h3>{c.charClass}</h3>
            </div>
            <div className="row" >
              <div className="col">
                <StatsDisplay character={c} />
              </div>
              <div className="col">
                <img style={{width:100 }} src={'/pub/heroes/' + c.resourceId + '/Hero.jpg'} />
              </div>
            </div>
          </div>
	  </Link>
          {/*</a>*/}
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
