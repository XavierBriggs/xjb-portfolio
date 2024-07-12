import React from 'react';
import ProjectCard from '../components/ProjectCard.jsx'; 
import projects from '../projects'; 
import CardGroup from 'react-bootstrap/CardGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';



function Projects (){
    function createCard(project) {
        return (
          <ProjectCard 
            key={project.key} 
            title={project.title} 
            content={project.content} 
            img={project.img} 
          />
        );
      }
      
      return (
        <div className="Projects">   
        <h2 id='ProjectInfo' className='merriweather-bold'>Here are some of my recent <span className="merriweather-bold "id='project'>Projects</span></h2>  
      <Row xs="auto" sm="auto" md="auto" lg="auto" className="g-4">
      {projects.map(createCard)}
      </Row>
        </div>
      );
}

export default Projects;