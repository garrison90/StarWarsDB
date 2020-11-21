import React from "react";
import Table from "react-bootstrap/esm/Table";

function Planets({ planets, move, error, loading }) {
  if (error) return error;
  if (loading) return loading;

  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Population</th>
          <th>Rotation Period</th>
          <th>Diameter</th>
        </tr>
      </thead>
      <tbody>
        {planets.map((planet) => (
          <tr key={planet.id} onClick={() => move(planet.id)}>
            <td>{planet.id}</td>
            <td>{planet.name}</td>
            <td>{planet.population}</td>
            <td>{planet.rotationPeriod}</td>
            <td>{planet.diameter}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default Planets;
