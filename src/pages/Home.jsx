// src/pages/Home.js (or wherever this component lives)
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// *** IMPORTANT: Update this path to YOUR image (SVG or JPG/PNG) ***
// If using the xjb-port.jpg, ensure path is correct.
// If using an SVG like the original, place it in Assets and update path.
import homeLogo from "/imgs/WMP_Gh.png"; // KEEP or CHANGE path/filename
// Particle component is now in App.jsx and applies to all pages
import Home2 from "./Home/Home2"; // This contains the About/Socials sections
import Type from "../components/Type"; // This handles the typewriter effect

 import "./Home/Home.css"; 

function Home() {
  return (
    <section>
      {/* Main Hero Section Container */}
      <Container fluid className="homeSection" id="home">
        {/* Particle background effect is now in App.jsx */}
        <Container className="homeContent">
          <Row>
            {/* Left Text Column */}
            <Col md={7} className="homeHeader">
              {/* Apply styles via CSS file or inline */}
              <h1 style={{ paddingBottom: 15, color: 'var(--nd-white)' }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="headingName" style={{ color: 'var(--nd-white)'}}> {/* Added white color */}
                I'M
                {/* Apply ND Gold to your name */}
                <strong className="mainName" style={{ color: 'var(--nd-gold)' }}> XAVIER BRIGGS</strong>
              </h1>

              {/* Typewriter Component - Needs to be configured for your strings */}
              <div style={{ padding: 50, textAlign: "left", color: 'var(--nd-gold)' }}> {/* Style typewriter text */}
                <Type /> {/* Make sure Type component uses your desired strings */}
              </div>
            </Col>

            {/* Right Image Column */}
            <Col md={5} style={{ paddingLeft: 100, paddingBottom: 20 }}>
              <img
                src={homeLogo} // Using the variable imported above
                alt="home pic"
                className="illustrationImg" // Bootstrap class for responsiveness
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>

      {/* === This renders the About/Socials sections directly below === */}
      <Home2 />
    </section>
  );
}

export default Home;