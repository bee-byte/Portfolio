import React from 'react';
import PropTypes from 'prop-types';

const Resume = ({ title }) => {
  return (
    <div>
      <h1>{title}</h1>
      <div className="slider">
        <ul className="slides">
          <li>
            <img src="https://lorempixel.com/580/250/nature/1" alt="" />
            <div className="caption center-align">
              <h3>
                Brittney Bowers <br />
                01.05.1998
              </h3>
              <h5 className="light grey-text text-lighten-3">
                Female
                <br />
                Location: Bonteheuwel, Cape Town
                <br />
                Nationality: South African
                <br />
                Willing to relocate: No
                <br />
                Criminal record: No
                <br />
                Blacklisted or any credit issues: No
              </h5>
            </div>
          </li>
          <li>
            <img src="https://lorempixel.com/580/250/nature/2" alt="" />
            <div className="caption left-align">
              <h3>About Me</h3>
              <h5 className="light grey-text text-lighten-3">
                I am a very open-minded and hardworking individual. I am a
                family person and extremely goal- driven. I believe that
                dedication and giving more than your best is key to success. I
                love web development and I wish to build my career in this
                field.
                <br />I was first exposed to a computer at the age of 12. Ever
                since then I’ve always had a passion to tryand figure out how
                software is created and how it works. I haven’t done a coding
                course before however, I believe that dedication and giving more
                than your best is key. That has been my motivation.
              </h5>
            </div>
          </li>
          <li>
            <img src="https://lorempixel.com/580/250/nature/3" alt="" />
            <div className="caption right-align">
              <h3>Things Im passionate about :</h3>
              <h5 className="light grey-text text-lighten-3">
                Playing Video Games
                <br />
                Reading
                <br />
                Watching movies
                <br />
                Playing around with code
                <br />
                Spending time with my family
              </h5>
              <h3>Education</h3>
              <h5 className="light grey-text text-lighten-3">
                Matric : Heideveld Secondary School, 2015{' '}
              </h5>
            </div>
          </li>
          <li>
            <img src="https://lorempixel.com/580/250/nature/4" alt="" />
            <div className="caption center-align">
              <h3>Work Experience:</h3>
              <h5 class="light grey-text text-lighten-3">
                Company: RCS <br />
                Period: 1 year and 7months <br />
                Role: Customer Service Agent <br />
                Duties: <br />
                ● Dealing with card and loan queries telephonically and
                electronically <br />
                ● Resolving as many queries as possible <br />
                ● Sending letter requests via email (settlement, paid-up letters
                etc.) <br />● Providing payment details telephonically and
                electronically <br />
              </h5>
            </div>
          </li>
          <li>
            <img src="https://lorempixel.com/580/250/nature/1" alt="" />
            <div class="caption center-align">
              <h3>More Work Experience:</h3>
              <h5 className="light grey-text text-lighten-3">
                Company: Capita <br />
                Period: 5 months <br />
                Role: Customer Service Advisor <br />
                Duties: <br />
                ● Dealing with queries regarding handsets and mobile phones in
                the UK <br />
                ● Resolving queries as fast as possible <br />
                Company: Freedom Technologies <br />
                Period: 3 months <br />
                Role: Sales Agent <br />
                Duties: (Maximum 4) <br />
                ● Calling customers to complete funeral policy applications
                telephonically. <br />● Dealing with warm sales calls.
                (customers who already showed interest in a product)
              </h5>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

Resume.defaultProps = {
  title: 'Have a look !',
};

Resume.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Resume;
