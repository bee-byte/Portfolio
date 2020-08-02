import React, { Fragment } from 'react';
import './Home.css';

const Home = () => {
  return (
    <Fragment>
      <div className="page">
        <div className="homeContainer">
          <img
            classname="home-img"
            src="https://i.postimg.cc/hGyC5P8Z/Whats-App-Image-2020-06-26-at-3-02-46-PM.jpg"
            alt=""
          />
          <div className="homeContent">
            <h1 className="home-heading">Hi . I'm Brittney Bowers</h1>
            <p className="home-text">A junior frontend developer</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
