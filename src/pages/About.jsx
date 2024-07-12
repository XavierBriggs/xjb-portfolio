import React from "react";
import { Row, Col } from "react-bootstrap";


function About (){
    return (
        <Row xs="auto" md="auto" lg="auto" xl="auto" className="About">
            <Col>
                <h1 className="merriweather-bold"id="aboutMessage">Get To Know Me: </h1>
            </Col>
            <Col>
                <p id="classMessage">Welcome everyone, I am Xavier Briggs from Jefferson City, Missouri. I am a Sophomore student studying Computer Science at the University Of Notre Dame (Go IRISH!)</p>
            </Col>
            <Col>
            <h2>Other then coding some things I enjoy doing are:</h2>
                <ul>
                    <li>Basketball</li> 
                    <li>Videogames</li>
                    <li>Playing with my dogs</li>
                    </ul>
            </Col>
        </Row>
       
    )
}
export default About;