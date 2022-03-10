import React, { useContext } from 'react';
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
  } = useContext(Context);

  const comparisonOptions = ['maior que', 'menor que', 'igual a'];

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

    </div>
  );
}
