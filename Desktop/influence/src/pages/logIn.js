import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const LogInPage = () => {
  return (
    <Form className="w-75" border="secondary">
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control type="email" placeholder="Enter Email"></Form.Control>
      </Form.Group>
      <Form.Group classname="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Enter Password"
        ></Form.Control>
      </Form.Group>
      <Button variant="primary" type="submit">
        Log In
      </Button>
    </Form>
  );
};
export { LogInPage };
