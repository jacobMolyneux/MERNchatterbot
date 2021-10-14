import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";

const SignUpPage = () => {
  let [newUsername, setNewUsername] = useState("");
  let [newPassword, setNewPassword] = useState("");
  // make post request to create new user on form submission
  async function createUser() {
    await fetch("http://localhost:8000/SignUp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: newUsername,
        password: newPassword,
      }),
    });
  }
  const handleFormSubmit = (e) => {
    createUser();
  };

  // handle form inputs to modify state
  const handleUsernameFormChange = (e) => {
    setNewUsername((newUsername = e.target.value));
  };
  const handlePasswordChange = (e) => {
    setNewPassword((newPassword = e.target.value));
  };
  return (
    <div id="stateDisplay">
      <h1> the username is: {newUsername}</h1>
      <h1> the password is: {newPassword}</h1>

      <Form className="w-75" border="secondary" onSubmit={handleFormSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            onChange={handleUsernameFormChange}
            placeholder="Enter Email"
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Password"
            onChange={handlePasswordChange}
          ></Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">
          Log In
        </Button>
      </Form>
    </div>
  );
};
export { SignUpPage };
