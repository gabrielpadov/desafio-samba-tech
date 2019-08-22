// Importando o React
import React from 'react';
// Importando axios
import axios from 'axios';
import {Card, Button, Row, Badge} from 'react-bootstrap';

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
         <Row>
      { this.state.characters.map((character) => {
        return (
          
          <Card style={{ width: '12rem', margin:'0.6em' }}>
          <Badge pill variant="primary" style={{position: 'absolute', 
          top: '0.8em',right:'-0.5em', textAlign: 'center', display:'inline-block'}}>
            {character.status}
          </Badge>
          <Card.Img variant="top" src={character.img} alt={character.name} />
          <Card.Body>
            <Card.Title>{character.name}</Card.Title>
            <Card.Text>
              Some quick example text to build on 
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
         
   ) })}
   </Row>
   </div>
    );
  }
}

export default BreakingBad;