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
