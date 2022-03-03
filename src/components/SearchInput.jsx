import React, { useContext } from 'react';
import Context from '../context/Context';

export default function SearchInput() {
  const { planetSearch, setPlanetSearch } = useContext(Context);

  // https://stackoverflow.com/questions/55757761/handle-an-input-with-react-hooks função onChange
  // feito com ajuda de Iago Medeiros e Henrique Rubido

  return (
    <div>
      <input
        placeholder="Planet Name"
        data-testid="name-filter"
        onChange={ ({ target }) => setPlanetSearch(target.value) }
        value={ planetSearch }
      />
    </div>
  );
}
