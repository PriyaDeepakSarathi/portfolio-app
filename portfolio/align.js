import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Nav} from 'react-bootstrap';

const Align=()=>{

    return(<>

    <Navbar bg="warning" expand="lg">
  <Navbar.Brand href="/Home">Priya Deepak</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/home">Home</Nav.Link>
      <Nav.Link href="/Experience">Experience</Nav.Link>
      <Nav.Link href="/Qualification">Qualification</Nav.Link>
      <Nav.Link href="/Contact">Contact Me</Nav.Link>
      
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
    </>)
}
export default Align;