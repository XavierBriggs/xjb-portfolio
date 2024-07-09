import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ProjectCard(props) {
  return (
    <>
    <Card border="info" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.content}
        </Card.Text>
        <Button variant="primary" className='Project'>Click Me!</Button>
      </Card.Body>
    </Card>
    </>

  );
}

export default ProjectCard;