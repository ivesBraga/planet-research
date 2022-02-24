import React, { useEffect } from 'react';
import getPlanets from './services/StarWarsAPI';
import './App.css';

function App() {
  useEffect(() => {
    getPlanets();
  }, []);

  return (
    <span>Hello, App!</span>
  );
}

export default App;
