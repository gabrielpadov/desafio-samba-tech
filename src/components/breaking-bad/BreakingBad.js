// Importando o React
import React from 'react';
// Importando axios
import axios from 'axios';
import {Card, InputGroup, FormControl, Button, Row, Badge} from 'react-bootstrap';

const API_URL = 'https://www.breakingbadapi.com/api';

class BreakingBad extends React.Component {
  
    state = {
      characters: [],
      charactersList: []
    }

  componentDidMount() {
    this.loadCharacters();
    this.onChangeInput = this.onChangeInput.bind(this);
  }

  async loadCharacters() {
    const url = `${API_URL}/characters`;
    
      axios.get(url).then(response => {
      this.setState({ characters: response.data, charactersList: response.data });
          console.log(response.data)
        }).catch(error => {
          console.log(error.response) 
      });
    }

    onChangeInput(e){
      e.preventDefault();   
         const updatedList = this.state.characters.filter((item) => item.name.toLowerCase().search(
             e.target.value.toLowerCase()) !== -1);
   
         this.setState({
             charactersList: updatedList
         })
     }
  
    render() {
      return (
       <div>
         <Row>
       
        <InputGroup className="mb-3">
    <FormControl 
      onChange={this.onChangeInput}
      placeholder="Pesquise os personagens"
      aria-label="Pesquise os personagens"
      aria-describedby="basic-addon2"
    />
    <InputGroup.Append>
      <InputGroup.Text id="basic-addon2"><i class="material-icons">search</i></InputGroup.Text>
    </InputGroup.Append>
  </InputGroup>
      { this.state.charactersList.map((character) => {
        return (
       
          <Card style={{ width: '12rem', margin:'0.6em' }}>
          <Badge pill variant="primary" style={{position: 'absolute', top: '0.8em',
              right:'-0.5em', textAlign: 'center', display:'inline-block'}}>
            {character.status}
          </Badge>
          <Card.Img variant="top" src={character.img} alt={character.name}  style={{ 'max-width':'100%',height:'auto'}} />
          <Card.Body >
            <Card.Title>{character.name}</Card.Title>
            <Card.Text>
              Some quick example text to build on 
            </Card.Text>
            <Button variant="primary">Info</Button>
          </Card.Body>
        </Card>
         
   ) })}
   </Row>
   </div>
    );
  }
}

export default BreakingBad;