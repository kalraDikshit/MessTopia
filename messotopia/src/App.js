import React, { Component } from 'react';
import './App.css';
import UserProfile from './components/userProfile';
import { Switch,Route,withRouter} from 'react-router-dom';
import Menu from './components/menu';
import About from './components/about';
import Home from './components/home';

// import {Navbar, Button} from 'react-bootstrap';
import CustomNavBar from './components/navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CustomNavBar user = {UserProfile} />
        <Switch>   
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/menu" component={Menu} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
