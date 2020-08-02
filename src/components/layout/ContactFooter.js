import React from 'react';
import '../layout/ContactFooter.css';

const ContactFooter = () => {
  return (
    <footer className="page-footer">
      <div className="container">
        <p>
          <i class="fa fa-mobile" aria-hidden="true"></i>
          Contact Number : 0662334105
          <br />
          <i class="fa fa-envelope" aria-hidden="true"></i>
          Email Address : brittneybee82@gmail.com
        </p>
        <i className="fa fa-github" aria-hidden="true" />
        <a href="https://github.com/bee-byte">Github</a>
        <br />
        <i className="fa fa-linkedin-square" aria-hidden="true" />
        <a href="https://www.linkedin.com/in/brittney-bowers-8517151a6/">
          LinkedIn
        </a>
      </div>
    </footer>
  );
};

export default ContactFooter;
