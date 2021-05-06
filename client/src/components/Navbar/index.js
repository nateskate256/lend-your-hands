import React, {useState} from "react";
import { Navbar, Nav, Button, Modal, Form } from "react-bootstrap";
<<<<<<< HEAD
=======
import emailAuth from "../../auth/email"
import googleAuth from "../../auth/google"
import facebookAuth from "../../auth/facebook"
import firebase from "firebase/app";
import { isLastDayOfMonth } from "date-fns";
>>>>>>> c3ac79254c7fb6cc6462ce11952f02abd733bb4c

function CustomNav() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
<<<<<<< HEAD
=======
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
  const [isLoggedin, setIsLoggedIn] = React.useState(false);
  firebase.auth().onAuthStateChanged(function (user) {
    setIsLoggedIn(!!user);
  });

function setLoggedOut() {
  firebase.auth().signOut().then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });
}

>>>>>>> c3ac79254c7fb6cc6462ce11952f02abd733bb4c
  return (
    <>
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Paw Prints</Navbar.Brand>
      <Nav className="mr-auto">
        {isLoggedin ? (
      <Button variant="primary" onClick={setLoggedOut}>
        Log Out
      </Button>
      ) : (<Button variant="primary" onClick={handleShow}>
      Login/Signup
    </Button>)}
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
