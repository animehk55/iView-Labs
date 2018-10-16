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
import Smart_Travel from './iView/Smart_Travel';
import Loyalty_Aggregator from './iView/Loyalty_Aggregator';
import Smart_Healthcare from './iView/Smart_Healthcare';
import Home from './iView/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Navbar inverse collapseOnSelect>
  <Navbar.Header>
    <Navbar.Brand>
      <a href="/">iView</a>
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
    <Nav>
      <NavItem eventKey={1} href="/Smart_Tracking_">
        Smart Tracking
      </NavItem>
      <NavItem eventKey={2} href="/Smart_Travel_">
        Smart Travel
      </NavItem>
      <NavItem eventKey={3} href="/Loyalty_Aggregator_">
        Loyalty Aggrregator
      </NavItem>
      <NavItem eventKey={4} href="/Smart_Healthcare_">
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
</Navbar>
        <Router>
          <div>
            <Route exact path="/" component={ Home } />
            <Route exact path="/Smart_Tracking_" component={ Smart_Tracking } />
            <Route exact path="/Smart_Travel_" component={ Smart_Travel } />
            <Route exact path="/Loyalty_Aggregator_" component={ Loyalty_Aggregator } />
            <Route exact path="/Smart_Healthcare_" component={ Smart_Healthcare } />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
