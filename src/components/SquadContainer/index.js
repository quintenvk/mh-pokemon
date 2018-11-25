import React from 'react';
import propTypes from 'prop-types';

class SquadContainer extends React.Component {
  state = {
    squad: [],
  };

  addPokemon(pokemon) {
    this.setState(state => {
      if (state.squad.length < 6) {
        return {
          squad: [...state.squad, pokemon],
        };
      }
      return state;
    });
  }

  render() {
    const { squad } = this.state;
    const { children } = this.props;
    return children({
      squad,
      addPokemonToSquad: pokemon => this.addPokemon(pokemon),
    });
  }
}

SquadContainer.propTypes = {
  children: propTypes.func.isRequired,
};

export default SquadContainer;
