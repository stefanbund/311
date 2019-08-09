import React from 'react';

class App extends React.Component {
   render() {
     var myStyle = {
       fontSize:24,
       color:'#FF0000'
     }
      return (
         <div>
            <h1 style = {myStyle}>HI THERE</h1>
         </div>
      );
   }
}
export default App; //makes available to other classes/Components
