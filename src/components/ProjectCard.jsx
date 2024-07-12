import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function ProjectCard(props) {
  return (
    <>
    <Col key={props.key}>
    <Card border="info" style={{ height: "25rem", width: '15rem', textAlign: 'center' }}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.content}
        </Card.Text>
        <Button variant="primary" className='Project'>Click Me!</Button>
      </Card.Body>
    </Card>
    </Col>
    </>

  );
};


export default ProjectCard;