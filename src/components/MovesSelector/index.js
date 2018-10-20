import React from 'react';
import propTypes from 'prop-types';
import MovesTypeButton from './UI/MovesTypeButton';
import List from '../../UI/List';
import ListItem from '../../UI/ListItem';
import extractor from '../_shared/movesExtracter';

class MovesSelector extends React.Component {
  static MOVES = {
    LEVEL_UP: 'level-up',
    MACHINE: 'machine',
    TUTOR: 'tutor',
  };

  state = {
    selectedLearnMethod: null,
  };

  setMoveFilter(selectedLearnMethod) {
    this.setState({ selectedLearnMethod });
  }

  render() {
    const { moves, onSelectMove } = this.props;
    const { selectedLearnMethod } = this.state;
    return (
      <React.Fragment>
        <MovesTypeButton onClick={() => this.setMoveFilter(MovesSelector.MOVES.LEVEL_UP)}>
          Level-up
        </MovesTypeButton>
        <MovesTypeButton onClick={() => this.setMoveFilter(MovesSelector.MOVES.MACHINE)}>
          Machine
        </MovesTypeButton>
        <MovesTypeButton onClick={() => this.setMoveFilter(MovesSelector.MOVES.TUTOR)}>
          Tutor
        </MovesTypeButton>
        <List border fontSize="small">
          {moves
            .filter(candidate => extractor(candidate).learnMethod === selectedLearnMethod)
            .map(move => {
              const { name, learnMethod } = extractor(move);
              return (
                <ListItem onClick={() => onSelectMove(move)} key={`${name}-${learnMethod}`}>
                  {move.move.name}
                </ListItem>
              );
            })}
        </List>
      </React.Fragment>
    );
  }
}

MovesSelector.propTypes = {
  moves: propTypes.arrayOf(propTypes.shape({})).isRequired,
  onSelectMove: propTypes.func.isRequired,
};

export default MovesSelector;
