import React from "react";
import Table from "react-bootstrap/esm/Table";
import People from "../components/People/People";
import { routes } from "../constansts/routes";
import useLoading from "../hooks/useLoading";
import usePeople from "../hooks/usePeople";
import useSwitchTo from "../hooks/useSwitchTo";
import { selectPeopleLoading } from "../store/selectors/people";

export default function PeopleContainer() {
  const people = usePeople();
  const moveTo = useSwitchTo();
  const { PERSON_DETAILS } = routes;
  const loading = useLoading(selectPeopleLoading);

  const move = (id) => {
    let path = PERSON_DETAILS.createPath(id);
    moveTo(path);
  };

  return (
    <>
      {loading ? (
        loading
      ) : (
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
              <People person={person} key={person.id} move={move} />
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
}
