import EventForm from './EventForm'

const Overlay = ({ setOverlayShow, addEvent }) => {
  return (
    <div className='overlay'>
      <EventForm
        setOverlayShow={setOverlayShow}
        addEvent={addEvent}
      />
    </div>
  );
}

export default Overlay;