import React from 'react';
import PropTypes from 'prop-types';

const Projects = ({ project }) => {
  return (
    <div className="project-container">
      <h3 className="name-name">{project.name}</h3>
      <a href={project.link}>
        <img className="img-fluid" src={project.image} alt={project.name} />
      </a>
      <p link={project.link}></p>
    </div>
  );
};

Projects.propTypes = {
  project: PropTypes.object.isRequired,
};

export default Projects;
