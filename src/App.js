import React from 'react';
import { hot } from 'react-hot-loader';
import PokemonContainer from './components/PokemonContainer';
import PokeSelector from './components/PokeSelector';

const App = () => (
  <section>
    <div>
      <PokemonContainer>
        {({ selectPokemon, selectedPokemon }) => (
          <div>
            <PokeSelector onSelectValue={pokemon => selectPokemon(pokemon)} />
            {selectedPokemon && <h1>{selectedPokemon.name.toUpperCase()}</h1>}
            {selectedPokemon && (
              <img src={selectedPokemon.sprites.front_default} alt="Pokemon sprite" />
            )}
          </div>
        )}
      </PokemonContainer>
    </div>
  </section>
);

export default hot(module)(App);
