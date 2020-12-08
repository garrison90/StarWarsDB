import Col from "react-bootstrap/esm/Col";
import ListGroup from "react-bootstrap/esm/ListGroup";
import Row from "react-bootstrap/esm/Row";
import { useSelector } from "react-redux";
import useSwitchTo from "hooks/useSwitchTo";
import { routes } from "constansts/routes";
import { selectPersonStarships } from "store/selectors/people";

export const PersonStarships = () => {
  const starships = useSelector(selectPersonStarships);
  const move = useSwitchTo();
  const { STARSHIP_DETAILS } = routes;

  return (
    <>
      <h4 className="text-center m-4">Person Starships: </h4>
      <Row>
        <Col>
          {starships && starships.length ? (
            starships.map((starship) => (
              <ListGroup.Item
                action
                className="text-center"
                variant="light"
                key={starship.id}
                onClick={() => move(STARSHIP_DETAILS.createPath(starship.id))}
              >
                {starship.name}
              </ListGroup.Item>
            ))
          ) : (
            <ListGroup.Item className="text-center" variant="warning">
              This person doesn't have any starship!
            </ListGroup.Item>
          )}
        </Col>
      </Row>
    </>
  );
};
