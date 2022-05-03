import Hero from '../../components/Hero'

// This gets called on every request
export async function getServerSideProps(context) {
  const { tokenId } = context.query;
  const { Hero } = require('common');

  //
  const hero = JSON.parse(JSON.stringify(await Hero.findOne({where:{tokenId}, raw:true})));

  // Pass data to the page via props
  return { props:{ hero } } 
}

export default Hero
