import propTypes from 'prop-types';
import React from 'react';
import Photo from './UI/Photo';
import Title from './UI/Title';

const PokeViewer = ({ name, photo }) => {
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

PokeViewer.propTypes = {
  photo: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
};

export default PokeViewer;
