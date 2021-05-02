import React from 'react';
import { Navbar } from "react-bootstrap";

function Nav() {
    return(
<Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">Paw Prints</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Modal</Nav.Link>
    </Nav>
</Navbar>
 );
}

export default Nav;