// src/pages/About.jsx (or wherever this component lives)
import React from "react";
import { Container, Row, Col, Image, Card } from "react-bootstrap";
// Import necessary icons from react-icons
import {
  DiJavascript1, DiReact, DiNodejsSmall, DiPython, DiGit, DiCss3, DiHtml5, DiVisualstudio, DiGithub, DiMongodb
} from 'react-icons/di';
import {
  SiFlask, SiFlutter, SiOpenai, SiC, SiLinux, SiVim
} from 'react-icons/si';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketballBall, faGamepad, faDog } from '@fortawesome/free-solid-svg-icons';
// Particle component is now in App.jsx and applies to all pages

import './styles/About.css'; // Make sure this path matches your project

const Highlight = ({ children }) => <span className="highlight">{children}</span>;

function About() {
  const skills = [
    { icon: <SiC />, name: "C/C++"},
    { icon: <DiPython />, name: "Python" },
    { icon: <DiJavascript1 />, name: "JavaScript" },
    { icon: <DiReact />, name: "React.js" },
    { icon: <DiNodejsSmall />, name: "Node.js" },
    { icon: <SiFlask />, name: "Flask" },
    { icon: <SiFlutter />, name: "Flutter" },
    { icon: <SiOpenai />, name: "OpenAI API" },
    // { icon: <DiCss3 />, name: "CSS" },
    { icon: <DiHtml5 />, name: "HTML" },
    {icon: <DiMongodb />, name: "Mongodb"}
  ];

  const tools = [
    { icon: <DiVisualstudio />, name: "VS Code" },
    { icon: <DiGit />, name: "Git" },
    { icon: <SiLinux />, name: "Linux" },
    { icon: <SiVim />, name: "VIM" },
    { icon: <DiGithub />, name: "Github"}
  ];

  return (
    <Container fluid className="about-page-section" id="about">
      <Container>
        {/* --- Introduction Row --- */}
        <Row className="about-content-row">
          {/* Text Column */}
          <Col md={7} className="about-description">
            <h1 className="about-heading">
              Know Who <span className="gold-text">I AM</span>
            </h1>
            <Card className="quote-card">
              <Card.Body>
                <p className="about-body-text">
                  Hey there! I’m <Highlight>Xavier Briggs</Highlight>, a computer science student at the University of Notre Dame, proudly hailing from Jefferson City, Missouri. Whether I’m deep into debugging a tricky C pointer issue, designing an AI-backed education tool, or building a real-time score tracker for a local event—I’m always exploring how tech can bring people closer together.
                  <br /><br />
                  I’m passionate about making AI accessible and useful for everyday people. From coding in Python and C to diving into frameworks like React, Flask, and Flutter, I love creating things that <em>work well</em> and <em>feel human</em>. Most recently, I've been working on tools to help early childhood teachers reflect on their storytime sessions—because great tech starts with listening.
                  <br /><br />
                  Beyond the screen, I’m all about community—whether that’s through mentorship with <Highlight>ColorStack ND</Highlight>, collaboration with <Highlight>CS for Good</Highlight>, or just sharing laughs over late-night coding sessions. I’m also a proud dog dad, basketball enthusiast, and someone who never turns down a classic video game session.
                  <br /><br />
                  Thanks for stopping by. Let’s build something great together.
                </p>
                <footer className="blockquote-footer">Xavier</footer>
              </Card.Body>
            </Card>

            {/* --- Hobbies Subsection --- */}
            <div className="hobbies-section">
              <h2 className="hobbies-heading">Apart from coding, some activities I love!</h2>
              <div className="hobby-icons">
                <FontAwesomeIcon icon={faBasketballBall} size="2x" title="Basketball" className="hobby-icon" />
                <FontAwesomeIcon icon={faGamepad} size="2x" title="Gaming" className="hobby-icon" />
                <FontAwesomeIcon icon={faDog} size="2x" title="Dog Dad Life" className="hobby-icon" />
              </div>
            </div>
          </Col>

          {/* Image Column */}
          <Col md={5} className="about-img-col">
            <Image
              src="/imgs/XJB-CollegeOfEngin.jpeg"
              alt="Xavier Briggs at Notre Dame Engineering"
              className="img-fluid rounded shadow-lg about-image"
            />
          </Col>
        </Row>

        {/* --- Professional Skillset Row --- */}
        <Row className="skillset-row">
          <Col>
            <h1 className="skillset-heading">
              Professional <span className="gold-text">Skillset</span>
            </h1>
            <div className="tech-grid">
              {skills.map((skill, index) => (
                <div className="tech-card" key={index}>
                  <div className="tech-icon">{skill.icon}</div>
                </div>
              ))}
            </div>
          </Col>
        </Row>

        {/* --- Tools Row --- */}
        <Row className="tools-row">
          <Col>
            <h1 className="tools-heading">
              <span className="gold-text">Tools</span> I Use
            </h1>
            <div className="tech-grid">
              {tools.map((tool, index) => (
                <div className="tech-card" key={index}>
                  <div className="tech-icon">{tool.icon}</div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default About;
