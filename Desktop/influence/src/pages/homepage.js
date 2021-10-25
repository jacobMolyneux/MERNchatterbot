import { useState } from "react";
import Card from "react-bootstrap/Card";
import { UserCard } from "../components/userSnapshot";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import bannerImage from "../images/new-york-city-skyline-at-night.jpg";
import bob from "../images/bob.jpg";
import george from "../images/george.jpg";
import jessica from "../images/jessica.jpg";
import john from "../images/john.jpg";
import olivia from "../images/olivia.jpg";
import samantha from "../images/samantha.jpg";
import CardGroup from "react-bootstrap/CardGroup";
import Row from "react-bootstrap/Row";
const Homepage = () => {
  return (
    <Container>
      <Image fluid src={bannerImage} />
      <Container
        style={{ width: "100%" }}
        className="d-flex text-align-centre m-3 border-bottom"
      >
        <h1> Find Influencers to Promote Your Brand</h1>
      </Container>
      <Container className="d-flex">
        <Row>
          <UserCard username="Samantha" profileImage={samantha} />
          <UserCard username="Olivia" profileImage={olivia} />
          <UserCard username="Bob" profileImage={bob} />
        </Row>
        <Row>
          <UserCard username="Jessica" profileImage={jessica} />
          <UserCard username="George" profileImage={george} />
          <UserCard username="John" profileImage={john} />
        </Row>
      </Container>
    </Container>
  );
};

export { Homepage };
