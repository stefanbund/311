//data marshalling via array, mapping and tabling
import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data:
      [
        {
          "id":1,
          "name":"Foo",
          "age":20
        },
        {
          "id":2,
          "name":"THIS",
          "age":30
        },
        {
          "id":1,
          "name":"THAT",
          "age":40
        },
        {
          "id":1,
          "name":"OTHER",
          "age":50
        }
      ] //end object
    }
  }
render() {
  //example of jsx in motion: using the props variable in tbody
  return(
    <div>
      <Header/>
        <table>
          <tbody>
            {this.state.data.map((person, i) => <TableRow key = {i}
            data = {person} />)}
          </tbody>
        </table>
    </div>
  );
  }
}

class Header extends React.Component {
  render(){
    return(
      <div>
      <h1> Header Component appearing....</h1>
      </div>
    );
  }
}

class TableRow extends React.Component {
  render(){
    return(
      <tr>
        <td>{this.props.data.id}</td>
        <td>{this.props.data.name}</td>
        <td>{this.props.data.age}</td>
      </tr>
    );
  }
}

export default App; //makes available to other classes/Components
