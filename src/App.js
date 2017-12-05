import React, { Component } from 'react'
import logo from './images/pickachuicon.png'
import pokedex from './images/pokedexlogo.png'
import pokeball from './images/pokeball.gif'
import request from 'superagent'
import './App.css'
import PokemonDetails from './components/PokemonDetails'
import PokemonNotes from './components/PokemonNotes'
import pokedexx from './images/pokedex.png'
import evolution from './images/pokemonevolution.gif'



class App extends Component {
  state = {
    search: '',
    details: {}
  }

  handleChange(e){
    this.setState({ search: e.target.value})
  }

  handleSearch(){
    const { search } = this.state
    var that = this
    const url = 'http://pokeapi.co/api/v2/pokemon'
    console.log('call api: ', this.state.search)
    request.get(`${url}/${search}`)
      .end(function(err, res){
        if(err) alert('error')
        that.setState({ details: res.body })

   })
  }
  render() {
    console.log(this.state)
    return (
      <div className="App">
        <header className="App-header">
          <img src={pokedex} className="Pokedex-LOGO" alt="pokeball" />
          <h1 className="App-title">
          <img src={pokeball} className="Pokeball-GIF" alt="pokeball" />
          </h1>
        </header>
          <div className="PokemonMain-Conatiner col-md-12">
            <img src={evolution} className="PokemonEvolution" alt="evolution" />
              <div className="PokemonSearch-Container col-md-5">
                  <div className="select-type-pokemon-wrapper"> .
                  <div className="field">
                    <input type="text" placeholder="Enter Keyword"
                    onChange={this.handleChange.bind(this)} />
                  </div>
              </div>
                  <div className="btnSearch-Container">
                  	<div className="btn" onClick={this.handleSearch.bind(this)} >
                  		<span>SEARCH</span>
                  		<div className="dot"></div>
                  	</div>
                  </div>
                  <PokemonDetails details={this.state.details}/>
                  <PokemonNotes notes={this.state.details}/>
              </div>
          </div>
      </div>
    );
  }
}
export default App;
