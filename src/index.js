import React from 'react';
import ReactDOM from 'react-dom';
// import './CriadosAutomaticamente/index.css';
// import App from './CriadosAutomaticamente/App';
import * as serviceWorker from './CriadosAutomaticamente/serviceWorker';

import Exercicios from './Exercicios/Exercicios'

ReactDOM.render(<Exercicios />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
