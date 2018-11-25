import React from 'react';
import propTypes from 'prop-types';
import PokeViewer from '../PokeViewer';
import CardBackground from './UI/CardBackground';
import Move from './UI/Move';

const SquadCard = ({ pokemon, moves, onClick }) => {
  if (pokemon) {
    const type = pokemon.types.filter(candidate => candidate.slot === 1).pop().type.name;

    return (
      <CardBackground type={type} onClick={onClick}>
        {pokemon && <PokeViewer name={pokemon.name} photo={pokemon.sprites.front_default} />}
        {moves && moves.map(move => <Move key={move.move.name}>{move.move.name}</Move>)}
      </CardBackground>
    );
  }
  return <CardBackground />;
};

SquadCard.defaultProps = {
  onClick: () => {},
};

SquadCard.propTypes = {
  onClick: propTypes.func,
  moves: propTypes.array,
  pokemon: propTypes.object,
};

export default SquadCard;
