import React, { Component } from 'react';

import NavBar from './components/Navigation/NavBar';
import Lander from './components/Lander/Lander';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <NavBar />
        <Lander />
        {/* <h1>App</h1> */}
      </div>
    );
  }
}

export default App;
