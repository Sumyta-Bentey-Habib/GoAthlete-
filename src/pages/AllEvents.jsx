import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import EventCard from '../components/EventCard';

const AllEvents = () => {
  const initialEvent = useLoaderData();
  const [events, setEvents] = useState(initialEvent);

  console.log("Events in AllEvents:", events);

  return (
    <div className='flex justify-center items-center'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 m-10'>
        {events && events.length > 0 ? (
          events.map((eve) => (
            <EventCard eve={eve} key={eve._id} />
          ))
        ) : (
          <p>No events found or loading...</p>
        )}
      </div>
    </div>
  );
};

export default AllEvents;
