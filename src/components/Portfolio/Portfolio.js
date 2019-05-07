import React, { Component } from 'react';

import PortfolioCard from './PortfolioCard/PortfolioCard';

import './Portfolio.css';

export default class Portfolio extends Component {
  render() {
    const projectIterator = projects.map(project => {
      return (
        <PortfolioCard
          key={project.name}
          image={project.image}
          name={project.name}
          description={project.description}
          github={project.github}
          deployment={project.deployment}
        />
      );
    });

    return (
      <div className='Portfolio'>
        <h1 className='heading heading-large underline--blue'>Projects</h1>
        <div className='portfolio-grid'>
          {/* <PortfolioCard />
          <PortfolioCard />
          <PortfolioCard />
          <PortfolioCard />
          <PortfolioCard />
          <PortfolioCard /> */}
          {projectIterator}
        </div>
      </div>
    );
  }
}

// Projects that will be used: devconnector, natours, trillo, nexter, burger-builder, react-ecommerce
const projects = [
  {
    name: 'Dev Connector',
    image: './images/devconnector_logo.png',
    description:
      'Connect with other developers using this social media application. Built with MERN stack',
    github: 'https://github.com/gavinquirk/devconnector',
    deployment: 'https://gq-devconnector.herokuapp.com/'
  },
  {
    name: 'Natours',
    image: './images/natours_logo.png',
    description:
      'A landing page for a nature tour company, it uses modern CSS attributes and transitions',
    github: 'https://github.com/gavinquirk/natours',
    deployment: 'https://gavinquirk.github.io/natours/'
  },
  // {
  //   name: 'Trillo',
  //   image: './images/trillo_logo.png',
  //   description:
  //     'A page for a hotel booking company. It utilizes CSS flex-box for a clean and responsive display on mobile devices',
  //   github: 'https://github.com/gavinquirk/Trillo',
  //   deployment: 'https://gavinquirk.github.io/Trillo/'
  // },
  {
    name: 'Nexter',
    image: './images/nexter_logo.png',
    description:
      'A page for a high-end real estate company. Using CSS Grid, it allows for a responsive mobile design and image gallery',
    github: 'https://github.com/gavinquirk/nexter',
    deployment: 'https://gavinquirk.github.io/nexter/'
  }
  // {
  //   name: 'Burger Builder',
  //   image: './images/burger_builder_logo.png',
  //   description:
  //     'Create a customized burger and add it to your cart. Created with React and data stored in Google Firebase',
  //   github: 'https://github.com/gavinquirk/burger-builder',
  //   deployment: 'https://react-burger-builder-35e0d.firebaseapp.com/'
  // },
  // {
  //   name: 'Phone Finder',
  //   image: './images/phone_finder_logo.png',
  //   description: 'Add phones to your cart, and checkout using PayPal testing',
  //   github: 'https://github.com/gavinquirk/react-ecommerce',
  //   deployment: 'http://www.gavinquirk.com'
  // }
];
