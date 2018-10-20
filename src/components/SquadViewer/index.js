import propTypes from 'prop-types';
import React from 'react';
import SquadCard from '../SquadCard';

const SquadViewer = ({ squad }) => {
  const squadCards = squad || [];
  while (squadCards.length < 6) {
    squadCards.push(null);
  }

  return (
    <SquadGrid>
      {squad.map(pokemon => (
        <SquadCard pokemon={pokemon} />
      ))}
    </SquadGrid>
  );
};

SquadViewer.propTypes = {};

export default SquadViewer;
