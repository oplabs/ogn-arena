import Link from 'next/link'
import {Form} from 'react-bootstrap'
import StatsDisplay from '../components/StatsDisplay'
import OAPagination from '../components/OAPagination'
import { useRouter } from 'next/router'
import { useState } from 'react'

const PAGE_SIZE = 12

function Gallery({characters, totalPages, currentPage}) {
  const router = useRouter()
  const query = router.query
  const [search, setSearch] = useState(query.s)
  const handleSearch = (e) => {
    e.preventDefault()
    if (search != query.s) {
      delete query.p
    }
    if (!search && query.s) {
      delete query.s
    } else if (search) {
      query.s = search
    }
    router.push({query})
  }
  return <>
    <div className="container-fluid">
    <div className="row m-2">
      <Link href="/">
        <img style={{width:100 }} src={'/favicons/270x270.png'} className="float-start" />
      </Link>
      <div className="col-6 mt-3 p-0" >
      <Form onSubmit={handleSearch}>
        <Form.Control type="text" name="search" value={search} onChange={e => setSearch(e.target.value)} placeholder="Search..." />
      </Form>
      </div>
    </div>
    {!characters.length && <div className="row m-5">There are no results for this search query</div>}
    <div className="row">
    {characters.map( c => 
        <div key={c.id} className="col-sm" >
        <Link href={`/hero/${c.id}`}>
          <div className="container border rounded-1 m-1" style={{minWidth:300, maxWidth:350}}>
            <div className="row">
              <h3>{c.name}</h3>
              <h3>{c.charClass.charAt(0).toUpperCase() + c.charClass.slice(1)} <span style={{paddingLeft:10}}>Level: {c.level}</span></h3>
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
        </div>
      )}
    </div>
    <div className="row">
      <div className="col"></div>
      <div className="col-6">
        <OAPagination currentPage={currentPage} totalPages={totalPages} 
          loadPage={ (p) => { query.p = p; router.push({query})}}  />
      </div>
      <div className="col"></div>
    </div>
    </div>
    </>
}


// This gets called on every request
export async function getServerSideProps({ query }) {
  const { Hero, Sequelize } = require('common');
  const { p, s} = query
  // Fetch data from external API
  //
  const findClause = { limit:PAGE_SIZE, order:[['sort_order', 'DESC']] }
  const currentPage = (p > 1) ? Number(p) : 1

  findClause.offset = (currentPage - 1) * PAGE_SIZE

  if (s) {
    const search = s.replace(' ', '%')
    findClause.where = {name: {[Sequelize.Op.iLike]:`%${search}%`}}
  }
  console.log('find clause is:', findClause)
  
  const result = JSON.parse(JSON.stringify(await Hero.findAndCountAll(findClause, {raw:true})));
  const characters = result.rows
  const totalPages = Math.ceil(result.count/PAGE_SIZE)

  // Pass data to the page via props
  return { props: { characters, totalPages, currentPage } }
}

export default Gallery
