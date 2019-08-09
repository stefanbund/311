import React from 'react';

class App extends React.Component {
   render() {
     return (
       <div>
       <Header/>
       <Content/>
       </div>
     );
   }
}

class Header extends React.Component {
  render() {
    return(
      <div>
      <h1>Header presents...</h1>
      </div>
    );
  }
}

class Content extends React.Component {
  render(){
    return(
      <div>
      <h2>Content should appear here...</h2>
      <p>standard content appears here as paragraph</p>
      </div>
    );
  }
}

export default App; //makes available to other classes/Components
