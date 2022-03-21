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
               width='100%'
               className='SeparatorBgImg' />
            <div className="SeparatorBgContent">
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
            Battle to earn with your hero NFT on the blockchain
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
        {separatorBg('bg', <span className='SeparatorText'>Heroes become more valuable as they gain experience with every battle</span>)}
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
        {separatorBg('bg-2', <span className='SeparatorText'>Battle your opponents in one of three different arenas</span>)}
        <div className="Roadmap d-flex flex-column align-items-center">
          <div className="Roadmap-title">Roadmap</div>
          <div className="Roadmap-section"><h2>Q1 2022</h2>
  <p>2,000 heroes are algorithmically generated</p>
  <p>Preview in Unity</p>
  <p>Heroes and animation rendered for battle in Unreal Engine</p>
  <p>Fair and free minting experience is perfected</p>
  <p>OGN token holders and 888 Inner Circle members are the first to be whitelisted</p></div>
          <div className="Roadmap-line"/>
          <div className="Roadmap-section"><h2>Q2 2022</h2>
   <p>First generation heroes are minted</p>
   <p>Founding game players claim up to five free heroes</p>
   <p>Reveal of heroes mapping</p>
   <p>Each hero emerges from provably-fair reveal process</p>
   <p>Intial equipment NFT mint</p>
   <p>Game contract deploy</p>
   <p>Holders of the first generation heroes are able to claim one free item to enhance their fighting ability</p>
          </div>
          <div className="Roadmap-line"/>
          <div className="Roadmap-section">
            <h2>Q3 2022</h2>
    <p>Alpha game release</p>
    <p>The first fight will occur live on Twitch during the launch event</p>
    <p>Competition heats up</p>
    <p>A second generation of heroes will be available to mint</p>
    <p>Token release</p>
    <p>An in-game currency is minted and distributed to early adopters</p>
          </div>
          <div className="Roadmap-line"/>
          <div className="Roadmap-section">
          <h2>Q4 2022</h2>
     <p>Production game release</p>
     <p>The full version of the game will be launched with ongoing fights live on Twitch</p>
     <p>Expanded NFT ecosystem</p>
     <p>Additional heroes can be minted and an equipment economy is developed</p>
     <p>Dungeon crawl mode for party of heroes</p>
          </div>
          <div className="Roadmap-line"/>
          <div className="Roadmap-section">
          <h2>2023+</h2>
      <p>Metaverse integration</p>
      <p>Rogue like dungeon and arena map generation</p>
      <p>More advance game modes</p>
          </div>
        </div>
      {separatorBg('bg-3', 
            <div className="Team d-flex flex-column align-items-center">
              <div className="Team-title">Team</div>
              <div className="row">
                <div className="Member col-sm" style={{marginRight:60}}>
                  <div className="Member-headshot">
                     <img src="/images/web/team/headshot-yupan.jpg" />
                  </div>
                  <div className="Member-info"><p className='bold'>Yu Pan</p>
                  Developer</div>
                </div>
                <div className="Member col-sm">
                  <div className="Member-info"><p className='bold'>Jeff Gibson</p>
                  Developer</div>
                </div>
              </div>
              <div className="Team-with">With the team at <span className="bold">Origin Protocol</span></div>
            </div>)}
        <div className="FAQ d-flex flex-column align-items-center">
          <div className="FAQ-title">FAQ</div>
          <div className="FAQ-questions">
            <div className="question">How do I get added to the whitelist?</div>
            <div className="answer">Whitelist spots are granted to members of our Discord server (Trailblazers) who contribute the most to our growing community. However, you don’t need to be on the whitelist if you hold the right keys to access the free mint.</div>

            <div className="question">How do I get keys to mint free hero NFTs?</div>
            <div className="answer">Every holder of the 888 Inner Circle Yellow Realm NFT is automatically eligible along with every wallet that holds at least 10,000 OGN. You can buy an 888 NFT on OpenSea or get OGN from a variety of top exchanges.</div>

            <div className="question">How many free hero NFTs can I claim?</div>
            <div className="answer">Each wallet is eligible to mint up to five hero NFTs (just pay gas).</div>

            <div className="question">What blockchain are these NFTs minted on?</div>
            <div className="answer">Blades of Valor heroes are ERC-721 NFTs minted on Ethereum Mainnet.</div>
          </div>
        </div>
        {separatorBg('bg-4', 
            <div className="Team d-flex flex-column align-items-center">
              <div className="NFT-headline"><span className='bold'>Mint</span>, Level up, Gear up, <span className='bold'>Fight</span></div>
              <div className="NFT-start">
                  Start with a <span className='bold'>Free</span> mint for the first generation of 2,000 hero NFTs
              </div>
              <div className="Mint-button">
                <span className="Mint-now">Mint Now</span>
              </div>
            </div>)}
      <div className="Footer contents d-flex flex-grow flex-end">
        <div className="Footer-links">
          <p>Privacy</p>
          <p>Terms</p>
          <p>FAQs</p>
        </div>
        <div className="Footer-copyright">
          <p>© Copyright 2021</p>
          <p>Powered by Origin</p>
        </div>
      </div>
      </div>
    </main>
  <style jsx>{`
    .Footer {
      justify-content: space-between;
      width:100%;
    }
    .Footer-copyright {
      width: 133px;
      height: 18px;
      margin: 50px 0 0 50px;
      opacity: 0.7;
      font-family: HelveticaNeue;
      font-size: 14px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.29;
      letter-spacing: normal;
      text-align: right;
      color: #fff;
    }
    .Footer-links {
      width: 151px;
      height: 128px;
      margin: 50px 50px;
      opacity: 0.7;
      font-family: HelveticaNeue;
      font-size: 24px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1;
      letter-spacing: normal;
      color: #fff;
    }
    .question{
      font-weight:bold;
      margin-bottom:30px;
    }
    .answer{
      margin-bottom:60px;
    }
    .FAQ-questions {
      width: 956px;
      margin: 73px 0 81px 0;
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
    .FAQ-title {
      width: 818px;
      height: 40px;
      margin: 132px 0 73px 0;
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
    .Team-with {
      width: 649px;
      height: 14px;
      margin: 81px 0 25px 0;
      font-family: Avenir;
      font-size: 22px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 0.64;
      letter-spacing: normal;
      text-align: center;
      color: #fff;
    }
    .Member-headshot img {
      border-radius: 100%;
      width: 250px;
    }
    .Member-info {
      margin-top:50px;
      font-family: Avenir;
      font-size: 28px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 0.5;
      letter-spacing: normal;
      text-align: center;
      color: #fff;
    }
    .Member {
      width:250px;
      height:350px;
    }
    .Team-title{
      font-family: Avenir;
      margin-bottom: 60px;
      font-size: 72px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 0.39;
      letter-spacing: normal;
      text-align: center;
      color: #fff;
    }
    .Roadmap-line{
      width: 1px;
      height: 91px;
      margin: 0px 250px 0px 249px;
      border: solid 1px #979797;
      background-color: #fff;
    }
    .Roadmap-section{
      width: 500px;
      margin: 23px 0 0px;
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
    .Roadmap-title{
      height: 40px;
      margin: 149px 0 105px 0;
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
    h2{
      font-weight: 900;
      margin-bottom: 20px;
    }
    .bold{
      font-weight: bold;
    }
    .blades-of-valor-site {
      width: 1440px;
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
