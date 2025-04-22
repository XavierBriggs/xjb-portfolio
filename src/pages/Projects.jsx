import React from 'react';
import ProjectCard from '../components/ProjectCard.jsx';
import projects from '../projects';
import { Container, Row, Col } from 'react-bootstrap';

function Projects() {
  return (
    <section className="projects-section">
      <Container>
        <Row className="mb-5">
          <Col lg={12} className="text-center">
            <h1 className="projects-heading">
              My Recent <span className="highlight-text">Projects</span>
            </h1>
            <p className="projects-subtitle">
              Here's a collection of my recent work
            </p>
          </Col>
        </Row>

        <Row className="project-card-container">
          {projects.map((project) => (
            <ProjectCard
              key={project.key}
              title={project.title}
              content={project.content}
              img={project.img}
              url={project.url}
              demoUrl={project.demoUrl}
              technologies={project.technologies}
            />
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Projects;