import Title from './components/Title'
import './App.css';
import React, { useState } from 'react';
import EventList from './components/EventList';
import Overlay from './components/Overlay';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbtack } from '@fortawesome/free-solid-svg-icons'


function App() {
  const boardPin = <FontAwesomeIcon icon={faThumbtack} />
  const [count, setCount] = useState(0);
  const [overlayShow, setOverlayShow] = useState(false);
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "Bradley's flat party",
      location: 'FeatherHall Avenue',
      date: '20/6/2022',
      time: '15:00',
      type: '',
      description: 'Bring your own food and a sleeping bag'
    },
    {
      id: 2,
      title: "Maya's study group",
      location: 'Usher Hall',
      date: '3/5/2022',
      time: '11:00',
      type: 'Education',
      description: 'Have your own laptop if possible'
    },
    {
      id: 3,
      title: "City clean up",
      location: 'Waverley Station',
      date: '12/3/2022',
      time: '09:00',
      type: 'Volunteering',
      description: 'Warm clothes & lunch'
    },
  ]);

  // const filterEventType = (events) => {
  //   events.map(eve => {
  //     return eve.filter(event => {
  //       return event === event.type
  //     })
  //   })

  //   filterEventType(events)

  const addEvent = (newEvent) => {
    setEvents((priorEvent) => {
      setCount(count + 1)
      return [newEvent, ...priorEvent];
    });
  }

  const deleteEventHandler = (id) => {
    setEvents((priorEvents) => {
      return priorEvents.filter((event) => {
        return id !== event.id;
      });
    })
  }

  return (
    <>

      <Container className='header_content'>
        <Title count={count} />
        <Button variant="primary" onClick={() => setOverlayShow(true)}>
          Create {boardPin}
        </Button>
      </Container>

      <Container className='list'>
        <EventList
          boardPin={boardPin}
          events={events}
          deleteEventHandler={deleteEventHandler}
        />
      </Container>

      {
        overlayShow && <Overlay setOverlayShow={setOverlayShow} addEvent={addEvent} />
      }

    </>
  );
}

export default App;
