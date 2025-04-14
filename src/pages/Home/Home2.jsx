import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import avatarImg from '/imgs/xjb-port.jpg';
import "./Home.css";
import Particle from "../../components/Particle";

function Home2() {
  const Highlight = ({ children }) => <i className="highlight">{children}</i>;

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        
        <Row className="home-about-row">
          <Col md={8} className="home-about-description">
            <h1 className="home-about-heading">
              WHO IS <span className="gold-text">XAVIER?</span>
            </h1>
            <p className="home-about-body">
              I’m a <Highlight>Computer Science student at Notre Dame</Highlight> with a passion for building technology that serves real people.
              <br /><br />
              My focus lies at the intersection of <Highlight>Artificial Intelligence</Highlight> and <Highlight>Human-Centered Design</Highlight> — using modern tools to create systems that uplift communities and drive meaningful change.
              <br /><br />
              I’ve worked with <Highlight>React.js, Flask, Python, C/C++, and TypeScript</Highlight> on projects ranging from AI-driven research apps to real-time event tracking platforms.
              <br /><br />
              Whether I’m developing with <Highlight>LLMs and OpenAI APIs</Highlight>, crafting a <Highlight>Flutter + Flask mobile pipeline</Highlight>, or diving deep into <Highlight>data analysis and backend optimization</Highlight>, I aim to build things that are both technically sound and socially impactful.
              <br /><br />
              You’ll often find me collaborating in spaces like <Highlight>ColorStack</Highlight> and <Highlight>CS for Good</Highlight>, or exploring ideas around how AI can be more <Highlight>accessible and programmable for everyday users.</Highlight>
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <Image
              src={avatarImg}
              className="img-fluid rounded-circle shadow-lg avatar-image-custom"
              alt="Xavier Briggs Avatar"
            />
          </Col>
        </Row>

        <Row className="home-socials-row">
          <Col md={12} className="home-about-social">
            <h1>LET'S CONNECT</h1>
            <p>
              I’m always excited to meet people building bold things with purpose.
              Reach out if you want to chat, collaborate, or just say hi.
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/XavierBriggs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="GitHub Profile"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/xavierbriggs05/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="LinkedIn Profile"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/XBriggs89727"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="Twitter Profile"
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
