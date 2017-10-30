import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      array: ["hello dude", "whats's up bro?", "see ya"]
    }

  }

  render() {
    let x = this.state.array.map( (element, index) => {
      return (
        <h2>{ element }</h2>
      )
    })

    return (
      <div className="App">

        {x}
      </div>
    );
  }
}

export default App;
