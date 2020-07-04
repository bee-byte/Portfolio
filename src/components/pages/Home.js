import React, { Fragment } from 'react';
import './Home.css';
import image from './image.jpeg';

const Home = () => {
  return (
    <Fragment>
      <div className="homeContainer">
        <img className="home-image" src={image} alt="img" />
        <div className="homeContent">
          <h1 className="home-heading">Hi . I'm Brittney Bowers</h1>
          <p className="home-text">A junior frontend developer</p>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
