import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function NavigationBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container fluid>
        <Navbar.Brand href="/">Diego's Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarSupportedContent" />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/resume">Resume</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <NavDropdown title="Projects" id="basic-nav-dropdown">
              <NavDropdown.Item href="/evt">Electric Vehicle Team</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/esd">Embedded Systems</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/dsp">Digital Signal Processing</NavDropdown.Item>
            </NavDropdown>
          </Nav>

          {/* Right side GitHub, LinkedIn, and Admin Login */}
          <Nav className="ms-auto">
            <Nav.Link href="https://github.com/DiegoLHendrix" target="_blank">
              <FaGithub size={30} />
            </Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/dl4583" target="_blank">
              <FaLinkedin size={30} />
            </Nav.Link>
            <Nav.Link href="/admin">
              <button className="btn btn-outline-light">Admin Login</button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
