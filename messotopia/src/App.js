import React, { Component } from 'react';
import './App.css';
import UserProfile from './components/userProfile';
import {Switch,Route} from 'react-router-dom';
import Menu from './components/menu';
import About from './components/about';
import Home from './components/home';
import StudentDashboard from './components/stDashboard';

// import {Navbar, Button} from 'react-bootstrap';
import CustomNavBar from './components/navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CustomNavBar user = {UserProfile} history = {this.props.history} />
          <Switch> 
            {/* <Route exact path={"/"} component={CustomNavBar}> */}
              <Route exact path={"/"} component={Home} />
              <Route path={"/about"} component={About} />
              <Route path={"/menu"} component={Menu} />
              <Route path={"/profile"} component={StudentDashboard} />     
            {/* </Route> */}
          </Switch>
      </div>
    );
  }
}

export default App;
