import React, { Component } from 'react';
import react from 'react-dom';
import './App.css';
import UserProfile from './components/userProfile';


// import {Navbar, Button} from 'react-bootstrap';
import {CustomNavBar} from './components/navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CustomNavBar user = {UserProfile} />
      </div>
    );
  }
}

export default App;
