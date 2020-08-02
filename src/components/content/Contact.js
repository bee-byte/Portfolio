import React, { Fragment } from 'react';
import './Contact.css';
import ContactFooter from '../layout/ContactFooter';
import '../layout/ContactFooter.css';

const Contact = () => {
  return (
    <Fragment>
      <div className="page">
        <div className="form-container">
          <h2>Need a Developer ? Get In Touch .</h2>
          <br />
          <form
            className="myForm"
            action="https://formspree.io/xnqggpkk"
            method="POST"
          >
            <p htmlFor="first_name">First Name</p>
            <input id="first_name" type="text" className="validate" />
            <br />
            <p htmlFor="last_name">Last Name</p>
            <input id="last_name" type="text" className="validate" />
            <br />
            <p htmlFor="email">Email</p>
            <input id="email" type="email" className="validate" />
            <br />
            <p htmlFor="textarea">Message</p>
            <br />
            <textarea name="message" cols="30" rows="10" required></textarea>

            <div className="center">
              <button className="submitButton" type="submit">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
      <ContactFooter />
    </Fragment>
  );
};
export default Contact;
