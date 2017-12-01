import React, { Component } from 'react';
import request from 'superagent'
import pokeball from '../images/pickachuicon.png'
import '../App.css'


class PokemonNotes extends Component {

  render() {
    return (

         <div className="PokemonNotes-Container col-md-4">
          	<form id="paper" method="get" action="">
         		<div id="margin">NOTE TITLE: <input id="title" type="text" name="title" placeholder="Title here."/></div>
              <img src={pokeball} className="Pikachu-LOGO" alt="pokeball" />
         		<textarea placeholder="Enter something here." id="text" name="text" rows="4"></textarea>
         		<br/>
         		<input id="button" type="submit" value="SAVE"/>
         	</form>
         </div>
    );
  }
}

export default PokemonNotes;
