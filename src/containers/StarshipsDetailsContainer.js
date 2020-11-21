import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import StarshipDetails from "../components/StarshipsDetails/StarshipDetails";
import { routes } from "../constansts/routes";
import useSwitchTo from "../hooks/useSwitchTo";
import useLoading from "../hooks/useLoading";
import useError from "../hooks/useError";

import {
  selectStarshipsLoading,
  selectStarship,
  selectStarshipPilots,
  selectStarshipsError,
} from "../store/selectors/starships";
import { getStarshipDetailsRequest } from "../store/reducers/starshipsSlice";
import { useParams } from "react-router-dom";

function StarshipsDetailsContainer() {
  const { PERSON_DETAILS } = routes;
  const { id } = useParams();
  const starship = useSelector(selectStarship);
  const pilots = useSelector(selectStarshipPilots);
  const loading = useLoading(selectStarshipsLoading);
  const error = useError(selectStarshipsError);
  const moveTo = useSwitchTo();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStarshipDetailsRequest(id));
  }, [dispatch, id]);

  const move = (id) => {
    const path = PERSON_DETAILS.createPath(id);
    moveTo(path);
  };

  return (
    <StarshipDetails
      move={move}
      starship={starship}
      pilots={pilots}
      loading={loading}
      error={error}
    />
  );
}

export default StarshipsDetailsContainer;
