import React, { Component } from 'react';
import './resources/styles.css';

import Header from './components/header_footer/Header';
import Featured from './components/featured';
import Venue from './components/venueNfo';
import Highlight from './components/Highlights';
import Pricing from './components/pricing';
import Location from './components/location';
import Footer from './components/header_footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App" style={{ height:"1500px",background:'cornflowerblue'}}>
          <Header/>
          <Featured/>
          <Venue/>
          <Highlight/>
          <Pricing/>
          <Location/>
          <Footer/>
      </div>
    );
  }
}

export default App;
