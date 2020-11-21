import React from "react";
import Table from "react-bootstrap/esm/Table";

function People({ people, move }) {
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Birthday Year</th>
          <th>Eye Color</th>
          <th>Genger</th>
        </tr>
      </thead>
      <tbody>
        {people.map((person) => (
          <tr key={person.id} onClick={() => move(person.id)}>
            <td>{person.id}</td>
            <td>{person.name}</td>
            <td>{person.birthYear}</td>
            <td>{person.eyeColor}</td>
            <td>{person.gender}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default People;
