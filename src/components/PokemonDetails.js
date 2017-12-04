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
            if(index < 5){
              type = type.concat(<h4 key ={index}>{item.type.name}</h4>)
            }
          })
  return type
    }
  }

    pokemonHP(stats){
          console.log(stats)
          var stat = []
          var base_stat =[]
          if(stats){
            stats.map((item, index) => {
              if(index < 6){
                stats = stat.concat(<h4 key ={index}>{item.stat.name + ":" + item.base_stat}</h4>)
              }
            })
    return stat
      }
    }



  render() {
    const { sprites,abilities,moves,name,types,height,weight,id,hp,stats,base_stat } = this.state.result
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
       </div>
       <h2>HP:{this.pokemonHP(stats)}</h2>

      </div>
      </div>
    );
  }
}

export default PokemonDetails;
