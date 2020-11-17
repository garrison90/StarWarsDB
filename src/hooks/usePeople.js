import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPeopleRequest } from "../store/reducers/peopleSlice";
import peopleSaga from "../store/sagas/peopleSaga";
import { useInjectSaga } from "../store/sagas/useInjectSaga";
import { selectAllPeople } from "../store/selectors/people";

function usePeople() {
  useInjectSaga("peopleSaga", peopleSaga);
  const dispatch = useDispatch();
  const people = useSelector(selectAllPeople);

  useEffect(() => {
    dispatch(getAllPeopleRequest());
  }, [dispatch]);

  return useMemo(() => people, [people]);
}

export default usePeople;
