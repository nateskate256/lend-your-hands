import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import ConfirmationBox from "../Modal"

function CustomNav() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Paw Prints</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Login/Signup</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default CustomNav;
