function HomePage() {
  const eqCell = (eqItem) => {
      return <div className="eqCell">
        <img src={`/images/eq_icons/${eqItem}.png`} />
     </div>
  }
  const separatorBg = (imgName, overlayText) => {
        return <div className="SeparatorBg">
            <img src={`/images/web/separator/${imgName}.jpg`}
               srcSet={`/images/web/separator/${imgName}@2x.jpg 2x, /images/web/separator/${imgName}@3x.jpg 3x`}
               width='100%'/>
            <div className="SeparatorBgText">
            {overlayText}
            </div>
        </div>

  }
  return <div className="Full">
    <main className="landing-page">
    <div className="head-section">
      <div className="navbar-holder">
        <nav className="navbar navbar-expand-lg navbar-origin navbar-dark">
          <div className="container">
            <a className="navbar-brand" href="/">
              <div className="logo-container">
                <img src="/images/web/logo/logo.png"
                  srcSet="/images/web/logo/logo@2x.png 2x, /images/web/logo/logo@3x.png 3x"
                  className="bov-logo"
                  alt="Blades of Valor Logo" />
              </div>
            </a>
          </div>
          <span className="Home">Home</span>
          <span className="Marketplace">Marketplace</span>
        </nav>
      </div>
        <div className="contents d-flex flex-column justify-content-center align-items-center">
          <div className="large-logo">
            <img src="/images/web/large-logo/logo.png"
              srcSet="/images/web/large-logo/logo@2x.png 2x, /images/web/large-logo/logo@3x.png 3x"
               />
          </div>
          <div className="NFT-headline">
            <span className='bold'>Mint</span>, Level up, Gear up, <span className='bold'>Fight</span>
          </div>
          <div className="NFT-earn">
            Fight to earn with your hero NFT on the blockchain
          </div>
          <div className="NFT-start">
            Start with a <span className='bold'>Free</span> mint for the first generation of 2,000 hero NFTs
          </div>
          <div className="Mint-button">
            <span className="Mint-now">Mint Now</span>
          </div>
        <div className="Stake-your-hero-pre">
          <p>Stake your hero, prepare for each fight, and earn as you gain experience.</p>
          <p>Every fight is streamed live on Twitch with the same level of video quality shown in our trailer.</p>
          We’re building the next evolution of blockchain games for a global audience.
        </div>
      </div>
    </div>
      <div className="contents d-flex flex-column align-items-center blades-of-valor-site">
        <div className="video">
        </div>
        <div className="Character-Classes">
          Character Classes
        </div>
        <div className="CClass-container d-flex flex-wrap">
          <div className="CClass-info">
            <div className="CClass-title">
              Fighter
            </div>
            <div className="CClass-description">
            Champions of the blade and in meting out harsh rewards for those that would dare challenge them in the arena.  These warriors have trained in all manner of combat in order to defeat all manner of foe.
            </div>
          </div>
          <div className="CClass-images">
            <img src="/images/web/classes/fighter-1.jpg"
                 srcSet="/images/web/classes/fighter-1@2x.jpg 2x, /images/web/classes/fighter-1@3x.jpg 3x"
               className="CClass-Image1" />
            <img src="/images/web/classes/fighter-2.jpg"
                 srcSet="/images/web/classes/fighter-2@2x.jpg 2x, /images/web/classes/fighter-2@3x.jpg 3x"
               className="CClass-Image1" />
          </div>
        </div>
        <div className="CClass-container d-flex flex-wrap">
          <div className="CClass-images">
            <img src="/images/web/classes/rogue-1.jpg"
                 srcSet="/images/web/classes/rogue-1@2x.jpg 2x, /images/web/classes/rouge-1@3x.jpg 3x"
               className="CClass-Image1" />
            <img src="/images/web/classes/rogue-2.jpg"
                 srcSet="/images/web/classes/rogue-2@2x.jpg 2x, /images/web/classes/rouge-2@3x.jpg 3x"
               className="CClass-Image1" />
          </div>
          <div className="CClass-info">
            <div className="CClass-title">
             Rogue 
            </div>
            <div className="CClass-description">
            Like a whisper on the lips, the Rogue is a shadow in the minds of men.  The wise would be cautious not to forget their presence on the battlefield, unleashing crippling blows on those that do.
            </div>
          </div>
        </div>
        <div className="CClass-container d-flex flex-wrap">
          <div className="CClass-info">
            <div className="CClass-title">
              Mage
            </div>
            <div className="CClass-description">
The masters of forces both seen and unseen, mages weave the forces of nature into powerful manifestations in order to defeat their enemies.
            </div>
          </div>
          <div className="CClass-images">
            <img src="/images/web/classes/mage-1.jpg"
                 srcSet="/images/web/classes/mage-1@2x.jpg 2x, /images/web/classes/mage-1@3x.jpg 3x"
               className="CClass-Image1" />
            <img src="/images/web/classes/mage-2.jpg"
                 srcSet="/images/web/classes/mage-2@2x.jpg 2x, /images/web/classes/mage-2@3x.jpg 3x"
               className="CClass-Image1" />
          </div>
        </div>
        <div className="CClass-container d-flex flex-wrap">
          <div className="CClass-images">
            <img src="/images/web/classes/cleric-1.jpg"
                 srcSet="/images/web/classes/cleric-1@2x.jpg 2x, /images/web/classes/cleric-1@3x.jpg 3x"
               className="CClass-Image1" />
            <img src="/images/web/classes/cleric-2.jpg"
                 srcSet="/images/web/classes/cleric-2@2x.jpg 2x, /images/web/classes/cleric-2@3x.jpg 3x"
               className="CClass-Image1" />
          </div>
          <div className="CClass-info">
            <div className="CClass-title">
             Cleric 
            </div>
            <div className="CClass-description">
        A fierce dedication to their beliefs drives within them an extraordinary determination of force to be unleashed on those that would challenge them.  Their training is not in the blade but rather, the hearts of men.
            </div>
          </div>
        </div>
        <div style={{height:60}}/>
        {separatorBg('bg', 'Heroes become more valuable as they gain experience with every battle')}
        <div className="Equipment d-flex flex-column align-items-center">
          <span className="Equipment-title">Equipment</span>
          <span className="Equipment-description">Each hero can equip gear that can tip the balance of battle in their favor</span>
          <span className="Equipment-sub">Current default equipment(non-NFTs)</span>
          <div className="Equipment-default Container">
            <div className="row">
             {['leather-armor', 'cleric-armor', 'mage-robe', 'rogue-armor'].map( eq => <div key={eq} className="col-sm">
                {eqCell(eq)}
              </div>)}
            </div>
            <div className="row">
             {['canvas-pants', 'cleric-pants', 'mage-pants', 'pocket-pants'].map( eq => <div key={eq} className="col-sm">
                {eqCell(eq)}
              </div>)}
            </div>
            <div className="row">
             {['boots', 'cleric-boots', 'mage-boots', 'rogue-boots'].map( eq => <div key={eq} className="col-sm">
                {eqCell(eq)}
              </div>)}
            </div>
            <div className="row">
             {['rusty-sword', 'mace', 'mage-staff', 'dagger'].map( eq => <div key={eq} className="col-sm">
                {eqCell(eq)}
              </div>)}
            </div>
          </div>
         <div className="Equipment-sub"><p>Sample upcoming NFT equipment</p>Acquired through purchase or won in battle</div>
         <div className="Equipment-default Container">
            <div className="row">
             {['breast-plate', 'leather-pants', 'shield', 'long-sword'].map( eq => <div key={eq} className="col-sm">
                {eqCell(eq)}
              </div>)}
            </div>
          </div>
        </div>
        {separatorBg('bg-2', 'Battle your opponents in one of three different arenas')}
      </div>
    </main>
  <style jsx>{`
    .Equipment-sub{
      width: 600px;
      margin: 21px 0 10px 0;
      font-family: Avenir;
      font-size: 22px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1;
      letter-spacing: normal;
      text-align: center;
      color: #3d3c3d;
    }
    .Equipment-description{
      width: 800px;
      height: 40px;
      margin: 21px 0 36px 0;
      font-family: Avenir;
      font-size: 28px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1;
      letter-spacing: normal;
      text-align: center;
      color: #3d3c3d;
    }
    .Equipment-title{
      width: 818px;
      height: 40px;
      margin: 0 287px 31px 261px;
      font-family: Avenir;
      font-size: 72px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 0.39;
      letter-spacing: normal;
      text-align: center;
      color: #000;
    }
    .Equipment{
      width: 100%;
      padding: 100px 24px 39px 50px;
      background-color: #fff;
    }
    .CClass-Image1{
      width: 440px;
      height: 440px;
      object-fit: contain;
    }
    .CClass-description{
      width: 399px;
      height: 362px;
      font-family: Avenir;
      font-size: 18px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.56;
      letter-spacing: normal;
      color: #fff;
    }
    .CClass-title {
      width: 114px;
      height: 40px;
      font-family: Avenir;
      font-size: 28px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1;
      letter-spacing: normal;
      color: #fff;
    }
    .CClass-info {
      width:400px;
    }
    .CClass-container {
       margin: 69px 0 6px 0;
       gap: 40px;
    }
    .Character-Classes {
      width: 818px;
      height: 40px;
      margin: 150px 0 92px 0;
      font-family: Avenir;
      font-size: 72px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 0.39;
      letter-spacing: normal;
      text-align: center;
      color: #fff;
    }
    .bold{
      font-weight: bold;
    }
    .blades-of-valor-site {
      width: 1440px;
      height: 12114px;
    }
    .video {
      width: 1040px;
      height: 585px;
      margin: 90px 0px 150px 0px;
      border: solid 1px #979797;
      background-color: #d8d8d8;
    }
    .NFT-headline{
      width: 932px;
      height: 40px;
      margin: 112px 0px 10px 0px;
      font-family: Avenir;
      font-size: 38px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 0.74;
      letter-spacing: normal;
      text-align: center;
    }  
    .NFT-earn{
      width: 932px;
      height: 40px;
      margin: 10px 0px 45px 0px;
      font-size:20px;
      text-align: center;
    }
    .NFT-start{
      width: 1191px;
      height: 40px;
      margin: 45px 0px 43px 0px;
      font-family: Avenir;
      font-size: 28px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1;
      letter-spacing: normal;
      text-align: center;
      color: #fff;
    }
    .Mint-button{
      width: 256px;
      height: 66px;
      margin: 23px 0px 31px 0px;
      padding: 18px 41px 8px;
      border-radius: 8px;
      background-color: #b6a273;
      text-align: center;
    }
    .Mint-now{
      width: 174px;
      height: 40px;
      font-family: Avenir;
      font-size: 28px;
      font-weight: 900;
      font-stretch: normal;
      font-style: normal;
      line-height: 1;
      letter-spacing: normal;
      text-align: center;
      color: #fff;
    }
    .Stake-your-hero-pre{
      width: 1191px;
      height: 138px;
      margin: 31px 0 0 0;
      font-family: Avenir;
      font-size: 28px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1;
      letter-spacing: normal;
      text-align: center;
      color: #fff;
    }
    .large-logo {
      width: 608px;
      height: 248px;
      margin: 43px 0px 10px 0px;
      object-fit: contain;
    }
    .Home {
      width: 38px;
      height: 16px;
      margin: 26px 50px 111px 101px;
      font-size: 14px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: normal;
      color: #fff;
    }
    .Marketplace {
      width: 78px;
      height: 16px;
      margin: 26px 50px 111px 27px;
      font-size: 14px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: normal;
      color: #fff;
    }
    html {
      min-height: none;
      height: 100%;
    }
    .head-section{
      background-image: url(/images/web/background/bg.jpg);
      background-image: 
      -webkit-image-set(
          url(/images/web/background/bg.jpg) 1x,
          url(/images/web/background/bg@2x.jpg) 2x,
          url(/images/web/background/bg@3x.jpg) 3x,
          );
      background-image: 
        image-set(
          url(/images/web/background/bg.jpg) 1x,
          url(/images/web/background/bg@2x.jpg) 2x,
          url(/images/web/background/bg@3x.jpg) 3x,
            );
      background-size: cover;
    }
    .Full {
      color:#fff;
      background-color: #000;
      min-height: none;
      height:100%;
      font-family: Avenir;
    }
   `}</style>
  </div>
}

export default HomePage
