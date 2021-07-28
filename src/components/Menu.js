import React from 'react';
import './Menu.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartbeat } from "@fortawesome/fontawesome-free-solid";
import { FaFacebookSquare } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';

export default function Menu() {
  return (
    <div style={{ maxWidth: "100%" }}>
        <Navbar className="shadow-sm p-3" variant="light">
          <Container>
            <div>
              <FontAwesomeIcon icon={faHeartbeat} style={{width: 20, height: 20, color: "red"}} />
              <Navbar.Brand style={{marginLeft: 5}}>Apteka Online</Navbar.Brand>
            </div>
            <Nav className="nav-links">
              <NavLink className="links" activeStyle={{ color: "red" }} exact to="/">Home</NavLink>
              <NavLink className="links" activeStyle={{ color: "red" }} to="/medicines">Leki</NavLink>
              <NavLink className="links" activeStyle={{ color: "red" }} to="/equipment">Sprzęt</NavLink>
              <NavLink className="links" activeStyle={{ color: "red" }} to="/prescriptions">E-Recepty</NavLink>
              <Link className="links" to=""><FaFacebookSquare color="red" style={{ width: 20, height: 20 }}/></Link>
              <Link className="links" to=""><FaTwitter color="red" style={{ width: 20, height: 20 }}/></Link>
            </Nav>
          </Container>
        </Navbar>
    </div>
  );
}