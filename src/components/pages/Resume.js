import React from 'react';
import './Resume.css';
import ProgressBar from './ProgressBar';

import { CardSlide } from 'react-card-slide/dist';

const Data = [
  { bgcolor: '#6a1b9a', completed: 60 },
  { bgcolor: '#00695c', completed: 30 },
  { bgcolor: '#ef6c00', completed: 53 },
];

const Resume = () => {
  return (
    <CardSlide
      items={[
        {
          cardName: 'Personal Details',
          cardDescription: (
            <p>
              Brittney Bowers
              <br />
              Date of Birth: 01.05.1998
              <br />
              Female
              <br />
              Bonteheuwel, Cape Town
              <br />
              South African
              <br />
              Willing to relocate: No
              <br />
              Criminal record: No
              <br />
              Are 0.you blacklisted or have any credit issues: No"
              <br />
            </p>
          ),
          showBodyImage: true,
          bodyImage: 'src/components/pages/image.jpeg',
        },
        {
          cardName: 'About Me',
          cardDescription: (
            <p>
              I am a very open-minded and hardworking individual. I am a family
              person and extremely goal driven. I believe that dedication and
              giving more than your best is key to success. I love web
              development and I wish to build my career in this field.I was
              first exposed to a computer at the age of 12. Ever since then I’ve
              always had a passion to try and figure out how software is created
              and how it works. I haven’t done a coding course before however, I
              believe that dedication and giving more than your best is key.
              That has always been my motivation.'
            </p>
          ),
          showBodyImage: true,
          bodyImage: 'image.jpg',
        },
        {
          cardName: 'Things im passionate about:',
          cardDescription: (
            <p>
              Playing Video Games <br />
               Reading
              <br />
               Watching movies
              <br />
               Playing around with code
              <br /> Spending time with my family
            </p>
          ),
          showBodyImage: true,
          bodyImage: 'https://via.placeholder.com/950x350',
        },
        {
          cardName: 'Education and Work Experience :',
          cardDescription: (
            <p>
              Matric : Heideveld Secondary School, 2015 <br />
              Company: RCS
              <br />
              Period: 1 year and 7months
              <br />
              Role: Customer Service Agent
              <br />
              Duties:
              <br />
              ● Dealing with card and loan queries telephonically and
              electronically
              <br />
              ● Resolving as many queries as possible
              <br />
              ● Sending letter requests via email (settlement, paid-up letters
              etc.)
              <br />● Providing payment details telephonically and
              electronically
            </p>
          ),
          showBodyImage: true,
          bodyImage: 'https://via.placeholder.com/950x350',
        },
        {
          cardName: 'More Work Experience :',
          cardDescription: (
            <p>
              Company: Capita
              <br />
              Period: 5 months
              <br />
              Role: Customer Service Advisor
              <br />
              Duties:
              <br />
              ● Dealing with queries regarding handsets and mobile phones in the
              UK
              <br />
              ● Resolving queries as fast as possible
              <br />
              Company: Freedom Technologies Period: 3 months Role: Sales Agent
              Duties: (Maximum 4) ● Calling customers to complete funeral policy
              applications telephonically. ● Dealing with warm sales calls.
              (customers who already showed interest in a product)
            </p>
          ),
          showBodyImage: true,
          bodyImage: 'https://via.placeholder.com/950x350',
        },
        {
          cardName: 'Programming Languages I know :',
          cardDescription: (
            <div className="ProgressBar">
              {Data.map((item, idx) => (
                <ProgressBar
                  key={idx}
                  bgcolor={item.bgcolor}
                  completed={item.completed}
                />
              ))}
            </div>
          ),
        },
      ]}
    />
  );
};

export default Resume;
