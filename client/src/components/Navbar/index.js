import React, {useState} from "react";
import { Navbar, Nav, Button, Modal, Form } from "react-bootstrap";
import emailAuth from "../../auth/email"
import googleAuth from "../../auth/google"
import facebookAuth from "../../auth/facebook"


function CustomNav() {
  const [show, setShow] = useState(false);
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSubmit = e => {
    e.preventDefault();
    console.log("username is " + username);
    console.log("password is " + password);
    emailAuth.signInWithEmailPassword(username, password)
    handleClose()
  };
  const handleSignUp = e => {
    e.preventDefault();
    console.log("username is " + username);
    console.log("password is " + password);
    emailAuth.signUpWithEmailPassword(username, password)
    handleClose()
  };
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
          <Form.Control type="email" placeholder="Enter email" onChange={e => setUsername(e.target.value)}/>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
        <Button variant="primary" type="submit" onClick={handleSignUp}>
          Signup
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
