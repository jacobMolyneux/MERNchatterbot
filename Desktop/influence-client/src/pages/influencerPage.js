import { useState } from "react";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
import mikeImage from "../images/Mike.jpg";
import stevenImage from "../images/Steven.jpg";

const InfluencerPage = () => {
  return (
    <Container>
      <Row className="d-flex text-center">
        <h1>Steven</h1>
        <Col>
          <p>
            This is example text that will be a description of the user. The
            influencer can describe their brand, what type of content that they
            have, and more details about them that they can use to sell
            themselves to brands.
          </p>
        </Col>
        <Col>
          <Carousel>
            <Carousel.Item>
              <img
                src={mikeImage}
                alt="Influencer"
                className="d-block w-100"
              ></img>
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={stevenImage}
                alt="Influencer"
                className="d-block w-100"
              ></img>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
      <Row>
        <ListGroup horizontal>
          <ListGroup.Item>
            <h1>Engagement</h1>
            <p>100%</p>
          </ListGroup.Item>
          <ListGroup.Item>
            <h1>Followers</h1>
            <p>50,000</p>
          </ListGroup.Item>
          <ListGroup.Item>
            <h1>Avg Impressions</h1>
            <p>20,000</p>
          </ListGroup.Item>
        </ListGroup>
      </Row>
    </Container>
  );
};
export { InfluencerPage };
