import React from "react";
import { Button, Card, Row, Col } from "react-bootstrap";

function Resume() {
    return (
        <>
            <Row xs="auto" md="auto" lg="auto" xl="auto" className="d-flex align-items-center justify-content-center">
            <Col style={{paddingBottom: "75px"}}>
                <Card bg="dark" border="secondary" style={{ height: "35rem", width: '25rem', textAlign: 'center',paddingBottom: "50px" }}>
                    <Card.Img variant="top" src="/imgs/XJB-Resume.png" className="ResumeCard" style={{ height: "30rem",paddingBottom: "50px" }} />
                    <Card.Body className="ResumeCard" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', paddingBottom: "50px"}}>
                    <a href="/Xavier Briggs Master Resume.pdf" download="Xavier Briggs Master Resume.pdf"><Button className="ResumeCard" variant="primary">Download Resume</Button></a>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
        </>
    );
}

export default Resume;
//make nicer