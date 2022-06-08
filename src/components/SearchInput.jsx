import React, { useContext } from 'react';
import Context from '../context/Context';
import '../css/SearchInput.css';

export default function SearchInput() {
  const {
    planetSearch,
    setPlanetSearch } = useContext(Context);

  // https://stackoverflow.com/questions/55757761/handle-an-input-with-react-hooks função onChange
  // feito com ajuda de Iago Medeiros e Henrique Rubido

  return (
    <div>
      <main className="header">
        <h1>Planet Research - Star Wars</h1>

        <input
          className="planet-name-input"
          placeholder="Search for a planet"
          data-testid="name-filter"
          onChange={ ({ target }) => setPlanetSearch(target.value) }
          value={ planetSearch }
        />
      </main>
    </div>
  );
}
