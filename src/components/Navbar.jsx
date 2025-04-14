// src/components/Navbar/MainNavbar.js
import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom'; // Import NavLink and Link
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// CORRECTED Imports
import { faHouse, faUser, faCode, faFileAlt } from '@fortawesome/free-solid-svg-icons'; // Solid icons
import { faGithub } from '@fortawesome/free-brands-svg-icons'; // Brand icons
import './styles/MainNavbar.css'; // Import the CSS file for styling - Adjust path if needed
import Particle from './Particle';

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
        expand="md" // Collapse below medium screens
        sticky="top"
        // Changed variant to "dark" for better defaults with light text, though CSS overrides most things
        variant="dark"
        className={`main-navbar ${isScrolled ? 'scrolled' : ''}`} // Base class + conditional scrolled class
        >
      <Container>
        {/* Brand Logo */}
        <Navbar.Brand as={Link} to="/" className="navbar-brand-logo">
          <img
            alt="XB Logo"
            // *** Verify this path is correct for your project ***
            src="/imgs/XB-Logo.jpg"
            width="50" // Slightly smaller logo
            height="50"
            className="d-inline-block align-top"
          />
          {/* Optional: <span className="ms-2">Xavier Briggs</span> */}
        </Navbar.Brand>

        {/* Hamburger Toggle Button */}
        <Navbar.Toggle aria-controls="main-navbar-nav" />

        {/* Collapsible Navbar Content */}
        <Navbar.Collapse id="main-navbar-nav">
          {/* ms-auto pushes nav items to the right */}
          <Nav className="ms-auto align-items-center">
            {/* Navigation Links using NavLink for active class */}
            <Nav.Link as={NavLink} to="/" end> {/* 'end' prop for exact match on home */}
                <FontAwesomeIcon icon={faHouse} className="me-2" /> Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about">
                <FontAwesomeIcon icon={faUser} className="me-2" /> About
            </Nav.Link>
            <Nav.Link as={NavLink} to="/projects">
                <FontAwesomeIcon icon={faCode} className="me-2" /> Projects {/* Changed icon */}
            </Nav.Link>
            {/* Example: Direct link to a resume PDF */}
            <Nav.Link href="/path-to-your-resume.pdf" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFileAlt} className="me-2" /> Resume {/* Changed icon */}
            </Nav.Link>

            {/* Optional: GitHub Link */}
            <Nav.Link
              href="https://github.com/xavierbriggs" // *** Replace with your GitHub URL ***
              target="_blank"
              rel="noopener noreferrer"
              className="d-flex align-items-center" // Ensure vertical alignment
              title="GitHub Profile" // Tooltip for accessibility
            >
                <FontAwesomeIcon icon={faGithub} size="lg"/> {/* Adjust size if needed */}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNavbar;