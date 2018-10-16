import React, { Component } from 'react';

import image1 from './images/1.jpg';
import image2 from './images/2.jpg';
import image3 from './images/3.JPG';
import image4 from './images/4.jpg';
import image5 from './images/5.png';
import logo from './images/logo.png';
import './App.css';

class Home extends Component {
  render() {
    return (
      <div className="App">
      
      <header className="App-header">
         <img src={image1} alt="logo" width="100%" height="645px" />
         <img src={image2} alt="logo" width="100%" height="690px" />
         <img src={image3} alt="logo" width="100%" height="690px" />
         <img src={image4} alt="logo" width="100%" height="690px" />
         <img src={image5} alt="logo" width="100%" height="690px" />
         <br />
         <br />
         <img src={logo} className="App-logo" alt="logo"  width="100px" height="100px" />
         <br />
         <br />
          <a
            className="App-link"
            href="http://iviewlabs.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            iView Homepage
          </a>
        </header>
      </div>
    );
  }
}

export default Home;