import React from 'react';
import Downshift from 'downshift';
import { getAllPokemon } from '../../IO/read';
import Input from '../_shared/UI/Input';
import Label from '../_shared/UI/Label';
import ListItem from '../_shared/UI/ListItem';
import DownshiftResults from './UI/DownshiftResults';
import DownshiftWrapper from './UI/DownshiftWrapper';

// avoid having to make multiple fetches
const pokemons = [];
getAllPokemon()
  .then(response => response.json())
  // don't overwrite the array to avoid
  // wrong references in memory
  .then(({ results }) => pokemons.push(...results));

const PokeSelector = ({ onSelectValue }) => (
  <Downshift onChange={onSelectValue} itemToString={pokemon => (pokemon ? pokemon.name : '')}>
    {({
      getInputProps,
      getRootProps,
      getLabelProps,
      getItemProps,
      isOpen,
      highlightedIndex,
      inputValue,
    }) => (
      <DownshiftWrapper
        {...getRootProps({
          refKey: `innerRef`,
        })}
      >
        <Label {...getLabelProps()}>Pick a pokemon</Label>
        <Input {...getInputProps()} />
        {isOpen ? (
          <DownshiftResults>
            {pokemons &&
              pokemons.length &&
              inputValue &&
              pokemons
                .filter(({ name }) => name.indexOf(inputValue) > -1)
                .map(({ name, url }, index) => (
                  <ListItem
                    {...getItemProps({
                      key: name,
                      item: { name, url },
                    })}
                    highlighted={highlightedIndex === index}
                  >
                    {name}
                  </ListItem>
                ))}
          </DownshiftResults>
        ) : null}
      </DownshiftWrapper>
    )}
  </Downshift>
);

PokeSelector.defaultProps = {
  onSelectValue: () => {},
};

export default PokeSelector;
