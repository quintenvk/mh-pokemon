import React from 'react';
import { hot } from 'react-hot-loader';
import PokeContainer from './components/PokeContainer/index';
import PokeSelector from './components/PokeSelector/index';
import PokeStatsTable from './components/PokeStatsTable/index';
import MainWrapper from './UI/MainWrapper';
import MainRow from './UI/MainRow';
import PokeSpecificGrid from './UI/PokeSpecificGrid';
import PokeViewer from './components/PokeViewer/index';
import MovesSelector from './components/MovesSelector/index';
import SquadContainer from './components/SquadContainer/index';
import MovesViewer from './components/MovesViewer';
import ColumnGrid from './components/_shared/UI/ColumnGrid';
import SquadViewer from './components/SquadViewer';

const App = () => (
  <SquadContainer>
    {({ addPokemonToSquad, squad }) => (
      <MainWrapper>
        <MainRow>
          <PokeContainer>
            {({ selectPokemon, selectedPokemon, addMove }) => (
              <PokeSpecificGrid>
                <div>
                  <PokeSelector onSelectValue={pokemon => selectPokemon(pokemon)} />
                  {selectedPokemon && (
                    <PokeViewer
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
                    onClick={() => addPokemonToSquad(selectedPokemon)}
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
        </MainRow>
        <MainRow>
          <SquadViewer squad={squad} />
        </MainRow>
      </MainWrapper>
    )}
  </SquadContainer>
);

export default hot(module)(App);
