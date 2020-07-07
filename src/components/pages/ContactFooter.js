import React from 'react';

const ContactFooter = () => {
  return (
    <footer className="page-footer">
      <div className="container">
        <div className="row">
          <div classNamNe="contact-details">
            <p classN="grey-text text-lighten-4">
              Contact Number : 0662334105
              <br />
              Email: brittneybee82@gmail.com
            </p>
          </div>
          <div className="profile-links">
            <ul>
              <li>
                <i className="fa fa-github" aria-hidden="true" />
                <a href="https://github.com/bee-byte">Github</a>
              </li>
              <li>
                <i className="fa fa-linkedin-square" aria-hidden="true" />
                <a
                  className="grey-text text-lighten-3"
                  href="https://www.linkedin.com/in/brittney-bowers-8517151a6/"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;
