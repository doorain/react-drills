import React, { Component} from 'react';


class Login extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: ''
    }
 this.loginAlert = this.loginAlert.bind(this)
  }
  userUpdate(user){
    this.setState({
      username: user
    })
  }
  passUpdate(pass){
    this.setState({
      password: pass
    })
  }
  loginAlert(){
    alert("Username is "+ this.state.username + ". Password is " + this.state.password + ".")
  }
  render(){
    return(
      <div className="black">
        <input onChange={ (event) => this.userUpdate( event.target.value)} />

        <input onChange={ (event => this.passUpdate( event.target.value))} />
        <button onClick={this.loginAlert}>Login</button>
      </div>
    )
  }
}
export default Login
