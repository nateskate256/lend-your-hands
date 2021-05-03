import React from "react";
import { Jumbotron, Container, Card, Form, Button, Col } from "react-bootstrap";

function Jumbo() {
return (
<Jumbotron fluid>
  <Container>
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>Welcome to Paw Prints</Card.Title>
        <Card.Text>
          Find your new best friend.
          lkadjl;fkjkasdlkjglsdkglsdj;jfsldkfjlskdlgsdllfkjsljdsl
        </Card.Text>
        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>State</Form.Label>
              <Form.Control as="select" defaultValue="Choose...">
                <option>Choose...</option>
                <option>...</option>
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Zip</Form.Label>
              <Form.Control />
            </Form.Group>
          </Form.Row>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Card.Body>
    </Card>

    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
    </Card>
  </Container>
</Jumbotron>
);
}

export default Jumbo;