const endPoint = 'https://swapi-trybe.herokuapp.com/api/planets/';

const getPlanets = async () => {
  const response = await fetch(endPoint);
  const data = await response.json();
  return data.results;
};

export default getPlanets;
