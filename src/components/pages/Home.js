import React, { Fragment } from 'react';
import './Home.css';
import image from './image.jpeg';

const Home = () => {
  return (
    <Fragment>
      <h1>Hi . I'm Brittney Bowers</h1>
      <p>A junior frontend developer</p>
      <img src={image} alt="img" />
    </Fragment>
  );
};

export default Home;
