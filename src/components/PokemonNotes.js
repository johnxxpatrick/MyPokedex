import React, { Component } from 'react';
import request from 'superagent'
import pokeball from '../images/pickachuicon.png'
import '../App.css'


class PokemonNotes extends Component {
  render() {
    const { details,notes} = this.props
    const note = notes
    .filter((note) =>{
      return details.id == note.id })
      .map((msg) => <p>{msg.note}</p>)

    return (
         <div className="PokemonNotes-Container col-md-4">
           		<div id="margin">NOTE TITLE:
                <input id="title" type="text" name="title" placeholder="Title here..."/>
              </div>
              <img src={pokeball} className="Pikachu-LOGO" alt="pokeball" />
         		     <textarea placeholder="Enter something here." id="text" name="text" rows="4"
                    onChange={this.props.handleChange}>
                 </textarea>
         		     <br/>
         		<input id="button" type="submit" value="SAVE" onClick={this.props.handleSave}/>

         </div>
    );
  }
}

export default PokemonNotes;
