import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TicTacToe from './TicTacToe';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<TicTacToe />, document.getElementById('root'));

// If you want your TicTacToe to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
