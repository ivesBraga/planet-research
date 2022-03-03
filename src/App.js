import React from 'react';
import 'bulma/css/bulma.min.css';
import './App.css';
import Table from './components/Table';
import Provider from './context/Provider';

function App() {
  return (
    <Provider>
      <Table />
    </Provider>

  );
}

export default App;
