import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <div className="row">
      <ul>
        <li>
          <div className="card horizontal">
            <div className="card-image">
              <img src="https://i.postimg.cc/jjRnNxy2/lecturer.jpg" alt="" />
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <h3 className="header">Thapelo Tsotesi</h3>
                <p>
                  Brittney Bowers is a Life Choices Academy students for 2020.
                  One thing you should know about Brittney is her ability to
                  learn new programming languages and great communication
                  skills.
                </p>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="card horizontal">
            <div className="card-image">
              <img src="https://i.postimg.cc/KY5vytkv/student.jpg" alt="" />
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <h3 className="header">Sergio Pillay</h3>
                <p>
                  Brittney is a dedicated and creative developer who strives to
                  produce the best quality in all she does.This makes Brittney
                  an asset to any team.
                </p>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="card horizontal">
            <div className="card-image">
              <img src="https://i.postimg.cc/KY5vytkv/student.jpg" alt="" />
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <h3 className="header">Ryan Barron</h3>
                <p>
                  Brittney is a strong willed and she never backs down from a
                  challenge.She gives best in all she does. When it comes to her
                  skill as a developer she truly is a masterclass with her
                  unique design style and effortless functionality she would
                  only be an asset to any company.
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
