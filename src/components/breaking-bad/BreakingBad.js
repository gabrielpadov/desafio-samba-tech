// Importando o React
import React from 'react';
// Importando axios
import axios from 'axios';
// Importando os components react-bootstrap
import {Card, InputGroup, Form, FormControl, Navbar}  from 'react-bootstrap';
import {Container, Row, Pagination,Badge} from 'react-bootstrap';


const API_URL = 'https://www.breakingbadapi.com/api';

class BreakingBad extends React.Component {
  constructor(){
    super();
  this.state = {
      characters: [],
      charactersList: [],
      search: '',
      active: 1,
      items: [],
      offset: 0,
      limit: 8,
      sizeCharacters: 57,
      numPage: 0,
      page: 1
    }
    this.onChangeInput = this.onChangeInput.bind(this);
    this.onChangePagination = this.onChangePagination.bind(this);
  }

  componentDidMount() {
    this.loadCharacters();   
    this.onPagination(); 
  }

  async loadCharacters() {
    const url = `${API_URL}/characters`;

      axios.get(url+'?limit='+this.state.limit+'&offset='+this.state.offset).then(response => {
      this.setState({ characters: response.data, charactersList: response.data
         });
          console.log(response.data)
          // console.log(this.sizeCharacters);
          // this.onPagination();
        }).catch(error => {
          console.log(error.response) 
      });
     
    }

    onChangeInput(e){
      e.preventDefault();   
         const updatedList = this.state.characters.filter((item) => item.name.toLowerCase().search(
             e.target.value.toLowerCase()) !== -1);
         this.setState({
             charactersList: updatedList,
             search: e.target.value
         })
     }


  async onPagination(){
      let numPages = parseInt((this.state.sizeCharacters/this.state.limit));
      this.setState({numPage: numPages});
      // console.log(parseInt(numPage));
    for (let number = 1; number <=numPages+1; number++) {
     this.state.items.push(
        <Pagination.Item key={number} 
          onClick={(e) => this.onChangePagination(number,e)}>
          {number}
        </Pagination.Item>,
      );
    }
  }    

  onChangePagination(num,e){
    e.preventDefault();                                                                                                                                                                                                                                         
    // console.log(num);
    this.setState({offset: ((num-1)*this.state.limit), page: num, search: ''});

      this.loadCharacters();
     
    }
  

    render() {
      return (
      <div>
    <Navbar  style={{backgroundColor: 'black'}} variant="dark">
      <Navbar.Brand>
      <a href="/">
      <img 
        src="https://yt3.ggpht.com/a/AGF-l79rcSfCz8vufHWw5DP4cTMYGvBpu135UlyfWw=s900-c-k-c0xffffffff-no-rj-mo"
        width="20%"
        height="20%"
        className="d-inline-block align-top"
        alt="Breaking Bad logo"
      /></a>
      </Navbar.Brand>
    
    <Form inline>
    <InputGroup className="mb-6">
      <FormControl type="text" onChange={this.onChangeInput}
        placeholder="Pesquise os personagens" className="mr" />     
        <InputGroup.Append > 
      <InputGroup.Text style={{backgroundColor: 'black'}} id="basic-addon2"><i style={{color: 'white'}} className="material-icons">search</i></InputGroup.Text>
    </InputGroup.Append>
    </InputGroup>
    </Form>
    
  </Navbar>
      
  <Container>
  <Row style={{margin: '0.4em'}}>
        { this.state.search && <p style={{color: 'grey'}}>Você pesquisou por "{this.state.search}"</p>}
  </Row>
    <Pagination style={{ margin: '0.8rem'}} className="justify-content-md-center" size="sm">{this.state.items}</Pagination>
     <Row className="justify-content-md-center">

      { this.state.charactersList.map((character) => {
          
        return (
       
          <Card bg='dark' style={{ width: '14rem', margin:'0.6em' }}>
          <Badge pill variant={character.status === "Alive"?"success": character.status === "Deceased"?"danger":"warning"} 
              style={{position: 'absolute', top: '0.8em',
              right:'-0.5em', textAlign: 'center', display:'inline-block'}}>
            {character.status}
          </Badge>
          <Card.Img variant="top" src={character.img} alt={character.name}  
            style={{  width: 'auto',maxHeight: '15rem'}} />
          <Card.Body style={{color: 'white'}}>
            <Card.Title>{character.name}</Card.Title>
            <Card.Text>
              <span style={{ fontSize: '0.8rem', marginTop: '0.4rem'}} ><i style={{ marginRight: '0.3rem'}}  className="small material-icons">star </i>{character.birthday}</span><br/>
              <span style={{ fontSize: '0.6rem'}} >{character.occupation.toString() }</span>
            </Card.Text>
          </Card.Body>
        </Card>
         
   ) })}
   </Row>
   <Pagination className="justify-content-md-center" size="sm">{this.state.items}</Pagination>
   </Container>
   </div> );
  }
}

export default BreakingBad;



