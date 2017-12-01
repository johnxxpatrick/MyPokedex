import React, { Component } from 'react';
import request from 'superagent'
import '../App.css'
import { App } from '../App'

class PokemonDetails extends Component {
  state = { result: {} }

  componentWillReceiveProps(nextProps){
    this.setState({ result: nextProps.details})
  }

  render() {
    const { sprites,abilities,moves,name } = this.state.result
    const img = !sprites ? '' : sprites.front_default
    console.log(this.props, 'state: ', this.state)
    return (
      <div className="PokemonDetails-Container col-md-8">
      <img className="PokemonSprites" src={img}/>
      <h4 className="PokemonName">{name}</h4>

      </div>
    );
  }
}

export default PokemonDetails;
