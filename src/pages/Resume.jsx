import React from "react";
import { Button, Card } from "react-bootstrap";

function Resume() {
    return (
        <>
            <div className="d-flex align-items-center justify-content-center Resume" style={{ height: "75vh", paddingBottom: "50px"}}>
                <Card bg="dark" border="secondary" style={{ height: "35rem", width: '25rem', textAlign: 'center',paddingBottom: "50px" }}>
                    <Card.Img variant="top" src="/imgs/XJB-Resume.png" className="ResumeCard" style={{ height: "30rem",paddingBottom: "50px" }} />
                    <Card.Body className="ResumeCard" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', paddingBottom: "50px"}}>
                    <a href="/imgs/Xavier Briggs Resume.pdf" download><Button className="ResumeCard" variant="primary">Download</Button></a>
                    </Card.Body>
                </Card>
            </div>
        </>
    );
}

export default Resume;
//make nicer