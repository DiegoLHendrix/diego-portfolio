import React from "react";
import { Container } from "react-bootstrap";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "../../styles/base/Footer.css"

function Footer() {
  return (
    <footer className="footer bg-primary text-center mt-4">
      <Container className="footer-content">
        <p>&copy; Diego Lopez 2025</p>
        <div className="footer-icons">
          <a href="https://github.com/DiegoLHendrix" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} />
          </a>
          <a href="https://www.linkedin.com/in/dl4583" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} />
          </a>
          <a href="/contact">
            <FaEnvelope size={30} />
          </a>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
