import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

const EventForm = ({ setOverlayShow, addEvent }) => {
  const [title, setTitle] = useState('');
  const [type, setType] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [description, setDescription] = useState('');

  const resetForm = () => {
    setTitle('');
    setType('');
    setLocation('');
    setDate('');
    setTime('');
    setDescription('');
  }


  const handleFormSubmit = (e) => {
    e.preventDefault();

    const newEvent = {
      // Replace reg Firebase
      id: Math.floor(Math.random() * 1000),
      title: title,
      type: type,
      location: location,
      date: date,
      time: time,
      description: description
    }

    addEvent(newEvent)
    setOverlayShow()
    resetForm()
  }

  return (
    <Container>
      <Form onSubmit={handleFormSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Title:</Form.Label>
          <Form.Control onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Jon Doe's Study Group" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Type:</Form.Label>
          <Form.Select onChange={(e) => setType(e.target.value)} aria-label="Default select example">
            <option>Select an event</option>
            <option value="1">Education</option>
            <option value="2">Self Development</option>
            <option value="3">Social</option>
            <option value="4">Mental & Physical Health</option>
            <option value="5">Volunteering</option>
            <option value="6">Other...</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Location:</Form.Label>
          <Form.Control onChange={(e) => setLocation(e.target.value)} type="text" placeholder="National Library" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>date:</Form.Label>
          <Form.Control onChange={(e) => setDate(e.target.value)} type="date" />
          <Form.Label>time:</Form.Label>
          <Form.Control onChange={(e) => setTime(e.target.value)} type="time" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Example textarea</Form.Label>
          <Form.Control onChange={(e) => setDescription(e.target.value)} as="textarea" rows={3} placeholder="Any information that would assist a participant i.e bring a Laptop" />
        </Form.Group>
        <Button onClick={() => setOverlayShow(false)} variant="outline-danger">Close</Button>
        <Button variant="primary" type="submit">Submit</Button>
      </Form>
    </Container >
  );
}

export default EventForm;