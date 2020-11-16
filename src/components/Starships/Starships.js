import React, { useEffect } from "react";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { getStarshipsRequest } from "../../store/reducers/starshipsSlice";
import starshipsSaga from "../../store/sagas/starshipsSaga";
import { useInjectSaga } from "../../store/sagas/useInjectSaga";
import { selectStarships } from "../../store/selectors/starships";
import SearchForm from "../SearchForm/SearchForm";

function Starships() {
  useInjectSaga("starshipsSaga", starshipsSaga);
  const dispatch = useDispatch();
  const starships = useSelector(selectStarships);
  const history = useHistory();
  const location = useLocation();
  const { pathname } = location;

  useEffect(() => {
    dispatch(getStarshipsRequest());
  }, [dispatch]);

  const directedAt = (id) => {
    history.push(pathname + `/${id}`);
  };

  return (
    <>
      <SearchForm />
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
            <tr key={starship.id} onClick={(id) => directedAt(starship.id)}>
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
