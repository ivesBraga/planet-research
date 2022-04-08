import React, { useContext, useEffect, useState } from 'react';
import Context from '../context/Context';

export default function SearchFilters() {
  const {
    numberFilter,
    setNumberFilter,
    columnOptions,
    comparisonFilter,
    setComparisonFilter,
    saveFiltersSetup,
    setColumnValue,
    columnValue,
    saveFilters,
    deleteFilter,
    removeAllFilters,
  } = useContext(Context);

  const comparisonOptions = ['maior que', 'menor que', 'igual a'];
  const originalColumnOptions = [
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
  ];

  const [selectColumnFilter, setSelectColumnFilter] = useState(originalColumnOptions[0]);

  useEffect(() => {
    console.log(saveFilters);
  }, [saveFilters]);

  return (
    <div>

      <select
        data-testid="column-filter"
        value={ columnValue }
        onChange={ ({ target }) => setColumnValue(target.value) }
      >
        {columnOptions.map((value) => <option key={ value }>{value}</option>)}
      </select>

      <select
        data-testid="comparison-filter"
        value={ comparisonFilter }
        onChange={ ({ target }) => setComparisonFilter(target.value) }
      >
        {comparisonOptions.map((value) => <option key={ value }>{value}</option>)}
      </select>

      <input
        type="number"
        data-testid="value-filter"
        value={ numberFilter }
        onChange={ ({ target }) => setNumberFilter(target.value) }
      />

      <button
        type="button"
        data-testid="button-filter"
        onClick={ saveFiltersSetup }
      >
        Filtrar!
      </button>

      <section>
        <select
          data-testid="column-sort"
          value={ selectColumnFilter }
          onChange={ ({ target }) => setSelectColumnFilter(target.value) }
        >
          { originalColumnOptions.map((option, index) => (
            <option
              value={ option }
              key={ index }
              id={ option }
            >
              { option }
            </option>
          )) }
        </select>
        <label htmlFor="AscInput">
          <input
            name="AscInput"
            id="AscInput"
            value="ASC"
            type="radio"
            onChange={ ({ target }) => setInputOrder(target.value) }
            data-testid="column-sort-input-asc"
          />
        </label>
        <label htmlFor="DescInput">
          <input
            name="DescInput"
            id="DescInput"
            value="DESC"
            type="radio"
            onChange={ ({ target }) => setInputOrder(target.value) }
            data-testid="column-sort-input-desc"
            checked={ inputOrder === 'DESC' }
          />
        </label>
        <button
          type="button"
          onClick={ () => handleOrderState({
            colunm: selectSortColunm, sort: inputOrder,
          }) }
          data-testid="column-sort-button"
        >
          Ordenar
        </button>
      </section>

      <button
        type="button"
        data-testid="button-remove-filters"
        onClick={ removeAllFilters }
      >
        Remover Filtros
      </button>

      {
        saveFilters.map((filtros, i) => {
          const { column, comparison, value } = filtros;
          return (
            <div key={ i } data-testid="filter">

              <span>
                {
                  `${column} || ${comparison} || ${value}`
                }
              </span>

              <button
                type="button"
                onClick={ () => deleteFilter(filtros) }
              >
                X
              </button>

            </div>
          );
        })
      }

    </div>
  );
}
