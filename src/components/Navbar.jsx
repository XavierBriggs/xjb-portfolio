import { faHouse, faPen, faUser, faFile } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavBarOffCanvas() {
  const [navbarColor, setNavbarColor] = useState("transparent");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 0) {
        setNavbarColor("scrolled"); // Change to "scrolled" for a different background color
      } else {
        setNavbarColor("transparent"); // Change to "transparent" for default background color
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function hover(event){
    event.target.style.textDecoration = "underline";
  }

  function unhover(event){
    event.target.style.textDecoration = "none";
  }

  return (
    <Navbar expand="lg" sticky="top" className={navbarColor}>
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            alt=""
            src="/imgs/XB-Logo.jpg"
            width="75"
            height="75"
            className="d-inline-block align-top"
          />{' '}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNavAltMarkup" />
        <Navbar.Collapse id="navbarNavAltMarkup">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" onMouseOver={hover} onMouseOut={unhover}><FontAwesomeIcon icon={faHouse} /> Home  </Nav.Link>
            <Nav.Link as={Link} to="/about" onMouseOver={hover} onMouseOut={unhover}><FontAwesomeIcon icon={faUser} /> About  </Nav.Link>
            <Nav.Link as={Link} to="/projects" onMouseOver={hover} onMouseOut={unhover}><FontAwesomeIcon icon={faPen} /> Projects </Nav.Link>
            <Nav.Link as={Link} to="/resume" onMouseOver={hover} onMouseOut={unhover}><FontAwesomeIcon icon={faFile} /> Resume </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarOffCanvas;
