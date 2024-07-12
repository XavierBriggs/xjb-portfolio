import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'react-bootstrap/Image';
import { ListGroup } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


function Home (){

    return (<>
    <Row xs="auto" md="auto" lg="auto" xl="auto" className="g-4">
        <Col>
        <p id="homeMessage"> Hi My Name is Xavier and I code sometimes</p>
        </Col>
        <Col>
        <Image id="mainPic" src="/imgs/xjb-port.jpg" border="Warning" alt="Xavier Briggs" thumbnail fluid/>
        </Col>
    
    </Row>
    
    
    </>)
}
export default Home;


