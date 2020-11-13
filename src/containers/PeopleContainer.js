import React, { useEffect } from "react";
import Table from "react-bootstrap/esm/Table";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import People from "../components/People/People";
import { routes } from "../constansts/routes";
import { getAllPeopleRequest } from "../store/reducers/peopleSlice";
import peopleSaga from "../store/sagas/peopleSaga";
import { useInjectSaga } from "../store/sagas/useInjectSaga";
import { selectAllPeople } from "../store/selectors/people";

export default function PeopleContainer() {
  useInjectSaga("peopleSaga", peopleSaga);
  const people = useSelector(selectAllPeople);
  const dispatch = useDispatch();
  const {PERSON_DETAILS} = routes;
  const history = useHistory()

  useEffect(() => {
    dispatch(getAllPeopleRequest());
  }, [dispatch]);

  const reallocatte = (id) => {
    history.push(PERSON_DETAILS.createPath(id))}

  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Birthday Year</th>
          <th>Eye Color</th>
          <th>Genger</th>
        </tr>
      </thead>
      <tbody>
        {people.map((person) => (
           <People person={person}  key={person.id} 
           reallocatte={reallocatte}
            />
        ))}
      </tbody>
    </Table>
  );
}