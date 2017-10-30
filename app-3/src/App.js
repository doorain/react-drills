import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      array: ["hello dude", "whats's up bro?", "see ya"],
      filteredList:''
    }

  }
  updatedList(change){
    this.setState({filteredList: change})
  }

  render() {
    let x = this.state.array.filter( (element, index) => {
      return element.includes( this.state.filteredList);
    }).map( (element, index) => {
      return <h2>{ element }</h2>

    })

    return (
      <div className="App">
        <input onChange={ (e) => this.updatedList(e.target.value)} />

        {x}
      </div>
    );
  }
}

export default App;
