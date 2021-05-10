import React from "react";
import {
  Jumbotron,
  Container,
  Card,
  Col,
  Row,
} from "react-bootstrap";
// import API from "../../utils/API";
import "../../../src/index.css"

// function Jumbo() {
//   const [location, setLocation]= useState("");
// useEffect(() => {
//   API.getLocalPets()
// }, [])

function FavJumbo() {
  // const [location, setLocation] = useState("");
  // const cardstyle = { backgroundColor: "#F16E10", height: "100%" };
  const padding = { padding: "0" };
  return (
    <Jumbotron fluid>
      <Container>
        <Row>
          <Col style={padding}>
            <Card id="cardBkg">
              <Card.Body>
                <Card.Title className="title">Your Favorite Animals!</Card.Title>
                <Card.Text className="textBody">
                  Check out your favorite animals below! &#10084;&#65039;. Whenever you're ready to add a little love to your home, contact your local Paw Prints!
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

export default FavJumbo;
