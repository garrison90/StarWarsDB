import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import PlanetDetails from "../components/PlanetsDetails/PlanetDetails";
import {
  selectPlanet,
  selectPlanetError,
  selectPlanetsLoading,
  selectResidents,
} from "../store/selectors/planets";
import { getPlanetDataRequest } from "../store/actions/planets";
import useLoading from "../hooks/useLoading";
import useError from "../hooks/useError";
import { routes } from "../constansts/routes";
import useSwitchTo from "../hooks/useSwitchTo";

function PlanetDetailsContainer() {
  const { id } = useParams();
  const { PERSON_DETAILS } = routes;
  const dispatch = useDispatch();
  const planet = useSelector(selectPlanet);
  const residents = useSelector(selectResidents);
  const loading = useLoading(selectPlanetsLoading);
  const error = useError(selectPlanetError);
  const moveTo = useSwitchTo();

  const move = (id) => {
    const path = PERSON_DETAILS.createPath(id);
    moveTo(path);
  };

  useEffect(() => {
    dispatch(getPlanetDataRequest(id));
  }, [dispatch, id]);

  return (
    <PlanetDetails
      planet={planet}
      loading={loading}
      error={error}
      move={move}
      residents={residents}
    />
  );
}

export default PlanetDetailsContainer;
