import React from 'react';
import './App.css';
import SearchFilters from './components/SearchFilters';
import SearchInput from './components/SearchInput';
import Table from './components/Table';
import Provider from './context/Provider';

function App() {
  return (
    <Provider>
      <SearchInput />
      <SearchFilters />
      <Table />
    </Provider>

  );
}

export default App;
