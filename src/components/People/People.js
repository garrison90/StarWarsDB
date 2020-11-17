import React from "react";

function People({ person, move }) {
  return (
    <tr onClick={() => move(person.id)}>
      <td>{person.id}</td>
      <td>{person.name}</td>
      <td>{person.birthYear}</td>
      <td>{person.eyeColor}</td>
      <td>{person.gender}</td>
    </tr>
  );
}

export default People;
