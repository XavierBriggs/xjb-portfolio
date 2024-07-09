import React from 'react';
import ProjectCard from '../components/ProjectCard.jsx'; 
import projects from '../projects'; 
import CardGroup from 'react-bootstrap/CardGroup';
import "../styles/projectCard.css";


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
          <CardGroup>
            {projects.map(createCard)}
            </CardGroup>
        </div>
      );
}

export default Projects;