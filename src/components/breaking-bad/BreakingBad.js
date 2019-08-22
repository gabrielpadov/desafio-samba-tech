// Importando o React
import React from 'react';
// Importando axios
import axios from 'axios';

const API_URL = 'https://www.breakingbadapi.com/api';

class BreakingBad extends React.Component {
  
    state = {
      characters: []
    }
    
  componentDidMount() {
    this.loadCharacters();
  }
    async loadCharacters() {
      const url = `${API_URL}/characters`;
      
       axios.get(url).then(response => {
        this.setState({ characters: response.data });
            console.log(response.data)
          }).catch(error => {
            console.log(error.response) 
      });
    }
  
    render() {
      return (
       <div>
      { this.state.characters.map((character) => {
        return (
        <p>{character.id}</p>
   ) })}
   </div>
    );
  }
}

export default BreakingBad;