// Importantando o React
import React from "react";
//importando a pagina de error
import ErrorPage from "./error/ErrorPage";
// Importando os components necessárias da lib react-bootstrap
import { Container } from 'react-bootstrap';
// Importanto o component <Switch /> e <Route /> da nossa Lib de rotas
import { Switch, Route } from 'react-router-dom'
import BreakingBad from "./breaking-bad/BreakingBad";

const Main = () => (
  <main>
    <Container>
      <Switch>
        <Route exact path='/' component={BreakingBad}/>
  	    <Route component={ErrorPage}/>
      </Switch>
    </Container>
  </main>  
);

export default Main;