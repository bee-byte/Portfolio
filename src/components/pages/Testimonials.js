import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <div className="row">
      <ul>
        <li>
          <div className="card small">
            <div class="col s10 m4">
              <h2 class="header">Thapelo Tsotesi</h2>
              <div class="card horizontal">
                <div class="card-image">
                  <img src="https://lorempixel.com/100/190/nature/5" alt="" />
                </div>
                {/* <div class="card-stacked"> */}
                <div class="card-content">
                  <p>
                    I am a very simple card. I am good at containing small bits
                    of information.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* </div> */}
        </li>
        <li>
          <div class="col s10 m4">
            <h2 class="header">Sergio Pillay</h2>
            <div class="card horizontal">
              <div class="card-image">
                <img src="https://lorempixel.com/100/190/nature/7" alt="" />
              </div>
              <div class="card-stacked">
                <div class="card-content">
                  <p>
                    I am a very simple card. I am good at containing small bits
                    of information.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="col s10 m4">
            <h2 class="header">Saadiq Ryklief</h2>
            <div class="card horizontal">
              <div class="card-image">
                <img src="https://lorempixel.com/100/190/nature/6" alt="" />
              </div>
              <div class="card-stacked">
                <div class="card-content">
                  <p>
                    I am a very simple card. I am good at containing small bits
                    of information.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

// Testimonials.defaultProps = {
//   image: 'image.jepg',
//   name: '',
//   position: '',
//   testimonialMessage: '',
// };

// Testimonials.propTypes = {
//   image: PropTypes.object.isRequired,
//   name: PropTypes.string.isRequired,
//   position: PropTypes.string.isRequired,
//   testimonialMessage: PropTypes.string.isRequired,
// };

export default Testimonials;
