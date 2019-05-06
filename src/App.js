import React, { Component } from 'react';

import NavBar from './components/Navigation/NavBar';
import Lander from './components/Lander/Lander';
import Introduction from './components/Introduction/Introduction';
import Skills from './components/Skills/Skills';
import Portfolio from './components/Portfolio/Portfolio';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        {/* <NavBar /> */}
        <Lander />
        <Introduction />
        <Skills />
        <Portfolio />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
