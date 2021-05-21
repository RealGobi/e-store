
import HTTP from '../PokemonApi';

const getDitto = () => {
  return HTTP.get('/pokemon/ditto')
};

const searchPokemon = (pokeName: string) => {
  return HTTP.get(`/pokemon/${pokeName}`)
};

const get100Poke = () => {
  return HTTP.get('/pokemon?limit=100&offset=200/')
};


export default {searchPokemon, getDitto, get100Poke};