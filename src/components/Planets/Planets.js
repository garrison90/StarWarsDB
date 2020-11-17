import React, { useEffect } from "react";
import Table from "react-bootstrap/esm/Table";
import { useDispatch, useSelector } from "react-redux";
import planetsSaga from "../../store/sagas/planetsSaga";
import {
  selectLoadingState,
  selectPlanets,
} from "../../store/selectors/planets";
import { useInjectSaga } from "../../store/sagas/useInjectSaga";
import { routes } from "../../constansts/routes";
import { getPlanetsDataRequest } from "../../store/actions/planets";
import Preloader from "../Preloader/Preloader";
import useSwitchTo from "../../hooks/useSwitchTo";

function Planets() {
  useInjectSaga("PlanetsSaga", planetsSaga);
  const dispatch = useDispatch();
  const planets = useSelector(selectPlanets);
  const loading = useSelector(selectLoadingState);
  const moveTo = useSwitchTo();
  const { PLANET_DETAILS } = routes;

  useEffect(() => {
    dispatch(getPlanetsDataRequest());
  }, [dispatch]);

  const move = (id) => {
    const path = PLANET_DETAILS.createPath(id);
    moveTo(path);
  };

  if (loading) return <Preloader />;

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
    </>
  );
}

export default Planets;
