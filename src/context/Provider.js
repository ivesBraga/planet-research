/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import PlanetsContext from './Context';
import getPlanets from '../services/StarWarsAPI';

function Provider({ children }) {
  // planetas e uma cópia
  const [originalPlanetsData, setOriginalPlanetsData] = useState([]);
  const [planetsData, setPlanetsData] = useState([]);

  // input de pesquisa dinâmico
  const [planetSearch, setPlanetSearch] = useState('');

  // filtros
  const [numberFilter, setNumberFilter] = useState(0);
  const [columnValue, setColumnValue] = useState('population');
  const [comparisonFilter, setComparisonFilter] = useState('maior que');

  // salvando todos os filtros num local só

  const [saveFilters, setSaveFilters] = useState([]);
  const [columnOptions, setColumnOptions] = useState(['population', 'orbital_period',
    'diameter', 'rotation_period', 'surface_water']);

  function removeColumnValue() {
    setColumnOptions(columnOptions.filter((options) => options !== columnValue));
    console.log(columnOptions);
  }

  const deleteFilter = (filtro) => {
    setSaveFilters((prevState) => prevState.filter((filter) => filter !== filtro));
    setPlanetsData(originalPlanetsData);
  };

  const removeAllFilters = () => {
    setSaveFilters([]);
  };

  useEffect(() => {
    setColumnValue(columnOptions[0]);
  }, [columnOptions]);

  function saveFiltersSetup() {
    setSaveFilters([
      ...saveFilters,
      { column: columnValue, comparison: comparisonFilter, value: numberFilter },
    ]);
    removeColumnValue();
  }

  const planetFilter = () => {
    if (saveFilters.length > 0) {
      saveFilters.map((planetsFilter) => {
        const { column, comparison, value } = planetsFilter;

        if (comparison === 'maior que') {
          const greaterNum = planetsData.filter(
            (planet) => Number(planet[column]) > Number(value),
          );
          setPlanetsData(greaterNum);
        } else if (comparison === 'menor que') {
          const smallerNum = planetsData.filter(
            (planet) => Number(planet[column]) < Number(value),
          );
          setPlanetsData(smallerNum);
        } else {
          const filterEqual = planetsData.filter(
            (planet) => Number(planet[column]) === Number(value),
          );
          setPlanetsData(filterEqual);
        }
        return 'Error';
      });
    } else {
      return setPlanetsData(originalPlanetsData);
    }
  };

  useEffect(() => {
    planetFilter();
  }, [saveFilters]);

  // fetch dos planetas
  useEffect(() => {
    const fetchData = async () => {
      const data = await getPlanets();
      setPlanetsData(data);
      setOriginalPlanetsData(data);
    };
    fetchData();
  }, []);

  // função pra mostrar os planetas dinamicamente
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
    numberFilter,
    setNumberFilter,
    columnOptions,
    setColumnOptions,
    comparisonFilter,
    setComparisonFilter,
    saveFilters,
    setSaveFilters,
    saveFiltersSetup,
    setColumnValue,
    columnValue,
    deleteFilter,
    removeAllFilters,
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
