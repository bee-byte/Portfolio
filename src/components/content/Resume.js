import React, { Fragment } from 'react';
import Skills from '../layout/Skills';
import ProjectInfo from '../layout/ProjectInfo';
import '../layout/Skills.css';
import './Resume.css';

import { CardSlide } from 'react-card-slide/dist';

const Resume = () => {
  return (
    <CardSlide
      items={[
        {
          cardName: 'Personal Details',
          cardDescription: (
            <Fragment>
              <h3 className="PersonalInfo">Who am I ?</h3>
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
                Are you blacklisted or have any credit issues: No
                <br />
              </p>
            </Fragment>
          ),
          showBodyImage: true,
          bodyImage: 'https://i.postimg.cc/287qRyyd/Home.jpg',
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
          bodyImage:
            'https://i.postimg.cc/HxbYwv70/Whats-App-Image-2020-06-26-at-2-43-43-PM.jpg',
        },
        {
          cardName: 'Things im passionate about:',
          cardDescription: (
            <p>
              Playing video games <br />
               Reading
              <br />
               Watching movies
              <br />
               Playing around with code
              <br /> Spending time with my family
            </p>
          ),
          showBodyImage: true,
          bodyImage: 'https://i.postimg.cc/G2RwCLHY/passionate.jpg',
        },
        {
          cardName: 'Education and Work Experience :',
          cardDescription: (
            <Fragment>
              <h4 className="Education">
                Matric : Heideveld Secondary School, 2015
              </h4>
              <br />
              <h3 className="Workplace">Company: RCS</h3>
              <br />
              <p>
                Role: Customer Service Agent
                <br />
                Duration: 1 year and 7months
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
            </Fragment>
          ),
          showBodyImage: true,
          bodyImage: 'https://i.postimg.cc/15jkzc8y/School-And-Work.jpg',
        },
        {
          cardName: 'More Work Experience :',
          cardDescription: (
            <Fragment>
              <h3 className="Workplace">Company: Capita</h3>
              <br />
              <p>
                Role: Customer Service Advisor
                <br />
                Duration: 5 months
                <br />
                Duties:
                <br />
                ● Dealing with queries regarding handsets and mobile phones in
                the UK
                <br />
                ● Resolving queries as fast as possible
                <br />
                <br />
                <h3 className="Workplace">Company: Freedom Technologies</h3>
                <br />
                Duration: 3 months Role: Sales Agent
                <br />
                Duties: ● Calling customers to complete funeral policy
                <br />
                applications telephonically. ● Dealing with warm sales calls.
                <br />
                (customers who already showed interest in a product)
              </p>
            </Fragment>
          ),
          showBodyImage: true,
          bodyImage: 'https://i.postimg.cc/63cSxdsJ/Work.jpg',
        },
        {
          cardName: 'Programming Languages I know :',
          cardDescription: <Skills />,
        },
        {
          cardName: 'My Projects :',
          cardDescription: <ProjectInfo />,
        },
      ]}
    />
  );
};

export default Resume;
