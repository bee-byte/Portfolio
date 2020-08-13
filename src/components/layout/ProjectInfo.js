import React, { Fragment } from 'react';
import Projects from '../layout/Projects';

const ProjectData = [
  {
    name: 'Contact-Keeper',
    image: 'https://i.postimg.cc/dtcQYn3S/contact-keeper.png',
    link: 'https://github.com/bee-byte/Contact-Keeper',
  },
  {
    name: 'Github-Finder',
    image: 'https://i.postimg.cc/y8wvQJv9/github-finder.png',
    link: 'https://github.com/bee-byte/Github-Finder',
  },
  {
    name: 'IT-Logger',
    image: 'https://i.postimg.cc/4yLD2zLZ/it-logger.png',
    link: 'https://github.com/bee-byte/IT-Logger',
  },
  {
    name: 'Ecommerce-site',
    image: 'https://i.postimg.cc/fRRR2K8t/ecommerce-imh.png',
    link: 'https://sport-inc.herokuapp.com/',
  },
];

const ProgressData = () => {
  return (
    <Fragment>
      <div className="rows">
        <div className="ProjectData" style={{ display: 'flex' }}>
          {ProjectData.map((project) => (
            <Projects project={project} />
          ))}
        </div>
      </div>
    </Fragment>
  );
};
export default ProgressData;
