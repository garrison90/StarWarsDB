import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getStarshipDetailsRequest } from "../store/reducers/starshipsSlice";
import { selectStarship } from "../store/selectors/starships";

function useStarshipDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const starship = useSelector(selectStarship);

  useEffect(() => {
    dispatch(getStarshipDetailsRequest(id));
  }, [dispatch, id]);

  return useMemo(() => starship, [starship]);
}

export default useStarshipDetails;
