import React, { useState, useEffect } from "react";
import {
  Jumbotron,
  Container,
  Card,
  Col,
  Row,
} from "react-bootstrap";
import API from "../../utils/API";

// function Jumbo() {
//   const [location, setLocation]= useState("");
// useEffect(() => {
//   API.getLocalPets()
// }, [])

function Jumbo() {
  const [location, setLocation] = useState("");
  const cardstyle = { backgroundColor: "#F16E10", height: "100%" };
  const padding = { padding: "0" };
  return (
    <Jumbotron fluid>
      <Container>
        <Row>
          <Col style={padding}>
            <Card style={cardstyle}>
              <Card.Body>
                <Card.Title>Welcome to Paw Prints</Card.Title>
                <Card.Text>
                  Find your new best friend &#10084;&#65039;. Whether it's a
                  dog, cat, or a rabbit in a hat🎩; find someone that will love
                  to always be there for you! Search for all your amazing
                  opportunities near you! 🐴 🐶 🐱 🐰 🐹 🐦 🐢 🦎 🐟
                </Card.Text>
                <Container>
                </Container>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            {/* style={{ width: "18rem" }} */}
            <Card>
              <Card.Img
                variant="top"
                src="/images/Kittens-Puppies-dapple.jpeg"
              />
            </Card>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}

export default Jumbo;
