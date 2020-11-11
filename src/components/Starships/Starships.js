import React, { useEffect } from "react";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { getStarshipsRequest } from "../../store/actions/starships";
import starshipsSaga from "../../store/sagas/starshipsSaga";
import { useInjectSaga } from "../../store/sagas/useInjectSaga";
import { selectStarships } from "../../store/selectors/starships";

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

  const directedAd = (id) => {
    history.push(pathname + `/${id}`);
  };

  return (
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
          <tr key={starship.id} onClick={(id) => directedAd(starship.id)}>
            <td>{starship.id}</td>
            <td>{starship.name}</td>
            <td>{starship.model}</td>
            <td>{starship.starshipClass}</td>
            <td>{starship.manufacturer}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default Starships;
