//basic use of props, focused on props basic
//referenced in main.js

import React from 'react';

class App extends React.Component{
  render(){
    //will reference in main.js
    return(
      <div>
      <h1>{this.props.headerProp}</h1>
      <h2>{this.props.contentProp}</h2>
      </div>
    );
  }
}
App.defaultProps = {//remembner the commas, below
  headerProp: "THIS IS WHAT I PLAN TO PUT IN MY HEADER ELEMENT",
  contentProp: "AND THIS IS MY CONTENT / CONTENT"
}
export default App;
