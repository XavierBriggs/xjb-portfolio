import React, {useState} from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavBarOffCanvas() {
  const [underLine, setUnderline] = useState({"textDecoration": "none"});
  const brand = ""; 
  function hover(){
    setUnderline({'textDecoration': "underline"});
  }
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            alt=""
            src="/imgs/XB-Logo.jpg"
            width="75"
            height="75"
            className="d-inline-block align-top"
          />{' '}
          {brand}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNavAltMarkup" />
        <Navbar.Collapse id="navbarNavAltMarkup">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" style={underLine} onMouseOver={hover}>Home</Nav.Link>
            <Nav.Link as={Link} to="/about" style={underLine} onMouseOver={hover}>About</Nav.Link>
            <Nav.Link as={Link} to="/projects" style={underLine} onMouseOver={hover}>Projects</Nav.Link>
            <Nav.Link as={Link} to="/resume" style={underLine} onMouseOver={hover}>Resume</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarOffCanvas;