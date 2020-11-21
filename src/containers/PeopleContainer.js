import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import People from "../components/People/People";
import { routes } from "../constansts/routes";
import useError from "../hooks/useError";
import useLoading from "../hooks/useLoading";
import useSwitchTo from "../hooks/useSwitchTo";
import { getAllPeopleRequest } from "../store/reducers/peopleSlice";
import {
  selectAllPeople,
  selectPeopleError,
  selectPeopleLoading,
} from "../store/selectors/people";

export default function PeopleContainer() {
  const moveTo = useSwitchTo();
  const { PERSON_DETAILS } = routes;
  const loading = useLoading(selectPeopleLoading);
  const error = useError(selectPeopleError);
  const people = useSelector(selectAllPeople);
  const dispatch = useDispatch();

  const move = (id) => {
    let path = PERSON_DETAILS.createPath(id);
    moveTo(path);
  };

  useEffect(() => {
    dispatch(getAllPeopleRequest());
  }, [dispatch]);

  if (error) return error;
  if (loading) return loading;

  return <People people={people} move={move} />;
}
