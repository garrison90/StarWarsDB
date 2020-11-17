import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { routes } from "../../constansts/routes";
import useSwitchTo from "../../hooks/useSwitchTo";
import useLoading from "../../hooks/useLoading";
import usePersonDetails from "../../hooks/usePersonDetails";
import { selectPeopleLoading } from "../../store/selectors/people";

function PersonDetails() {
  const person = usePersonDetails();
  const moveTo = useSwitchTo();
  const { PLANET_DETAILS, STARSHIP_DETAILS } = routes;
  const { homeworld, starships } = person;
  const loading = useLoading(selectPeopleLoading);

  const move = (path) => {
    moveTo(path);
  };

  return (
    <>
      {loading ? (
        loading
      ) : (
        <ListGroup>
          <ListGroup.Item> Name:{person.name} </ListGroup.Item>
          <ListGroup.Item>Gender: {person.gender}</ListGroup.Item>
          <ListGroup.Item>BirthYear: {person.birthYear}</ListGroup.Item>
          <ListGroup.Item>Eye Color: {person.eyeColor}</ListGroup.Item>
          <ListGroup.Item
            onClick={() => move(PLANET_DETAILS.createPath(homeworld.id))}
          >
            Homeworld: {homeworld.name}
          </ListGroup.Item>
          <h3>Starships: </h3>
          {starships.map((starship) => (
            <ListGroup.Item
              key={starship.id}
              onClick={() => move(STARSHIP_DETAILS.createPath(starship.id))}
            >
              Starship: {starship.name}
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
    </>
  );
}

export default PersonDetails;
