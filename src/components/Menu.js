import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartbeat } from "@fortawesome/fontawesome-free-solid";
import { FaFacebookSquare } from 'react-icons/fa';

export default function Menu() {
  return (
    <div style={{ maxWidth: "100%" }}>
        <Navbar className="shadow-sm p-3" variant="light">
          <Container>
            <div>
              <FontAwesomeIcon icon={faHeartbeat} style={{width: 20, height: 20, color: "red"}} />
              <Navbar.Brand style={{marginLeft: 5}}>Apteka Online</Navbar.Brand>
            </div>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#medicines">Leki</Nav.Link>
              <Nav.Link href="#equipment">Sprzęt</Nav.Link>
              <Nav.Link href="#prescription">E-Recepty</Nav.Link>
              <Nav.Link><FaFacebookSquare color="red" style={{ width: 20, height: 20 }}/></Nav.Link>
            </Nav>
          </Container>
        </Navbar>
    </div>
  );
}