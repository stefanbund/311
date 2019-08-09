// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App.js';
//
// ReactDOM.render(<App document.getElementById('app'));
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

ReactDOM.render(<App/>, document.getElementById('app'));

setTimeout(() => {
   ReactDOM.unmountComponentAtNode(document.getElementById('app'));}, 10000);
