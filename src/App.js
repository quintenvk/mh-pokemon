import React from 'react';
import { hot } from 'react-hot-loader';
import MainWrapper from './components/App/UI/MainWrapper';
import MainRow from './components/App/UI/MainRow';
import SquadContainer from './components/SquadContainer/index';
import SquadViewer from './components/SquadViewer';
import PokeConfigurator from './components/App/Views/PokeConfigurator';

const App = () => (
  <SquadContainer>
    {({ addPokemonToSquad, removePokemonFromSquad, squad }) => (
      <MainWrapper>
        <MainRow>
          <PokeConfigurator onConfiguredPokemon={addPokemonToSquad} />
        </MainRow>
        <MainRow>
          <SquadViewer squad={squad} onSquadMemberClick={removePokemonFromSquad} />
        </MainRow>
      </MainWrapper>
    )}
  </SquadContainer>
);

export default hot(module)(App);
