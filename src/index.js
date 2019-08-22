import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// Importando a nossa Lib de rotas
import { BrowserRouter } from 'react-router-dom'

// Renderizando o component APP (com seus sub componenets e etc) em
// <div id="root"></div> do index.html
// Obs: O <BrowserRouter> envolta de <App /> //
//para que as rotas fiquem disponíveis no APP
ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
