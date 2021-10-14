import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const UserCard = (props) => {
  return (
    <Card border="secondary" style={{ width: "18rem" }}>
      <Card.Img
        varient="top"
        src={props.image}
        style={{ height: "18rem" }}
      ></Card.Img>
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>

        <Card.Text>Hello This is the body text of the card</Card.Text>
      </Card.Body>
      <Button variant="primary" className="m-3">
        See More
      </Button>
    </Card>
  );
};
export { UserCard };
