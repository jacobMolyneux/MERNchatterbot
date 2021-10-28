import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ListGroup from "react-bootstrap/ListGroup";
import { useState } from "react";
import Row from "react-bootstrap/Row";

const ProfilePage = () => {
  let [accountType, setAccoutType] = useState("");
  return (
    <Container>
      <h1>Edit your Account</h1>
      {/* Add Instagram Account */}
      <Row className="mt-5">
        <h1>Instagram</h1>
        <h3>Add Instagram Account</h3>
        <Button style={{ width: "30rem" }}>Add Instagram</Button>
      </Row>
      {/* Add Tik Tok Account */}
      <Row className="mt-5">
        <h1>Tik Tok</h1>
        <h3>Add Tik Tok Account</h3>
        <Button style={{ width: "30rem" }}>Add Tik Tok</Button>
      </Row>
    </Container>
  );
};
export { ProfilePage };
