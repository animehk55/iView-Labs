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
    </Nav>
      <NavItem eventKey={3} href="#">
        Loyalty Aggregator
      </NavItem>
      <NavItem eventKey={4} href="#">
        Smart HealthCare
      </NavItem>
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
            <Route exact path="/Smart_Tracdfasfadsking_" component={ Smart_Tracking }/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
