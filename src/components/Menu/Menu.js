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
    <div className="container">
        <nav className="navbar navbar-expand-md navbar-light">
          <a className="navbar-brand"><FontAwesomeIcon icon={faHeartbeat} color="red" /></a>
          <a href="" className="navbar-brand">Apteka Online</a>
          <button className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#toggleMobileMenu"
          aria-controls="toggleMobileMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="toggleMobileMenu">
            <ul className="navbar-nav ms-auto text-center">
              <li className="nav-item">
                <a className="nav-link" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/medicine">Leki</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/equipment">Sprzęt</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/prescription">E-Recepta</a>
                </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">Kontakt</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href=""><FaFacebookSquare color="red"></FaFacebookSquare></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href=""><FaTwitter color="red"></FaTwitter></a>
              </li>
            </ul>
          </div>
        </nav>
    </div>
    // <>
    //   <Navbar collapseOnSelect expand="md" bg="light">
    //     <Container>
    //       <Navbar.Brand href="/"><FontAwesomeIcon icon={faHeartbeat} color="red" /></Navbar.Brand>
    //       <Navbar.Brand href="/">Apteka Online</Navbar.Brand>
    //       <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    //       <Navbar.Collapse id="responsive-navbar-nav">
    //         <Nav className="ms-auto text-center" >
    //           <Nav.Link class="links" href="/">Home</Nav.Link>
    //           <Nav.Link href="/medicine">Leki</Nav.Link>
    //           <Nav.Link href="/equipment">Sprzęt</Nav.Link>
    //           <Nav.Link href="/prescription">E-Recepta</Nav.Link>
    //           <Nav.Link href="/contact">Kontakt</Nav.Link>
    //           <Nav.Link href="/"><FaFacebookSquare color="red"></FaFacebookSquare></Nav.Link>
    //           <Nav.Link href="/"><FaTwitter color="red"></FaTwitter></Nav.Link>
    //         </Nav>
    //       </Navbar.Collapse>
    //     </Container>
    //   </Navbar>
    // </>
  );
}