import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor() {
      super()
      this.state = {
        text: ''
      }
    }

  updateText(newText){
  this.setState({
    text: newText
    })
  }

  render() {
    return (
      <div className="App">
        <input onChange={ (e) => this.updateText(e.target.value)} />
        <p>{this.state.text}</p>
      </div>
    )
  }

}

export default App;






////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
//
// class App extends Component {
//   constructor() {
//     super();
//
//     this.state = {
//       message: ""
//     }
//   }
//
//   handleChange( value ) {
//     this.setState({ message: value })
//   }
//
//   render() {
//     return (
//       <div className="App">
//         <input onChange={ (e) => this.handleChange( e.target.value ) } type="text" />
//         <p>{ this.state.message }</p>
//       </div>
//     );
//   }
// }
//
// export default App;
