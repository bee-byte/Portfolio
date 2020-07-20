import React from 'react';
import PropTypes from 'prop-types';

const Skill = ({ skill }) => {
  return (
    <div className="skill-container">
      <h3 className="skill-name">{skill.name}</h3>
      <img className="skill-image" src={skill.image} alt={skill.name} />
      <div class="progress">
        <div class="determinate" style={{ width: skill.percent }}></div>
      </div>
    </div>
  );
};

Skill.propTypes = {
  skill: PropTypes.object.isRequired,
};

export default Skill;
