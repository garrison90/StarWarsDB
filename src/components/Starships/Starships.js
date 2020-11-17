import React from "react";
import Table from "react-bootstrap/Table";
import SearchForm from "../SearchForm/SearchForm";
import useStarships from "../../hooks/useStarships";
import { routes } from "../../constansts/routes";
import { selectStarshipsLoading } from "../../store/selectors/starships";
import useLoading from "../../hooks/useLoading";
import useSwitchTo from "../../hooks/useSwitchTo";

function Starships() {
  const moveTo = useSwitchTo();
  const starships = useStarships();
  const { STARSHIP_DETAILS } = routes;
  const loading = useLoading(selectStarshipsLoading);

  const move = (id) => {
    const path = STARSHIP_DETAILS.createPath(id);
    moveTo(path);
  };

  return (
    <>
      <SearchForm />
      {loading}
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Model</th>
            <th>Starship Class</th>
            <th>Manufacturer</th>
          </tr>
        </thead>
        <tbody>
          {starships.map((starship) => (
            <tr key={starship.id} onClick={() => move(starship.id)}>
              <td>{starship.id}</td>
              <td>{starship.name}</td>
              <td>{starship.model}</td>
              <td>{starship.starshipClass}</td>
              <td>{starship.manufacturer}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default Starships;
