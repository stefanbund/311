//DOM SEARCH, EVENT DRIVEN, ADJUIST A DOM ELEMENT VIA UI EVENT

import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
   constructor() {
      super();
      this.findDomNodeHandler = this.findDomNodeHandler.bind(this);
   };
   findDomNodeHandler() {
      var myDiv = document.getElementById('myDiv');
      ReactDOM.findDOMNode(myDiv).style.color = 'pink';
      //try to adjkust the text content on press
   }
   render() {
      return (
         <div>
            <button onClick = {this.findDomNodeHandler}>FIND DOME NODE</button>
            <div id = "myDiv">you found me if i am pink</div>
         </div>
      );
   }
}
export default App;
