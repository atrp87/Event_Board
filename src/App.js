import Title from './components/Title'
import './App.css';
import { useState } from 'react';

function App() {
  const [events, setEvents] = useState([
    { id: 1, title: 'Bradley"s birthday party', location: 'Inverness', date: '20/6/2022', time: '15:00', type: 'Birthday', description: 'Bring a sleeping bag' },
  ]);


  return (
    <div className="App">
      <Title />

      {
        events.map((eve) => {
          <div>
            <h2>{eve.title}</h2>
            {console.log(events)}
          </div>
        })
      }

    </div>
  );
}

export default App;
