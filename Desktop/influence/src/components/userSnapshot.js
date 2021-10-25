import { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const UserCard = (props) => {
  return (
    <Card style={{ width: "30rem" }} className="p-1 m-3">
      <Card.Img variant="top" src={props.profileImage}></Card.Img>
      <Card.Title>{props.username}</Card.Title>
      <Card.Text> Hello This is a card Image</Card.Text>
      <Button variant="primary" className="m-3">
        See More
      </Button>
    </Card>
  );
};

export { UserCard };
