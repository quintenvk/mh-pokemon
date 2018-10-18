import React from 'react';
import propTypes from 'prop-types';
import { getPokemon } from '../IO/read';

class PokemonContainer extends React.Component {
  state = {
    selectedPokemon: null,
  };

  static defaultProps = {
    children: () => {
      throw new Error('Function as a child is required here!');
    },
  };

  static propTypes = {
    children: propTypes.func,
  };

  setPokemon({ url, name }) {
    getPokemon(url).then(({ sprites, stats, types, moves }) =>
      this.setState({ selectedPokemon: { sprites, stats, types, moves, name } }),
    );
  }

  render() {
    const { children } = this.props;
    console.log(this.state);
    return children({
      ...this.state,
      selectPokemon: url => this.setPokemon(url),
    });
  }
}

export default PokemonContainer;
