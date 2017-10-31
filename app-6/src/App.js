import React, { Component } from 'react';
import './App.css';
import Todo from './Todo.js'

class App extends Component {
  constructor(){
    super()
    this.state = {
      list: [],
      input:''
    }

    this.addTask = this.addTask.bind(this);
  }

  newInput(val){
    this.setState({
      input: val
    })
  }
  addTask(){
    this.setState({
      list: [...this.state.list, this.state.input],
      input: ''
    })
  }

  render() {
    let list = this.state.list.map( ( e, i ) => {
      return (
        <Todo key={ i } task={ e } />
      )
    })

    return (
      <div className="App">
        <h1>MY AWESOME TODO LIST:</h1>
        <div>
          <input 
            value={this.state.input}
            placeholder="Type Here"
            onChange={(event) => this.newInput( event.target.value)} />
          <button onClick={this.addTask}>ADD</button>
        </div>
      <br />
         { list }
        
      </div>
    );
  }
}

export default App;
