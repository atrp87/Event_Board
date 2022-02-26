import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const EventList = ({ events, deleteEventHandler, boardPin }) => {


  return (
    events.map((eve) => (
      <Card key={eve.id} style={{ width: '20rem' }}>
        <Card.Body>
          <Card.Text style={{ color: 'green', fontSize: '30px' }}>{boardPin}</Card.Text>
          <Card.Text>{eve.type} {eve.date}</Card.Text>
          <Card.Title>{eve.title}</Card.Title>
          <Card.Text>{eve.description}</Card.Text>
          <Card.Text>Location: {eve.location}</Card.Text>
          <Card.Text>Time: {eve.time}</Card.Text>
          <Button variant="outline-danger" onClick={() => deleteEventHandler(eve.id)}>Delete</Button>
        </Card.Body>
      </Card >
    ))
  );
}

export default EventList;