import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Planets from "../components/Planets/Planets";
import { getPlanetsDataRequest } from "../store/actions/planets";
import {
  selectPlanetsLoading,
  selectPlanetError,
  selectPlanets,
} from "../store/selectors/planets";
import useSwitchTo from "../hooks/useSwitchTo";
import { routes } from "../constansts/routes";
import useError from "../hooks/useError";
import useLoading from "../hooks/useLoading";

function PlanetsContainer() {
  const dispatch = useDispatch();
  const planets = useSelector(selectPlanets);
  const loading = useLoading(selectPlanetsLoading);
  const error = useError(selectPlanetError);
  const moveTo = useSwitchTo();
  const { PLANET_DETAILS } = routes;

  useEffect(() => {
    dispatch(getPlanetsDataRequest());
  }, [dispatch]);

  const move = (id) => {
    const path = PLANET_DETAILS.createPath(id);
    moveTo(path);
  };

  return (
    <Planets planets={planets} move={move} loading={loading} error={error} />
  );
}

export default PlanetsContainer;
