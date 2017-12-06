import React, { Component } from 'react';
import request from 'superagent'
import pokeball from '../images/pickachuicon.png'
import '../App.css'


class PokemonNotes extends Component {

  render() {
    const { details,notes} = this.props
    console.log(details)
    const note = notes
    .filter((note) =>{
      return details.id === note.id })
      .map((msg) => <p>{msg.note}</p>)

    return (
         <div className="PokemonNotes-Container col-md-4">
           		<div id="margin">
                POKEMON NOTES:
              </div>
              <img src={pokeball} className="Pikachu-LOGO" alt="pokeball" />
         		     <textarea placeholder="Enter something here." id="text" name="text" rows="4"
                    onChange={this.props.handleChange} value={this.props.note}>
                 </textarea>
         		     <br/>
         		<input id="button" type="submit" value="SAVE" onClick={this.props.handleSave} />
            <div className="Note-Container">{note}</div>
         </div>
    );
  }
}

export default PokemonNotes;
