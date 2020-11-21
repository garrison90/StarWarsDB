import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import PersonDetails from "../components/PersonDetails/PersonDetails";
import useError from "../hooks/useError";
import useLoading from "../hooks/useLoading";
import useSwitchTo from "../hooks/useSwitchTo";
import { getPersonDataRequest } from "../store/reducers/peopleSlice";
import {
  selectPeopleError,
  selectPeopleLoading,
  selectPerson,
  selectPersonHomeworld,
  selectPersonStarships,
} from "../store/selectors/people";

function PersonDetailsContainer() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const person = useSelector(selectPerson);
  const homeworld = useSelector(selectPersonHomeworld);
  const starships = useSelector(selectPersonStarships);
  const loading = useLoading(selectPeopleLoading);
  const error = useError(selectPeopleError);
  const moveTo = useSwitchTo();

  const move = (path) => {
    moveTo(path);
  };

  useEffect(() => {
    dispatch(getPersonDataRequest(id));
  }, [dispatch, id]);

  return (
    <PersonDetails
      person={person}
      move={move}
      homeworld={homeworld}
      starships={starships}
      loading={loading}
      error={error}
    />
  );
}

export default PersonDetailsContainer;
