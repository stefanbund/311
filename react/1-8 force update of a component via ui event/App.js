//foreced update of the state of a component with ui event

import React from 'react';

class App extends React.Component {
   constructor() {
      super();
      this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
   };
   forceUpdateHandler() {
      this.forceUpdate();
   };
   render() {
      return (
         <div>
            <button onClick = {this.forceUpdateHandler}>FORCE UPDATE via ui</button>
            <h4>Random number: {Math.random()}</h4>
         </div>
      );
   }
}
export default App;
