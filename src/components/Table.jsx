import React, { useContext } from 'react';
import Context from '../context/Context';
import 'bulma/css/bulma.min.css';
import '../css/Table.css';

export default function Table() {
  const { planetsData } = useContext(Context);

  return (
    <div>
      <table className="table">
        <thead>
          <tr className="cabecalho-tabela">
            <th className="titulo">Name</th>
            <th className="titulo">Rotation Period</th>
            <th className="titulo">Orbital Period</th>
            <th className="titulo">Diameter</th>
            <th className="titulo">Climate</th>
            <th className="titulo">Gravity</th>
            <th className="titulo">Terrain</th>
            <th className="titulo">Surface Water</th>
            <th className="titulo">Population</th>
            <th className="titulo">Films</th>
            <th className="titulo">Created</th>
            <th className="titulo">Edited</th>
            <th className="titulo">URL</th>
          </tr>
        </thead>
        <tbody>
          {planetsData && planetsData.map((planets) => (
            <tr key={ planets.name } className="tabela">
              <td data-testid="planet-name">{planets.name}</td>
              <td>{planets.rotation_period}</td>
              <td>{planets.orbital_period}</td>
              <td>{planets.diameter}</td>
              <td>{planets.climate}</td>
              <td>{planets.gravity}</td>
              <td>{planets.terrain}</td>
              <td>{planets.surface_water}</td>
              <td>{planets.population}</td>
              <td>{planets.films}</td>
              <td>{planets.created}</td>
              <td>{planets.edited}</td>
              <td>{planets.url}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
