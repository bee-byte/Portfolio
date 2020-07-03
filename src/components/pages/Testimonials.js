import React from 'react';
import PropTypes from 'prop-types';

const Testimonials = ({ image, name, position, testimonialMessage }) => {
  return (
    <div className="testimonial-card">
      <img src={image} alt="" />
      <h1> {name} </h1>
      <h4>{position} </h4>
      <p>{testimonialMessage} </p>
    </div>
  );
};

Testimonials.defaultProps = {
  image: '',
  name: '',
  position: '',
  testimonialMessage: '',
};

Testimonials.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  testimonialMessage: PropTypes.string.isRequired,
};

export default Testimonials;
