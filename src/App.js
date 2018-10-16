import React, { Component } from 'react';
import { Navbar,
         Nav,
         NavItem,
         NavDropdown,
         MenuItem
        } from 'react-bootstrap';
import image1 from './images/1.jpg';
import image2 from './images/2.jpg';
import image3 from './images/3.JPG';
import image4 from './images/4.jpg';
import image5 from './images/5.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Navbar inverse collapseOnSelect>
  <Navbar.Header>
    <Navbar.Brand>
      <a href="#brand">React-Bootstrap</a>
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
    <Nav>
      <NavItem eventKey={1} href="#">
        Link
      </NavItem>
      <NavItem eventKey={2} href="#">
        Link
      </NavItem>
      <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
        <MenuItem eventKey={3.1}>Action</MenuItem>
        <MenuItem eventKey={3.2}>Another action</MenuItem>
        <MenuItem eventKey={3.3}>Something else here</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey={3.3}>Separated link</MenuItem>
      </NavDropdown>
    </Nav>
    <Nav pullRight>
      <NavItem eventKey={1} href="#">
        Link Right
      </NavItem>
      <NavItem eventKey={2} href="#">
        Link Right
      </NavItem>
    </Nav>
  </Navbar.Collapse>
</Navbar>;
        <header className="App-header">
         <img src={image1} alt="logo" width="100%" />
         <img src={image2} alt="logo" width="100%" />
         <img src={image3} alt="logo" width="100%" />
         <img src={image4} alt="logo" width="100%" />
         <img src={image5} alt="logo" width="100%" />
          <img src={image1} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
