import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPeopleRequest } from "../store/reducers/peopleSlice";
import { selectAllPeople } from "../store/selectors/people";

function usePeople() {
  const dispatch = useDispatch();
  const people = useSelector(selectAllPeople);

  useEffect(() => {
    dispatch(getAllPeopleRequest());
  }, [dispatch]);

  return useMemo(() => people, [people]);
}

export default usePeople;
