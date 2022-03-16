function HomePage() {
  return <div>
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
    <main className="landing-page">
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
              These heroes could be questing knights, royal champions, elite foot soldiers, hardened mercenaries, or bandit kings. They all share an mastery with physical weapons and armor, and a thorough knowledge of the skills of combat. And they are well acquainted with death, both meting it out and staring it defiantly in the face.
            </div>
          </div>
          <div className="CClass-images">
            <img src="/images/web/classes/fighter-1.jpg"
                 srcset="/images/web/classes/fighter-1@2x.jpg 2x, /images/web/classes/fighter-1@3x.jpg 3x"
               className="CClass-Image1" />
            <img src="/images/web/classes/fighter-2.jpg"
                 srcset="/images/web/classes/fighter-2@2x.jpg 2x, /images/web/classes/fighter-2@3x.jpg 3x"
               className="CClass-Image1" />
          </div>
        </div>
        <div className="CClass-container d-flex flex-wrap">
          <div className="CClass-images">
            <img src="/images/web/classes/rogue-1.jpg"
                 srcset="/images/web/classes/rogue-1@2x.jpg 2x, /images/web/classes/rouge-1@3x.jpg 3x"
               className="CClass-Image1" />
            <img src="/images/web/classes/rogue-2.jpg"
                 srcset="/images/web/classes/rogue-2@2x.jpg 2x, /images/web/classes/rouge-2@3x.jpg 3x"
               className="CClass-Image1" />
          </div>
          <div className="CClass-info">
            <div className="CClass-title">
             Rogue 
            </div>
            <div className="CClass-description">
            A rogue is the master of the shadows and the slight of hand. They rely on cunny, stealth, and their foes’ vulnerabilities to get the upper hand in any situation. They have a knack for finding the solution to just about any problem, demonstrating a resourcefulness and versatility that is the cornerstone of any successful adventuring party.
            </div>
          </div>
        </div>
        <div className="CClass-container d-flex flex-wrap">
          <div className="CClass-info">
            <div className="CClass-title">
              Mage
            </div>
            <div className="CClass-description">
             Mages are supreme magic-users, defined and united as a class by the spells they cast. Drawing on the subtle weave of magic that permeates the cosmos, mages cast spells of explosive fire, arcing lightning, subtle deception, and brute-force mind control. Their magic conjures monsters from other planes of existence, glimpses the future, or turns slain foes into zombies. Their mightiest spells change one substance into another, call meteors down from the sky, or open portals to other worlds.
            </div>
          </div>
          <div className="CClass-images">
            <img src="/images/web/classes/mage-1.jpg"
                 srcset="/images/web/classes/mage-1@2x.jpg 2x, /images/web/classes/mage-1@3x.jpg 3x"
               className="CClass-Image1" />
            <img src="/images/web/classes/mage-2.jpg"
                 srcset="/images/web/classes/mage-2@2x.jpg 2x, /images/web/classes/mage-2@3x.jpg 3x"
               className="CClass-Image1" />
          </div>
        </div>
        <div className="CClass-container d-flex flex-wrap">
          <div className="CClass-images">
            <img src="/images/web/classes/cleric-1.jpg"
                 srcset="/images/web/classes/cleric-1@2x.jpg 2x, /images/web/classes/cleric-1@3x.jpg 3x"
               className="CClass-Image1" />
            <img src="/images/web/classes/cleric-2.jpg"
                 srcset="/images/web/classes/cleric-2@2x.jpg 2x, /images/web/classes/cleric-2@3x.jpg 3x"
               className="CClass-Image1" />
          </div>
          <div className="CClass-info">
            <div className="CClass-title">
             Cleric 
            </div>
            <div className="CClass-description">
              <p>Arms and eyes upraised toward the sun and a prayer on his lips, the cleric begins to glow with an inner light that spills out to heal her battle-worn companions.</p>
Clerics are intermediaries between the mortal world and the distant planes of the gods. As varied as the gods they serve, clerics strive to embody the handiwork of their deities. No ordinary priest, a cleric is imbued with divine magic.
            </div>
          </div>
        </div>
      </div>
    </main>
  <style jsx>{`
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
       margin: 99px 0 6px 0;
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
      background-color: #000;
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
      margin: 53px 0px 71px 0px;
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
      margin: 71px 0 0 0;
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
      margin: 63px 0px 112px 0px;
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
    body {
      color:#fff;
      min-height: none;
      height:100%;
      font-family: Avenir;
    }
   `}</style>
  </div>
}

export default HomePage
