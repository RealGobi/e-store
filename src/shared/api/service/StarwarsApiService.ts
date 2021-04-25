
import HTTP from '../Api';

const getStarShip = () => {
  return HTTP.get('/starships/')
};

const getPlanets = () => {
  return HTTP.get('/planets/')
};

const getOneCharacter = (num: number) => {
  return HTTP.get(`/people/${num}/`)
};

export default {getStarShip, getOneCharacter, getPlanets};