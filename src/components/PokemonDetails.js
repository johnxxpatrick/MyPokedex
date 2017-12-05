import React, { Component } from 'react';
import request from 'superagent'
import '../App.css'
import { App } from '../App'

class PokemonDetails extends Component {
  state = { result: {} }

  componentWillReceiveProps(nextProps){
    this.setState({ result: nextProps.details})
  }

  pokemonMoves(moves){
      console.log(moves)
      var move = []
      if(moves){
        moves.map((item, index) => {
          if(index < 5){
            move = move.concat(<h4 key ={index}>{item.move.name}</h4>)
          }
        })
return move
  }
}
  pokemonTypes(types){
        console.log(types)
        var type = []
        if(types){
          types.map((item, index) => {
            if(index < 1){
              type = type.concat(<h4 key ={index}>{item.type.name}</h4>)
            }
          })
  return type
    }
  }
  pokemonAbilities(abilities){
        console.log(abilities)
        var ability = []
        if(abilities){
          abilities.map((item, index) => {
            if(index < 3){
              ability = ability.concat(<h4 key ={index}>{item.ability.name}</h4>)
            }
          })
  return ability
    }
  }
    pokemonHP(stats){
          console.log(stats)
          var stat = []
          var base_stat =[]
          if(stats){
            stats.map((item, index) => {
              if(index < 5){
                stat = stat.concat(<h4 key ={index}>{item.stat.name + ":" + item.base_stat}</h4>)
              }
            })
    return stat
      }
    }



  render() {
    const { sprites,abilities,moves,name,types,height,weight,id,hp,stats,base_stat,base_experience } = this.state.result
    const img = !sprites ? '' : sprites.front_default
    console.log(this.props, 'state: ', this.state)
    return (
      <div className="PokemonDetails-Container col-md-8">
        <div id="arcs">
          <div>
          </div>
        </div>
        <div className="PokemonPicture-Container col-md-3">
          <img src={img} className="PokemonSprites" />
          <h3>{id}</h3>
        </div>
        <div className="PokemonProfile col-md-6">
          <h4 className="PokemonName">{name}</h4>
            <div className="meter">
  	           <span></span>
               <h2>HP:{base_experience}/{base_experience}</h2>
            </div>
        <section>
          <div className="tbl-header">
            <table cellpadding="0" cellspacing="0" border="0">
              <thead>
                <tr>
                 <th><a className="naming">TYPE</a>{this.pokemonTypes(types)}</th>
                 <th><a className="naming">HEIGHT</a><br/>{height} m</th>
                 <th><a className="naming">WEIGHT</a><br/>{weight} kg</th>
                </tr>
             </thead>
           </table>
         </div>
        </section>
        <section>
          <div className="tbl-header2">
            <table cellpadding="0" cellspacing="0" border="0">
              <thead>
                <tr>
                  <th><a className="naming">BASE STATS:</a>
                      <h2 className="stats">{this.pokemonHP(stats)}</h2>
                  </th>
                  <th><a className="naming">MOVES:</a>
                      <h2 className="stats">{this.pokemonMoves(moves)}</h2>
                  </th>
                </tr>
                <tr>
                  <th colspan="2"><a className="naming" >ABILITIES:</a>
                  <h2 className="stats">{this.pokemonAbilities(abilities)}</h2>
                  </th>
                </tr>
              </thead>
            </table>
          </div>
        </section>
        </div>
      </div>
    );
  }
}

export default PokemonDetails;
