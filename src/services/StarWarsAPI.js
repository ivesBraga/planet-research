const endPoint = 'https://swapi-trybe.herokuapp.com/api/planets/';

const getPlanets = async () => {
  const response = await fetch(endPoint);
  const planets = await response.json();
  return planets;
};

export default getPlanets;
