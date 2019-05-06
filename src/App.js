import React, { Component } from 'react';

import NavBar from './components/Navigation/NavBar';
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/Toolbar/SideDrawer/SideDrawer';
import Backdrop from './components/Toolbar/Backdrop/Backdrop';
import Lander from './components/Lander/Lander';
import Introduction from './components/Introduction/Introduction';
import Skills from './components/Skills/Skills';
import Portfolio from './components/Portfolio/Portfolio';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

import './App.css';

class App extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  closeSidebarHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let backDrop;
    if (this.state.sideDrawerOpen) {
      backDrop = <Backdrop click={this.closeSidebarHandler} />;
    }
    return (
      <div className='App'>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer
          show={this.state.sideDrawerOpen}
          close={this.closeSidebarHandler}
        />
        {backDrop}
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
