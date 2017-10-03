import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



class App extends Component {
  render() {
    return (
    <div class = "App">
      <header class = "App-header">
        <img src = {logo} class="App-logo"/>
        <h1 class = "App-title">Hello</h1>
        <p>Just testing</p>
      </header>
      <div class="App-intro">{this.props.message}</div>
    </div>
    );
  }
}

class Login extends Component{
  render(){
    return (
      <div class = "App">
        <form onsubmit = "">
          <div class = "">
            <input type = "text" placeholder = "Username" />
          </div>
          <div class= " ">
            <input type = "password" placeholder = "Password" />
          </div>
          <div class = "">
            <button>Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export {
  App,
  Login
}