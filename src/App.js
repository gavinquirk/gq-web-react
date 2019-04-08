import React, { Component } from 'react';

import NavBar from './components/Navigation/NavBar';
import Lander from './components/Lander/Lander';
import Introduction from './components/Introduction/Introduction';
import Portfolio from './components/Portfolio/Portfolio';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <NavBar />
        <Lander />
        <Introduction />
        <Portfolio />
      </div>
    );
  }
}

export default App;
