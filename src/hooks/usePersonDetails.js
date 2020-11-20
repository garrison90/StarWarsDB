import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPersonDataRequest } from "../store/reducers/peopleSlice";
import {
  selectPerson,
  selectPersonHomeworld,
  selectPersonStarships,
} from "../store/selectors/people";

function usePersonDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const person = useSelector(selectPerson);
  const homeworld = useSelector(selectPersonHomeworld);
  const starships = useSelector(selectPersonStarships);

  useEffect(() => {
    dispatch(getPersonDataRequest(id));
  }, [dispatch, id]);

  return useMemo(() => ({ ...person, homeworld, starships }), [
    person,
    homeworld,
    starships,
  ]);
}

export default usePersonDetails;
