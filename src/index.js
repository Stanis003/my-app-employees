import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Header} from './App'



//const elem = React.createElement('h2', {className:"greetings"},'Hello World' );

ReactDOM.render(
  <StrictMode>
    <App/>
  </StrictMode>,
  document.getElementById('root')
);

