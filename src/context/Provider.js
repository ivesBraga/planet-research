/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import PlanetsContext from './Context';
import getPlanets from '../services/StarWarsAPI';

function Provider({ children }) {
  const [originalPlanetsData, setOriginalPlanetsData] = useState([]);
  const [planetsData, setPlanetsData] = useState([]);
  const [planetSearch, setPlanetSearch] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPlanets();
      setPlanetsData(data);
      setOriginalPlanetsData(data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const filtredPlanets = originalPlanetsData.filter(
      (planet) => planet.name.toLowerCase().includes(planetSearch.toLowerCase()),
    );
    setPlanetsData(filtredPlanets);
  }, [planetSearch]);

  const contextValue = {
    planetsData,
    setPlanetsData,
    planetSearch,
    setPlanetSearch,
  };

  return (
    <PlanetsContext.Provider
      value={ contextValue }
    >
      {children}
    </PlanetsContext.Provider>
  );
}

Provider.propTypes = {
  children: propTypes.objectOf(propTypes.any).isRequired,
};
export default Provider;
