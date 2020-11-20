import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPlanetDataRequest } from "../store/actions/planets";
import { selectPlanet } from "../store/selectors/planets";

function usePlanetDetails() {
  const dispatch = useDispatch();
  const planet = useSelector(selectPlanet);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getPlanetDataRequest(id));
  }, [dispatch, id]);

  return useMemo(() => planet, [planet]);
}

export default usePlanetDetails;
