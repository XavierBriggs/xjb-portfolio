import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import './styles/Resume.css';

function Resume() {
  return (
    <section className="resume-section">
      <Container>
        <Row className="justify-content-center">
          <Col md={8} lg={6} className="text-center">
            <div className="resume-download-card">
              <h1 className="resume-heading mb-4">
                My <span className="highlight-text">Resume</span>
              </h1>
              <div className="resume-preview">
                <img 
                  src="/imgs/XJB-Resume.png" 
                  alt="Resume Preview" 
                  className="resume-thumbnail" 
                />
              </div>
              <p className="resume-text mt-4">
                Download my resume to learn more about my education, skills, and experience.
              </p>
              <a 
                href="/Xavier Briggs Master Resume.pdf" 
                download="Xavier Briggs Master Resume.pdf"
                className="download-btn"
              >
                <FontAwesomeIcon icon={faDownload} className="me-2" />
                Download Resume
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Resume;