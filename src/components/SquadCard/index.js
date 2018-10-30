import React from 'react';
import PokeViewer from '../PokeViewer';
import CardBackground from './UI/CardBackground';
import Move from './UI/Move';

const SquadCard = ({ pokemon, moves }) => {
  if (pokemon) {
    const type = pokemon.types.filter(candidate => candidate.slot === 1).pop().type.name;
    console.log(moves);
    return (
      <CardBackground type={type}>
        {pokemon && <PokeViewer name={pokemon.name} photo={pokemon.sprites.front_default} />}
        {moves && moves.map(move => <Move key={move.move.name}>{move.move.name}</Move>)}
      </CardBackground>
    );
  }
  return <CardBackground />;
};

export default SquadCard;
