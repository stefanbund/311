//stateful component, exchanging data via properties, states, and this

import React from 'react';

class App extends React.Component {
  constructor(props){//establish exportable properties
    super(props);

    this.x = { //define x as you see fit, variables named by you
      intro: "exportable x...",
      lead: "exportable lead..."
    }
  }//end constructor
  render(){
    //utilize the properties accurately within a call to this
    return(
      <div>
      <h1>{this.x.intro}</h1>
      <h2>{this.x.lead}</h2>
      </div>
    );
  }//end render portion
}//end Component
export default App;
