export const getAllPokemon = () => fetch('https://pokeapi.co/api/v2/pokemon/');
export const getPokemon = url => fetch(url).then(response => response.json());
