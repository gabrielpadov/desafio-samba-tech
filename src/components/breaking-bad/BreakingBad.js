// Importando o React
import React from 'react';
// Importando axios
import axios from 'axios';
// Importando os components react-bootstrap
import {Card, InputGroup, Form, FormControl, Navbar, Nav}  from 'react-bootstrap';
import {Container, Button, Row, Badge} from 'react-bootstrap';

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
      <>
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">
      <img
        src="https://banner2.kisspng.com/20180816/kzi/kisspng-logo-walter-white-vector-graphics-television-show-breaking-bad-png-18-5b754e1068c945.0272561515344143524292.jpg"
        width="25%"
        height="25%"
        //className="d-inline-block align-top"
        alt="Breaking Bad logo"
      />
      </Navbar.Brand>
    <Nav className="mr-auto">
        
    </Nav>
    <Form inline>
    <InputGroup className="mb-3">
      <FormControl type="text" onChange={this.onChangeInput}
        placeholder="Pesquise os personagens" className="mr" />
        
        <InputGroup.Append>
      <InputGroup.Text id="basic-addon2"><i class="material-icons">search</i></InputGroup.Text>
    </InputGroup.Append>
    </InputGroup>
    </Form>
  </Navbar>

  <Container>
  <Row className="justify-content-md-center">
  
      { this.state.charactersList.map((character) => {
        return (
       
          <Card style={{ width: '14rem', margin:'0.6em' }}>
          <Badge pill variant="primary" style={{position: 'absolute', top: '0.8em',
              right:'-0.5em', textAlign: 'center', display:'inline-block'}}>
            {character.status}
          </Badge>
          <Card.Img variant="top" src={character.img} alt={character.name}  style={{ maxWidth: '100%', width: '150', height: '70'}} />
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
   </Container>
   </> );
  }
}

export default BreakingBad;