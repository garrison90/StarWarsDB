import React, { useEffect } from "react";
import Table from "react-bootstrap/esm/Table";
import { useDispatch, useSelector } from "react-redux";
import planetsSaga from "../../store/sagas/planetsSaga";
import { selectPlanets } from "../../store/selectors/planets";
import { useInjectSaga } from "../../store/sagas/useInjectSaga";
import { useHistory } from "react-router-dom";
import { routes } from "../../constansts/routes";
import { getPlanetsDataRequest } from "../../store/actions/planets";

function Planets() {
  useInjectSaga("PlanetsSaga", planetsSaga);
  const dispatch = useDispatch();
  const planets = useSelector(selectPlanets);
  const history = useHistory();
  const { PLANET_DETAILS } = routes;

  useEffect(() => {
    dispatch(getPlanetsDataRequest());
  }, [dispatch]);

  const directedAt = (id) => {
    history.push(PLANET_DETAILS.createPath(id));
  };

  return (
    <>
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
            <tr key={planet.id} onClick={() => directedAt(planet.id)}>
              <td>{planet.id}</td>
              <td>{planet.name}</td>
              <td>{planet.population}</td>
              <td>{planet.rotationPeriod}</td>
              <td>{planet.diameter}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default Planets;
