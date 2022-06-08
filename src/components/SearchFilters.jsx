import React, { useContext, useEffect, useState } from 'react';
import Context from '../context/Context';
import '../css/SearchFilters.css';

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
    setOrder,
  } = useContext(Context);

  const comparisonOptions = ['maior que', 'menor que', 'igual a'];
  const originalColumnOptions = [
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
  ];

  const [selectColumnFilter, setSelectColumnFilter] = useState(originalColumnOptions[0]);
  const [inputOrder, setInputOrder] = useState('');

  useEffect(() => {
    console.log(saveFilters);
  }, [saveFilters]);

  return (
    <div className="filtros">

      <select
        className="filtro"
        data-testid="column-filter"
        value={ columnValue }
        onChange={ ({ target }) => setColumnValue(target.value) }
      >
        {columnOptions.map((value) => <option key={ value }>{value}</option>)}
      </select>

      <select
        className="filtro"
        data-testid="comparison-filter"
        value={ comparisonFilter }
        onChange={ ({ target }) => setComparisonFilter(target.value) }
      >
        {comparisonOptions.map((value) => <option key={ value }>{value}</option>)}
      </select>

      <input
        className="filtro"
        type="number"
        data-testid="value-filter"
        value={ numberFilter }
        onChange={ ({ target }) => setNumberFilter(target.value) }
      />

      <button
        className="botao"
        type="button"
        data-testid="button-filter"
        onClick={ saveFiltersSetup }
      >
        Filtrar!
      </button>

      <section>
        <select
          className="filtro"
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
      </section>

      <section className="teste">
        <label htmlFor="AscInput">
          <span>Ascendente</span>
          <input
            name="ascDescSort"
            id="AscInput"
            value="ASC"
            type="radio"
            onChange={ ({ target }) => setInputOrder(target.value) }
            data-testid="column-sort-input-asc"
          />
        </label>
        <label htmlFor="DescInput">
          <span>Descendente</span>
          <input
            name="ascDescSort"
            id="DescInput"
            value="DESC"
            type="radio"
            onChange={ ({ target }) => setInputOrder(target.value) }
            data-testid="column-sort-input-desc"
            checked={ inputOrder === 'DESC' }
          />
        </label>
      </section>

      <button
        className="botao"
        type="button"
        onClick={ () => {
          console.log('foi');
          setOrder({
            colunm: selectColumnFilter, sort: inputOrder,
          });
        } }
        data-testid="column-sort-button"
      >
        Ordenar
      </button>

      <button
        className="botao-remover"
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
