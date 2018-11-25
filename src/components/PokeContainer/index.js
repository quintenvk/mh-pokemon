import React from 'react';
import propTypes from 'prop-types';
import { getPokemon } from '../../IO/read';
import extractor from '../_shared/movesExtracter';
import { learnMethods } from '../../tokens';

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

  toggleMove(move) {
    const { selectedPokemon } = this.state;
    if (!selectedPokemon) {
      throw new Error('No pokemon selected');
    }

    const { selectedMoves } = selectedPokemon;
    const extractedMove = extractor(move);
    const moveSelectedCheck = candidate => {
      const extractedCandidate = extractor(candidate);
      return (
        extractedCandidate.name === extractedMove.name &&
        extractedCandidate.learnMethod === extractedMove.learnMethod
      );
    };
    const moveInArray = selectedMoves.find(moveSelectedCheck);

    if (moveInArray) {
      this.removeMove(extractedMove);
    } else {
      this.addMove(move);
    }
  }

  addMove(move) {
    const { selectedPokemon } = this.state;
    const extractedMove = extractor(move);
    const { selectedMoves } = selectedPokemon;
    const movesFilter = candidate => extractor(candidate).learnMethod === extractedMove.learnMethod;
    const selectedMovesContainsType = selectedMoves.filter(movesFilter).length > 0;

    if (selectedMovesContainsType && extractedMove.learnMethod !== learnMethods.LEVEL_UP) {
      return;
    }
    this.updateMoves([...selectedMoves, move]);
  }

  removeMove(extractedMove) {
    const { selectedPokemon } = this.state;
    const { selectedMoves } = selectedPokemon;
    const moveFinder = candidate => {
      const extractedCandidate = extractor(candidate);
      return (
        extractedCandidate.name === extractedMove.name &&
        extractedCandidate.learnMethod === extractedMove.learnMethod
      );
    };
    const index = selectedMoves.findIndex(moveFinder);
    const newSelectedMoves = [...selectedMoves.slice(0, index), ...selectedMoves.slice(index + 1)];
    this.updateMoves(newSelectedMoves);
  }

  updateMoves(selectedMoves) {
    this.setState(state => {
      if (state.selectedPokemon.selectedMoves.length < 4) {
        return {
          ...state,
          selectedPokemon: {
            ...state.selectedPokemon,
            selectedMoves,
          },
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
      toggleMove: move => this.toggleMove(move),
    });
  }
}

export default PokeContainer;
