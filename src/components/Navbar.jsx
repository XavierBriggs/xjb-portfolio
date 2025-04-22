import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUser, faCode, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import './styles/MainNavbar.css';

function MainNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10); // Add .scrolled class after scrolling 10px
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Navbar
        expand="md"
        sticky="top"
        variant="dark"
        className={`main-navbar ${isScrolled ? 'scrolled' : ''}`}
        >
      <Container>
        <Navbar.Brand as={Link} to="/" className="navbar-brand-logo">
          <img
            alt="XB Logo"
            src="/imgs/XB-Logo.jpg"
            width="50"
            height="50"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navbar-nav" />

        <Navbar.Collapse id="main-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link as={NavLink} to="/" end>
                <FontAwesomeIcon icon={faHouse} className="me-2" /> Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/projects">
                <FontAwesomeIcon icon={faCode} className="me-2" /> Projects
            </Nav.Link>
            <Nav.Link as={NavLink} to="/Resume">
                <FontAwesomeIcon icon={faFileAlt} className="me-2" /> Resume
            </Nav.Link>

            <Nav.Link
              href="https://github.com/xavierbriggs"
              target="_blank"
              rel="noopener noreferrer"
              className="d-flex align-items-center"
              title="GitHub Profile"
            >
                <FontAwesomeIcon icon={faGithub} size="lg"/>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNavbar;