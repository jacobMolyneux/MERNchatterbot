import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
const UserCard = (props) => {
  return (
    <Card style={{ width: "30rem" }}>
      <Card.Img
        style={{ width: "auto", height: "20rem" }}
        src={props.image}
      ></Card.Img>
      <Card.Title>{props.name}</Card.Title>
      <Card.Text>This is Example Text</Card.Text>
      <Button href="/Influencer">See More</Button>
    </Card>
  );
};
export { UserCard };
