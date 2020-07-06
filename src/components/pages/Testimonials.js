import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <div className="row">
      <ul>
        <li>
          <div className="card horizontal">
            <div className="card-image">
              <img src="https://lorempixel.com/100/190/nature/5" alt="" />
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <h3 className="header">Thapelo Tsotesi</h3>
                <p>
                  Brittney Bowers is a Life Choices Academy students for 2020.
                  One thing you should know about Brittney is her ability to
                  learn new programming languages and greate communication
                  skills.
                </p>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="card horizontal">
            <div className="card-image">
              <img src="https://i.postimg.cc/8kh9hJZV/Student1.jpg" alt="" />
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <h3 className="header">Sergio Pillay</h3>
                <p>
                  I am a very simple card. I am good at containing small bits of
                  information.
                </p>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="card horizontal">
            <div className="card-image">
              <img src="https://lorempixel.com/100/190/nature/6" alt="" />
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <h3 className="header">Oslin</h3>
                <p>
                  I am a very simple card. I am good at containing small bits of
                  information.
                </p>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Testimonials;
