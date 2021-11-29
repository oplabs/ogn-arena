function AttrDisplay({name, attr}) {
    return <div className="row"><div className="col-3">{name}:</div><div className="col-9" style={{position:'relative'}}>{attr}
      <div style={{position:'absolute', zIndex:-1, backgroundColor:'red', width:Math.floor((attr/18.0)*100), height:22, top:0}}></div></div></div>
}

function StatsDisplay({character}) {
    return <>
        <AttrDisplay name='Str' attr={character.str} />
        <AttrDisplay name='Dex' attr={character.dex} />
        <AttrDisplay name='Con' attr={character.con} />
        <AttrDisplay name='Int' attr={character.int} />
        <AttrDisplay name='Wis' attr={character.wis} />
        <AttrDisplay name='Cha' attr={character.cha} />
    </>
}

export default StatsDisplay
