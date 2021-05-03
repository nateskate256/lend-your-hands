import React, {useState} from "react";
import { Navbar, Nav, Button, Modal, Form } from "react-bootstrap";

function CustomNav() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Paw Prints</Navbar.Brand>
      <Nav className="mr-auto">
      <Button variant="primary" onClick={handleShow}>
        Login/Signup
      </Button>
      </Nav>
    </Navbar>
    <Modal show={show} onHide={handleClose}>
    <Modal.Header>
      <Modal.Title>Modal heading</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
    </Modal.Footer>
  </Modal>
  </>
  );
}

export default CustomNav;
