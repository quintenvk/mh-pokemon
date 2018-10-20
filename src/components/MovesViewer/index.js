import propTypes from 'prop-types';
import React from 'react';
import Move from './UI/Move';
import MoveGrid from './UI/MoveGrid';
import extractor from '../_shared/movesExtracter';
import MoveHeader from './UI/MoveHeader';
import MoveText from './UI/MoveText';

const MovesViewer = ({ moves }) => {
  if (moves.length) {
    return (
      <MoveGrid columns={2}>
        {moves.map(move => {
          const { name, learnMethod } = extractor(move);
          return (
            <Move key={`${name}-${learnMethod}`}>
              <MoveHeader>{learnMethod}</MoveHeader>
              <MoveText>{name}</MoveText>
            </Move>
          );
        })}
      </MoveGrid>
    );
  }
  return (
    <React.Fragment>
      You need to select at least one move from the panel on the right before you can save!
    </React.Fragment>
  );
};

MovesViewer.propTypes = {
  moves: propTypes.array.isRequired,
};

export default MovesViewer;
