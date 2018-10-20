import React from 'react';
import PokeViewer from '../PokeViewer';
import CardBackground from './UI/CardBackground';

const SquadCard = ({ pokemon, moves }) => {
  if (pokemon) {
    const type = pokemon.types.filter(candidate => candidate.slot === 1).pop().name;
    return (
      <CardBackground type={type}>
        {pokemon && <PokeViewer name={pokemon.name} photo={pokemon.sprites.front_default} />}
      </CardBackground>
    );
  }
  return <CardBackground />;
};

export default SquadCard;
