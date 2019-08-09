//defining data types for your properties

import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
   render() {
      return (
         <div>
            <h1> Hello, {this.props.name} </h1>
            <h3>Array: {this.props.propArray}</h3>
            <h3>Bool: {this.props.propBool ? "True..." : "False..."}</h3>
            <h3>Func: {this.props.propFunc(2018)}</h3>
            <h3>Number: {this.props.propNumber}</h3>
            <h3>String: {this.props.propString}</h3>
         </div>
      );
   }
}
App.propTypes = {
   name: PropTypes.string,
   propArray: PropTypes.array.isRequired,
   propBool: PropTypes.bool.isRequired,
   propFunc: PropTypes.func,
   propNumber: PropTypes.number,
   propString: PropTypes.string,
};
App.defaultProps = { //note that data types are enforced here
   name: 'cpp students rock',
   propArray: [1, 2, 3, 4, 5, 6, 7],
   propBool: false,
   propFunc: function(e) {
      return e
   },
   propNumber: 105,
   propString: "here we go now!!!!@@@@"
}
export default App;
