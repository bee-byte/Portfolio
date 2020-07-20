import React, { Fragment } from 'react';
import Skill from './Skill';

const skills = [
  {
    name: 'Python',
    image: 'https://i.postimg.cc/DfW0Sj8t/python.png',
    value: '70%',
  },
  {
    name: 'JavaScript',
    image: 'https://i.postimg.cc/LXgS8WND/JS.png',
    value: '50%',
  },
  {
    name: 'React',
    image: 'https://i.postimg.cc/x184Qzsy/REACT.png',
    value: '50%',
  },
  {
    name: 'HTML',
    image: 'https://i.postimg.cc/d1wRsMsP/html.png',
    value: '75%',
  },
  {
    name: 'CSS',
    image: 'https://i.postimg.cc/3rLjTbzV/CSS.png',
    value: '75%',
  },
];

const ProgressData = () => {
  return (
    <Fragment>
      <div className="rows">
        <div className="Progress Bar" style={{ display: 'flex' }}>
          {skills.map((skill) => (
            <Skill skill={skill} />
          ))}
        </div>
      </div>
    </Fragment>
  );
};
export default ProgressData;
