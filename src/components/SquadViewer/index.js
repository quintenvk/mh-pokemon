import propTypes from 'prop-types';
import React from 'react';

const SquadViewer = ({ name, photo }) => {
  if (name && photo) {
    return (
      <React.Fragment>
        <Photo src={photo} alt="Pokemon sprite" />
        <Title>{name}</Title>
      </React.Fragment>
    );
  }
  return null;
};

SquadViewer.propTypes = {
  photo: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
};

export default SquadViewer;
