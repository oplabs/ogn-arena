function HomePage() {
  return <div>
        <div className="text-center">
          <img style={{height:100}} src="/images/blades_logo.png" alt="Blades of Valor"/>
        </div>
        <div className="row">
          <div className="col">
            <img className="float-start" style={{height:150}} src="/images/MattFromAfar-Small.png" alt="Hero from afar"/>
            <h4>They come from all over, from across the great seas, from past the outer planes, through gated walls and dimensional portals, from worlds far beyond -- heroes and heroines on the quest for a shard of the fabled crystal flower. An object so powerful that one shard is all it takes to bring back a love long lost, to reduce an incoming horde to dust, to cure a great plague, to save a dying world.</h4>
          </div>
      </div>
      <div className="row">
        <div className="col">
            <img style={{height:200}} className="float-end" src="/images/ArenaChamp-small.png" alt="Arena Champion"/>
            <h4> To secure it they must enter the tournament of Valoria, and fight through countless battles to become its Grand Champion. They must endure and overcome using their wits, their wisdom, their speed, their brawn -- their valor.</h4>
          </div>
        </div>
        <div>
          <h4>You are one of the few honored nobles of Valoria. Your house might even have a Grand Champion in its line. You have the resources to sponsor these heroes and heroines on their quest by giving them housing, training, equipment, and the entry fee into the tournament itself. And in turn their winnings will bring prestige and honor to your house, not to mention a few prizes granted to the sponsor.</h4>
          <div className="text-center">
          <img style={{height:300}} src="/images/ArenaTraining-Small.png" alt="Arena Training"/>
          </div>
        </div>
    </div>
}

export default HomePage
