import React from 'react';
import ContactFooter from './ContactFooter';

const Contact = () => {
  return (
    <div>
      <form
        className="myForm"
        action="https://formspree.io/xnqggpkk"
        method="POST"
      >
        <label htmlFor="first_name">First Name</label>
        <input name="first_name" type="text" required />
        <br />
        <label htmlFor="last_name">Last Name</label>
        <input name="last_name" type="text" required />
        <br />
        <label htmlFor="email">Email</label>
        <input name="email" type="email" required />
        <br />
        <label htmlFor="message">Message</label>
        <br />
        <textarea name="message" cols="30" rows="10" required></textarea>
        <div className="center">
          <button type="submit">Send</button>
        </div>
      </form>
    </div>
  );
};
export default Contact;
