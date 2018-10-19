import React from 'react';
import propTypes from 'prop-types';
import { getPokemon } from '../../IO/read';

class PokeContainer extends React.Component {
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
      this.setState({ selectedPokemon: { sprites, stats, types, moves, name, selectedMoves: [] } }),
    );
  }

  addMove(move) {
    const { selectedPokemon } = this.state;
    if (!selectedPokemon) {
      throw new Error('No pokemon selected');
    }

    this.setState(state => {
      if (state.selectedPokemon.selectedMoves.length < 4) {
        return {
          ...state,
          selectedMoves: [...state.selectedPokemon.selectedMoves, move],
        };
      }
      return state;
    });
  }

  render() {
    const { children } = this.props;
    return children({
      ...this.state,
      selectPokemon: url => this.setPokemon(url),
      addMove: move => this.addMove(move),
    });
  }
}

export default PokeContainer;
