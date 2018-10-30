import propTypes from 'prop-types';
import React from 'react';
import SquadCard from '../SquadCard';
import ColumnGrid from '../_shared/UI/ColumnGrid';

const SQUAD_SIZE = 6;
const SquadViewer = ({ squad }) => {
  const squadCards = [...squad] || [];
  while (squadCards.length < SQUAD_SIZE) {
    squadCards.push(null);
  }

  return (
    <ColumnGrid columns={SQUAD_SIZE}>
      {squadCards.map((
        pokemon,
        index, // eslint-disable-next-line
      ) => (
        // eslint-disable-next-line
        <SquadCard
          pokemon={pokemon}
          moves={(pokemon && pokemon.selectedMoves) || null}
          key={`pokemon-${index}`}
        />
      ))}
    </ColumnGrid>
  );
};

SquadViewer.propTypes = {};

export default SquadViewer;
