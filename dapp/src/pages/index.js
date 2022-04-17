import Link from 'next/link'

const DISCORD_URL = 'https://discord.gg/bov';
const ORIGIN_URL = 'https://originprotocol.com';
const PRIVACY_URL = 'https://originprotocol.com/privacy';
const TERMS_URL = 'https://originprotocol.com/terms';

function HomePage() {
  const eqCell = (eqItem) => {
      return <div className="eqCell d-flex align-items-center justify-content-center">
        <img src={`/images/eq_icons/${eqItem}.png`} />
     </div>
  }
  const ExampleCharacter = ({name, heroId, contentId}) => {
    return <Link href={`/hero/${heroId}`}>
        <div className="ExampleCharacter col-sm">
          <img src={`/pub/heroes/${contentId}/Face.jpg`} className="ExampleCharacterImg"/>
          <div className="ExampleCharacterName">{name}</div>
        </div>
      </Link>
  }
  const separatorBg = (imgName, overlayText) => {
    return <section className="separator">
      <div className="content">
        {overlayText}
      </div>
      <style jsx>
        {`.separator:before {
            background-image: -webkit-image-set(
                url("/images/web/separator/${imgName}.jpg") 1x,
                url("/images/web/separator/${imgName}@2x.jpg") 2x,
                url("/images/web/separator/${imgName}@3x.jpg") 3x
              );
            background-image: image-set(
                url("/images/web/separator/${imgName}.jpg") 1x,
                url("/images/web/separator/${imgName}@2x.jpg") 2x,
                url("/images/web/separator/${imgName}@3x.jpg") 3x
              );
          }
        `}
      </style>
    </section>

  }
  return <div className="Full">
    <main className="landing-page">
      <section className="head">
        <div className="navbar-holder">
          <nav className="navbar navbar-expand-lg navbar-origin navbar-dark">
            <div>
              <a className="navbar-brand" href="/">
                <div className="logo-container">
                  <img src="/images/web/logo/logo.png"
                    srcSet="/images/web/logo/logo@2x.png 2x, /images/web/logo/logo@3x.png 3x"
                    className="bov-logo"
                    alt="Blades of Valor Logo" />
                </div>
              </a>
            </div>
            {/*<span className="Marketplace">Marketplace</span>*/}
          </nav>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <div className="large-logo">
            <img src="/images/web/large-logo/logo.png"
              srcSet="/images/web/large-logo/logo@2x.png 2x, /images/web/large-logo/logo@3x.png 3x"
              width="100%" />
          </div>
          <div className="NFT-headline">
            <b>Mint</b>, Level up, Gear up, <b>Fight</b>
          </div>
          <div className="NFT-earn">
            Earn by battling with your hero NFT on the blockchain
          </div>
          <div className="NFT-start">
            Start with a <b>Free</b> mint for the first generation of 5,000 hero NFTs
          </div>
          <a href={DISCORD_URL} target="_blank"rel="noreferrer noopener">
            <button className="Mint-button">
              Join the Discord
            </button>
          </a>
          <div className="Stake-your-hero-pre">
            <p>Stake your hero, prepare for each fight, and earn as you gain experience.</p>
            <p>Every fight is streamed live on Twitch with the same level of video quality shown in our trailer.</p>
            We’re building the next evolution of blockchain games for a global audience.
          </div>
        </div>
      </section>
      <div className="d-flex flex-column align-items-center blades-of-valor-site">
        <div className="videoContainer">
          <div className="video">
            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/Meh1PlGYzI0?controls=2&rel=0&showinfo=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </div>
        <h2>Character Classes</h2>
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
              className="CClass-Image1" width="100%" />
            <img src="/images/web/classes/fighter-2.jpg"
              srcSet="/images/web/classes/fighter-2@2x.jpg 2x, /images/web/classes/fighter-2@3x.jpg 3x"
              className="CClass-Image1" width="100%" />
          </div>
        </div>
        <div className="ExampleChracters text-center text-md-left d-md-flex flex-wrap">
          <div className="ExampleCharacterTitle col-sm">Example Fighters</div>
          <ExampleCharacter name='Jalana Marsk' heroId={743} contentId={'Female_Fighter_83_nov29'} />
          <ExampleCharacter name='Anton Uuthrakt' heroId={853} contentId={'Male_Fighter_51_nov29'} />
          <ExampleCharacter name='Marcon Ankhalab' heroId={858} contentId={'Male_Fighter_64_nov29'} />
        </div>
        <div className="CClass-container d-flex flex-wrap">
          <div className="CClass-images">
            <img src="/images/web/classes/rogue-1.jpg"
              srcSet="/images/web/classes/rogue-1@2x.jpg 2x, /images/web/classes/rogue-1@3x.jpg 3x"
              className="CClass-Image1" width="100%" />
            <img src="/images/web/classes/rogue-2.jpg"
              srcSet="/images/web/classes/rogue-2@2x.jpg 2x, /images/web/classes/rogue-2@3x.jpg 3x"
              className="CClass-Image1" width="100%" />
          </div>
          <div className="CClass-info">
            <div className="CClass-title">Rogue</div>
            <div className="CClass-description">
              Like a whisper on the lips, the Rogue is a shadow in the minds of men.  The wise would be cautious not to forget their presence on the battlefield, unleashing crippling blows on those that do.
            </div>
          </div>
        </div>
        <div className="ExampleChracters text-center text-md-left d-md-flex flex-wrap">
          <ExampleCharacter name='Jun Chien' heroId={990} contentId={'Male_Rogue_3_dec20b2'} />
          <ExampleCharacter name='Umara Marivaldi' heroId={966} contentId={'Female_Rogue_8_dec20b1'} />
          <ExampleCharacter name='Grim Fargo' heroId={986} contentId={'Male_Rogue_2_dec20b2'} />
          <div className="ExampleCharacterTitle col-sm">Example Rogues</div>
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
              className="CClass-Image1" width="100%" />
            <img src="/images/web/classes/mage-2.jpg"
              srcSet="/images/web/classes/mage-2@2x.jpg 2x, /images/web/classes/mage-2@3x.jpg 3x"
              className="CClass-Image1" width="100%" />
          </div>
        </div>
        <div className="ExampleChracters text-center text-md-left d-md-flex flex-wrap">
          <div className="ExampleCharacterTitle col-sm">Example Mages</div>
          <ExampleCharacter name='Thola Falone' heroId={810} contentId={'Female_Mage_79_nov28'} />
          <ExampleCharacter name='Marta Fezim' heroId={798} contentId={'Female_Mage_62_nov29'} />
          <ExampleCharacter name='Zasheir Storm' heroId={684} contentId={'Male_Mage_76_nov25'} />
        </div>
        <div className="CClass-container d-flex flex-wrap">
          <div className="CClass-images">
            <img src="/images/web/classes/cleric-1.jpg"
              srcSet="/images/web/classes/cleric-1@2x.jpg 2x, /images/web/classes/cleric-1@3x.jpg 3x"
              className="CClass-Image1" width="100%" />
            <img src="/images/web/classes/cleric-2.jpg"
              srcSet="/images/web/classes/cleric-2@2x.jpg 2x, /images/web/classes/cleric-2@3x.jpg 3x"
              className="CClass-Image1" width="100%" />
          </div>
          <div className="CClass-info">
            <div className="CClass-title">Cleric</div>
            <div className="CClass-description">
              A fierce dedication to their beliefs drives within them an extraordinary determination of force to be unleashed on those that would challenge them.  Their training is not in the blade but rather, the hearts of men.
            </div>
          </div>
        </div>
        <div className="ExampleChracters text-center text-md-left d-md-flex flex-wrap">
          <ExampleCharacter name='Arveene Sepret' heroId={952} contentId={'Female_Cleric_32_dec20b1'} />
          <ExampleCharacter name='Geth Jassan' heroId={973} contentId={'Male_Cleric_27_dec20b1'} />
          <ExampleCharacter name='Ander Mori' heroId={940} contentId={'Female_Cleric_11_dec20b2'} />
          <div className="ExampleCharacterTitle col-sm">Example Clerics</div>
        </div>
        <div style={{height:60}} />
        {separatorBg('bg', <div className="Gains">
            Heroes become more valuable as they gain experience with every battle
          </div>
        )}
        <div className="Equipment d-flex flex-column align-items-center">
          <h2 className="Equipment-title">Equipment</h2>
          <span className="Equipment-description">Each hero can equip gear that can tip the balance of battle in their favor</span>
          <span className="Equipment-sub">Current default equipment (non-NFTs)</span>
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
        {separatorBg('bg-2', <div className="Arenas">
            Battle your opponents in one of three different arenas
          </div>
        )}
        <section className="Roadmap d-flex flex-column align-items-center">
          <h2>Roadmap</h2>
          <div className="Roadmap-period">
            <h3>Q1 2022</h3>
            <p>5,000 heroes are algorithmically generated</p>
            <p>Preview in Unity</p>
            <p>Heroes and animation rendered for battle in Unreal Engine</p>
            <p>Fair and free minting experience is perfected</p>
            <p>OGN token holders and 888 Inner Circle members are the first to be whitelisted</p>
          </div>
          <div className="Roadmap-line"/>
          <div className="Roadmap-period">
            <h3>Q2 2022</h3>
            <p>First generation heroes are minted</p>
            <p>Founding game players claim up to five free heroes</p>
            <p>Reveal of heroes mapping</p>
            <p>Each hero emerges from provably-fair reveal process</p>
            <p>Intial equipment NFT mint</p>
            <p>Game contract deploy</p>
            <p>Holders of the first generation heroes are able to claim one free item to enhance their fighting ability</p>
          </div>
          <div className="Roadmap-line"/>
          <div className="Roadmap-period">
            <h3>Q3 2022</h3>
            <p>Alpha game release</p>
            <p>The first fight will occur live on Twitch during the launch event</p>
            <p>Competition heats up</p>
            <p>A second generation of heroes will be available to mint</p>
            <p>Token release</p>
            <p>An in-game currency is minted and distributed to early adopters</p>
          </div>
          <div className="Roadmap-line"/>
          <div className="Roadmap-period">
            <h3>Q4 2022</h3>
            <p>Production game release</p>
            <p>The full version of the game will be launched with ongoing fights live on Twitch</p>
            <p>Expanded NFT ecosystem</p>
            <p>Additional heroes can be minted and an equipment economy is developed</p>
            <p>Dungeon crawl mode for party of heroes</p>
          </div>
          <div className="Roadmap-line"/>
          <div className="Roadmap-period">
            <h3>2023+</h3>
            <p>Rogue like dungeon and arena map generation</p>
            <p>More advanced game modes</p>
          </div>
        </section>
        {separatorBg('bg-3', 
            <div className="Team d-flex flex-column align-items-center">
              <h2>Team</h2>
              <div className="row">
                <div className="Member col-sm" style={{marginRight:60}}>
                  <div className="Member-headshot">
                     <img src="/images/web/team/headshot-yupan.jpg" />
                  </div>
                  <div className="Member-info"><p><b>Yu Pan</b></p>
                  Developer</div>
                </div>
                <div className="Member col-sm">
                  <div className="Member-headshot">
                     <img src="/images/web/team/headshot-jeff.png" />
                  </div>
                  <div className="Member-info"><p><b>Jeff Gibson</b></p>
                  Developer</div>
                </div>
              </div>
              <div className="Team-with">With the team at <a href={ORIGIN_URL} target="_blank" rel="noreferrer noopener"><b>Origin Protocol</b></a></div>
            </div>)}
        <section className="FAQ d-flex flex-column align-items-center text-center">
          <h2>FAQ</h2>
          <div className="questions">
            <div className="question">How do I get added to the whitelist?</div>
            <div className="answer">Whitelist spots are granted to members of our Discord server (Trailblazers) who contribute the most to our growing community. However, you don’t need to be on the whitelist if you hold the right keys to access the free mint.</div>

            <div className="question">How do I get keys to mint free hero NFTs?</div>
            <div className="answer">Every holder of the 888 Inner Circle Yellow Realm NFT is automatically eligible along with every wallet that holds at least 10,000 OGN. You can buy an 888 NFT on OpenSea or get OGN from a variety of top exchanges.</div>
            
            <div className="question">Am I automatically eligible if I have OGN staked or held on an exchange?</div>
            <div className="answer">No, OGN or the 888 NFT must be held in the wallet that you plan to use to mint your hero NFTs. We may use a snapshot or require that the tokens be held in the wallet at the time of minting. Watch for an announcement as we get closer to the launch.</div>
            {/*
              <div className="question">How many free hero NFTs can I claim?</div>
              <div className="answer">Each wallet is eligible to mint up to five hero NFTs (just pay gas).</div>
             */}
            <div className="question">What blockchain are these NFTs minted on?</div>
            <div className="answer">Blades of Valor heroes are ERC-721 NFTs minted on Ethereum Mainnet.</div>
          </div>
        </section>
        {separatorBg('bg-4', 
            <div className="Team d-flex flex-column align-items-center">
              <div className="NFT-headline"><b>Mint</b>, Level up, Gear up, <b>Fight</b></div>
              <div className="NFT-start">
                  Start with a <b>Free</b> mint for the first generation of 5,000 hero NFTs
              </div>
              <a href={DISCORD_URL} target="_blank"rel="noreferrer noopener">
                <button className="Mint-button">
                  Join the Discord
                </button>
              </a>
            </div>)}
      </div>
      <footer className="d-flex flex-column flex-md-row">
        <div className="mb-4">
          <p><a href={PRIVACY_URL} target="_blank"rel="noreferrer noopener">Privacy</a></p>
          <p><a href={TERMS_URL} target="_blank"rel="noreferrer noopener">Terms</a></p>
        </div>
        <div>
          <p>© 2022 Blades of Valor</p>
          <p>Powered by <a href={ORIGIN_URL} target="_blank"rel="noreferrer noopener">Origin</a></p>
        </div>
      </footer>
    </main>
  <style jsx>{`
    nav {
      justify-content: space-between;
    }
    footer {
      justify-content: space-between;
      padding: 20px;
      width: 100%;
      font-size: 0.875rem;
      opacity: 0.7;
      color: #fff;
    }
    footer > :last-of-type {
      text-align: right;
    }
    @media (max-width: 800px) {
      footer > :last-of-type {
        text-align: left;
      }
    }
    .question{
      font-weight:bold;
      margin-bottom:30px;
    }
    .answer{
      margin-bottom:60px;
    }
    .FAQ {
      padding: 20px;
    }
    .FAQ .questions {
      max-width: 70%;
    }
    @media (max-width: 800px) {
      .FAQ .questions {
        max-width: 100%;
      }
    }
    .Team {
      padding: 20px;
    }
    .Team-with {
      margin: 66px auto;
      font-size: 1.375rem;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
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
      font-size: 1.75rem;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      letter-spacing: normal;
      text-align: center;
      color: #fff;
    }
    .Member {
      width:250px;
      height:350px;
    }

    @media (max-width: 800px) {
      .Member {
        width:120px;
        height:150px;
      }
     .Member-headshot img {
        border-radius: 100%;
        width: 100px;
      }

      .Member-info {
        font-size: 1rem;
        margin-top:10px;
      }
    }
    .Gains, .Arenas {
      padding: 250px 40px;
      font-size: 1.75rem;
      text-align: center;
    }
    .Roadmap {
      padding: 20px 20px 80px;
      text-align: center;
    }
    .Roadmap-line {
      width: 1px;
      height: 91px;
      margin: 0px 250px 0px 249px;
      border: solid 1px #979797;
      background-color: #fff;
    }
    .Roadmap-period {
      max-width: 500px;
      margin: 23px 0 0px;
      font-size: 1.75rem;
    }
    .Equipment-sub {
      max-width:100%;
      width: 600px;
      margin: 21px 0 10px 0;
      font-size: 1.375rem;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      letter-spacing: normal;
      text-align: center;
      color: #3d3c3d;
    }
    .Equipment-description {
      max-width:100%;
      width: 800px;
      margin: 21px 0 36px 0;
      font-size: 1.75rem;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      letter-spacing: normal;
      text-align: center;
      color: #3d3c3d;
    }
    .Equipment-title {
      color: #000;
    }
    .Equipment {
      width: 100%;
      padding: 20px;
      background-color: #fff;
    }
    .CClass-Image1 {
      width: 440px;
      object-fit: contain;
    }
    @media (max-width: 800px) {
      .CClass-Image1{
        width: 50%;
        object-fit: contain;
      }
    }
    .CClass-description {
      width: 399px;
      font-size: 1.125rem;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      letter-spacing: normal;
      color: #fff;
    }
    .CClass-title {
      width: 114px;
      height: 40px;
      font-size: 1.75rem;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      letter-spacing: normal;
      color: #fff;
    }
    .CClass-info {
      max-width:100vw;
      width:400px;
    }
    .CClass-container {
       justify-content:center;
       margin: 69px 0 6px 0;
       gap: 40px;
       width: 100%;
    }
    h2 {
      margin: 150px 0 90px;
      font-size: 4.5rem;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      letter-spacing: normal;
      text-align: center;
      color: #fff;
      line-height: 1;
    }
    @media (max-width: 800px) {
      h2 {
        margin: 90px 0 30px;
        font-size: 2.25rem;
      }
    }
    h3 {
      font-weight: 900;
      margin-bottom: 20px;
    }
    .videoContainer {
      max-width:1280px;
      width:100vw;
    }
    .video {
      margin: 90px 0px 20px 0px;
      height:0;
      padding-bottom: 56.25%;
      position:relative;
    }
    .video iframe {
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
    }
    .NFT-headline{
      max-width:100%;
      width: 932px;
      margin: 112px 0px 10px 0px;
      font-size: 2.375rem;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      letter-spacing: normal;
      text-align: center;
    }  
    .NFT-earn{
      max-width:100%;
      width: 932px;
      margin: 10px 0px 45px 0px;
      font-size:1.25rem;
      text-align: center;
    }
    .NFT-start{
      max-width:100%;
      width: 1191px;
      margin: 45px 0px 43px 0px;
      font-size: 1.75rem;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      letter-spacing: normal;
      text-align: center;
      color: #fff;
    }
    button {
      padding: 1rem 2rem;
      margin: 30px auto;
      border-radius: 8px;
      background-color: #b6a273;
      text-align: center;
      font-size: 1.75rem;
      font-weight: 900;
      color: #fff;
      display: flex;
      justify-content: center;
      flex-direction: column;
      border-style: none;
    }
    @media (max-width: 800px) {
      .NFT-headline{
        font-size:2rem;
        margin: 32px 0px 10px 0px;
      }
      .NFT-earn{
        margin: 10px 0px 25px 0px;
      }
      .NFT-start{
        margin: 25px 0px 23px 0px;
        font-size:1.5rem;
      }
    }
    .Stake-your-hero-pre{
      max-width:100%;
      width: 1191px;
      margin: 31px 0 20px 0;
      font-size: 1.75rem;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      letter-spacing: normal;
      text-align: center;
      color: #fff;
    }
    .large-logo {
      max-width:100%;
      width: 608px;
      margin: 43px 0px 10px 0px;
      object-fit: contain;
    }
    .Home {
      width: 38px;
      height: 16px;
      margin: 26px 50px 111px 101px;
      font-size: 0.875rem;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      letter-spacing: normal;
      color: #fff;
    }
    .Marketplace {
      width: 78px;
      height: 16px;
      margin: 26px 50px 111px 27px;
      font-size: 0.875rem;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      letter-spacing: normal;
      color: #fff;
    }
    html {
      min-height: none;
      height: 100%;
    }
    section.head {
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
      padding: 20px;
    }
    .Full {
      color:#fff;
      background-color: #000;
      min-height: none;
      height:100%;
      overflow:hidden;
    }
   `}</style>
  </div>
}

export default HomePage
