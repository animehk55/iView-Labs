import React, { Component } from 'react';
import{
        BrowserRouter as Router,
        Route
      } from 'react-router-dom';

import { Navbar,
         Nav,
         NavItem
        } from 'react-bootstrap';

import './App.css';

import Smart_Tracking from './iView/Smart_Tracking';
import Home from './iView/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Navbar inverse collapseOnSelect>
  <Navbar.Header>
    <Navbar.Brand>
      <a href="#iView Labs">iView</a>
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
    <Nav>
      <NavItem eventKey={1} href="#">
        Smart Tracking
      </NavItem>
      <NavItem eventKey={2} href="#">
        Smart Travel
      </NavItem>
      <NavItem eventKey={3} href="#">
        Loyalty Aggrregator
      </NavItem>
      <NavItem eventKey={4} href="#">
        Smart HealthCare
      </NavItem>
    </Nav>  
    <Nav pullRight>
      <NavItem eventKey={1} href="#">
        Login
      </NavItem>
      <NavItem eventKey={2} href="#">
        Google Login
      </NavItem>
      <NavItem eventKey={3} href="#">
        Facebook Login
      </NavItem>
    </Nav>
  </Navbar.Collapse>
</Navbar>;
        <Router>
          <div>
            <Route exact path="/" component={ Home } />
            <Route exact path="/Smart_Tracking" component={ Smart_Tracking }/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
