import React from 'react';

const ProgressBar = (props) => {
  const Filler = (props) => {
    return <div className="filler" style={{ width: `${props.percentage}%` }} />;
  };
  return (
    <ProgressBar>
      <div className="progress-bar">
        <Filler percentage={props.percentage} />
      </div>
    </ProgressBar>
  );
};

export default ProgressBar;
