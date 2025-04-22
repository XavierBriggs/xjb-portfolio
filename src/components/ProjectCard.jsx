import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

function ProjectCard(props) {
  // Check if URL is GitHub
  const isGithub = props.url && props.url.includes('github.com');
  
  return (
    <Col xs={12} sm={6} md={4} lg={4} className="mb-4">
      <Card className="project-card h-100 shadow">
        <div className="project-img-container">
          <Card.Img variant="top" src={props.img} className="project-img" />
          <div className="project-img-overlay">
            <div className="tech-badges">
              {props.technologies && props.technologies.map((tech, index) => (
                <Badge key={index} bg="light" text="dark" className="me-1 mb-1">{tech}</Badge>
              ))}
            </div>
          </div>
        </div>
        <Card.Body className="d-flex flex-column">
          <Card.Title className="project-title">{props.title}</Card.Title>
          <Card.Text className="project-description flex-grow-1">
            {props.content}
          </Card.Text>
          <div className="d-flex justify-content-between mt-3">
            {props.url ? (
              <Button 
                variant="outline-primary" 
                className='project-btn' 
                href={props.url} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={isGithub ? faGithub : faLink} className="me-2" />
                {isGithub ? 'View Code' : 'View Project'}
              </Button>
            ) : (
              <Button variant="outline-secondary" disabled>Coming Soon</Button>
            )}
            
            {props.demoUrl && (
              <Button 
                variant="outline-success" 
                className='project-btn' 
                href={props.demoUrl} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLink} className="me-2" />
                Live Demo
              </Button>
            )}
          </div>
        </Card.Body>
      </Card>
    </Col>

  );
};


export default ProjectCard;