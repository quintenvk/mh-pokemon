import React from 'react';
import propTypes from 'prop-types';
import MovesTypeButton from './UI/MovesTypeButton';
import List from '../../UI/List';
import ListItem from '../../UI/ListItem';

class MovesSelector extends React.Component {
  static MOVES = {
    LEVEL_UP: 'level-up',
    MACHINE: 'machine',
    TUTOR: 'tutor',
  };

  state = {
    learnMethod: null,
  };

  setMoveFilter(learnMethod) {
    this.setState({ learnMethod });
  }

  render() {
    const { moves, onSelectMove } = this.props;
    const { learnMethod } = this.state;
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
            .filter(
              candidate =>
                candidate.version_group_details[0].move_learn_method.name === learnMethod,
            )
            .map(move => (
              <ListItem
                onClick={() => onSelectMove(move)}
                key={`${move.move.name}-${move.version_group_details[0].move_learn_method.name}`}
              >
                {move.move.name}
              </ListItem>
            ))}
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
