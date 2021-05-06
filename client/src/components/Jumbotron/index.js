import React, {useState, useEffect} from "react";
import { Jumbotron, Container, Card, Form, Button, Col } from "react-bootstrap";
import API from "../../utils/API"

function Jumbo() {
  const [location, setLocation]= useState("");
  

// useEffect(() => {
//   // api.getToken().then(token => store token to a variable);
//   // api.getLocalPets()

//   //get the token
//   API.getLocalPets().then(allPets => console.log(allPets));
// }, [])

const handleSubmit = async (e) => {
  e.preventDefault();
  console.log("clicked!")
  // we can access the location state
  const token = await API.getOAuthToken();
  console.log(token);
}

return (
<Jumbotron fluid>
  <Container>
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>Welcome to Paw Prints</Card.Title>
        <Card.Text>
          Find your new best friend &#10084;&#65039;. Whether it's a dog, cat, or a rabbit in a hat🎩; find someone that will love to always be there for you! Search for all your amazing opportunities near you! 
          🐴 🐶 🐱 🐰 🐹 🐦 🐢 🦎 🐟
        </Card.Text>
        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Zip Code or State</Form.Label>
              <Form.Control value={location.value} onChange={e => setLocation({location:e.target.value})}/>
            </Form.Group>

            {/* <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Zip</Form.Label>
              <Form.Control />
            </Form.Group> */}
          </Form.Row>

          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </Form>
      </Card.Body>
    </Card>

    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="/images/Kittens-Puppies-dapple.jpeg" />
    </Card>
  </Container>
</Jumbotron>
);
}

export default Jumbo;