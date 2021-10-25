import { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import Row from "react-bootstrap/Row";
import samantha from "../images/samantha.jpg";
import jessica from "../images/jessica.jpg";

const UserPage = () => {
  // User state will hold all the user object data
  let [user, setUser] = useState("");

  // insert function here to make an api call to backend to get specific user data

  return (
    <Container>
      <Row>
        <Col id="detailsColumn">
          <h1>Samantha</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Col>
        <Col id="imagesColumn">
          <Carousel>
            <Carousel.Item interval={2500}>
              <img
                style={{ width: "18rem", height: "30rem" }}
                src={samantha}
                alt="personImage"
              />
            </Carousel.Item>
            <Carousel.Item interval={2500}>
              <img
                style={{ width: "18rem", height: "30rem" }}
                src={jessica}
                alt="personImage"
              />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
      <Row>
        <p>Some user statistics</p>
        <p> this will be a table that gets the user statistics</p>
      </Row>
    </Container>
  );
};
export { UserPage };
