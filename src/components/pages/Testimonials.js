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

            <div className="card-content">
              <h3 className="header">Thapelo Tsotesi</h3>
              <p>
                I am a very simple card. I am good at containing small bits of
                information.
              </p>
            </div>
          </div>
        </li>
        <li>
          <div className="card horizontal">
            <div className="card-image">
              <img src="https://lorempixel.com/100/190/nature/7" alt="" />
            </div>
            <div className="card-content">
              <h3 className="header">Sergio Pillay</h3>
              <p>
                I am a very simple card. I am good at containing small bits of
                information.
              </p>
            </div>
          </div>
        </li>
        <li>
          <div className="card horizontal">
            <div className="card-image">
              <img src="https://lorempixel.com/100/190/nature/6" alt="" />
            </div>

            <div className="card-content">
              <h3 className="header">Oslin</h3>
              <p>
                I am a very simple card. I am good at containing small bits of
                information.
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Testimonials;
