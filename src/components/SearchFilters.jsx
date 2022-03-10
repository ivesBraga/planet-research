import React, { useContext } from 'react';
import Context from '../context/Context';

export default function SearchFilters() {
  const {
    numberFilter,
    setNumberFilter,
  } = useContext(Context);
  const columnOptions = ['population',
    'orbital_period', 'diameter', 'rotation_period', 'surface_water'];
  const comparisonOptions = ['maior que', 'menor que', 'igual a'];

  return (
    <div>
      <select data-testid="column-filter">
        {columnOptions.map((value) => <option key={ value }>{value}</option>)}
      </select>
      <select data-testid="comparison-filter">
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
      >
        Filtrar!
      </button>
    </div>
  );
}
