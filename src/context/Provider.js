import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import PlanetsContext from './Context';
import getPlanets from '../services/StarWarsAPI';

function Provider({ children }) {
  const [planetsData, setPlanetsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPlanets();
      setPlanetsData(data);
      console.log(planetsData);
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const contextValue = {
    planetsData,
    setPlanetsData,
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
