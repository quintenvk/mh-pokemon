import propTypes from 'prop-types';
import React from 'react';
import Photo from './UI/Photo';
import Title from './UI/Title';

const PokeViewer = ({ name, photo, border }) => {
  if (name && photo) {
    return (
      <React.Fragment>
        <Photo src={photo} alt="Pokemon sprite" border={border} />
        <Title>{name}</Title>
      </React.Fragment>
    );
  }
  return null;
};

PokeViewer.propTypes = {
  border: propTypes.bool,
  photo: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
};

PokeViewer.defaultProps = {
  border: false,
};

export default PokeViewer;
