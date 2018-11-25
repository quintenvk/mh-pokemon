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

  removePokemon(pokemon) {
    const { squad } = this.state;
    const indexToDelete = squad.findIndex(c => c.name === pokemon.name);
    if (indexToDelete > -1) {
      this.setState({
        squad: [...squad.slice(0, indexToDelete), ...squad.slice(indexToDelete + 1)],
      });
    }
  }

  render() {
    const { squad } = this.state;
    const { children } = this.props;
    return children({
      squad,
      addPokemonToSquad: pokemon => this.addPokemon(pokemon),
      removePokemonFromSquad: pokemon => this.removePokemon(pokemon),
    });
  }
}

SquadContainer.propTypes = {
  children: propTypes.func.isRequired,
};

export default SquadContainer;
