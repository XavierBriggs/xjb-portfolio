import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "/imgs/xjb-port.jpg";
import Home2 from "./Home/Home2";
import Type from "../components/Type";

import "./Home/Home.css";

function Home() {
  return (
    <section>
      <Container fluid className="homeSection" id="home">
        <div className="hero-overlay"></div>
        <Container className="homeContent">
          <Row className="align-items-center">
            <Col lg={5} className="homeHeader">
              <div className="hero-content-wrapper">
                <div className="greeting-container">
                  <h1 className="greeting-text">Hi There! 
                    <span className="wave" role="img" aria-labelledby="wave">
                      👋🏻
                    </span>
                  </h1>
                </div>
                
                <div className="name-container">
                  <h1 className="headingName">
                    I'M <span className="mainName">XAVIER BRIGGS</span>
                  </h1>
                </div>
                
                <div className="typewriter-container">
                  <Type />
                </div>
                
                <div className="cta-container">
                  <a href="#about" className="cta-button primary">About Me</a>
                  <a href="/Resume" className="cta-button secondary">Resume</a>
                </div>
              </div>
            </Col>

            <Col lg={7} className="home-image-column">
              <div className="image-frame">
                <img
                  src={homeLogo}
                  alt="Xavier Briggs"
                  className="profile-image"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>

      <Home2 />
    </section>
  );
}

export default Home;