import React from 'react';
import propTypes from 'prop-types';
import PokeContainer from '../../PokeContainer/index';
import PokeSelector from '../../PokeSelector/index';
import PokeStatsTable from '../../PokeStatsTable/index';
import PokeSpecificGrid from '../UI/PokeSpecificGrid';
import PokeViewer from '../../PokeViewer/index';
import MovesSelector from '../../MovesSelector/index';
import MovesViewer from '../../MovesViewer';
import ColumnGrid from '../../_shared/UI/ColumnGrid';

const PokeConfigurator = ({ onConfiguredPokemon }) => (
  <PokeContainer>
    {({ selectPokemon, selectedPokemon, addMove }) => (
      <PokeSpecificGrid>
        <div>
          <PokeSelector onSelectValue={selectPokemon} />
          {selectedPokemon && (
            <PokeViewer
              border
              name={selectedPokemon.name}
              photo={selectedPokemon.sprites.front_default}
            />
          )}
        </div>
        <div>
          <ColumnGrid columns={2}>
            {selectedPokemon && <PokeStatsTable stats={selectedPokemon.stats} />}
            {selectedPokemon && <MovesViewer moves={selectedPokemon.selectedMoves} />}
          </ColumnGrid>
          <button
            onClick={() => onConfiguredPokemon(selectedPokemon)}
            type="button"
            disabled={!selectedPokemon || selectedPokemon.selectedMoves.length === 0}
          >
            Add to squad
          </button>
        </div>
        <div>
          {selectedPokemon && (
            <MovesSelector moves={selectedPokemon.moves} onSelectMove={addMove} />
          )}
        </div>
      </PokeSpecificGrid>
    )}
  </PokeContainer>
);

PokeConfigurator.propTypes = {
  onConfiguredPokemon: propTypes.func.isRequired,
};

export default PokeConfigurator;
