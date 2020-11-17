import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStarshipsRequest } from "../store/reducers/starshipsSlice";
import starshipsSaga from "../store/sagas/starshipsSaga";
import { useInjectSaga } from "../store/sagas/useInjectSaga";
import { selectStarships } from "../store/selectors/starships";

function useStarships() {
  useInjectSaga("starshipsSaga", starshipsSaga);
  const dispatch = useDispatch();
  const starships = useSelector(selectStarships);

  useEffect(() => {
    dispatch(getStarshipsRequest());
  }, [dispatch]);

  return useMemo(() => starships, [starships]);
}

export default useStarships;
