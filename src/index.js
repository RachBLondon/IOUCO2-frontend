// import _ from 'lodash';
// import App from './components/App';

// function component() {
//     let element = document.createElement('div');
  
//     // Lodash, currently included via a script, is required for this line to work
//     element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
//     return element;
//   }
  
// //   document.body.appendChild(component());

// document.body.appendChild(<App/>);

import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './components/App';
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
