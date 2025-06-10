import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from "../components/Banner";
import Animated from "../components/Animated";
import EventCard from '../components/EventCard';

const Home = () => {
  const events = useLoaderData();

  console.log("Events in Home:", events);

  return (
    <div>
      <Banner />
      <div className="m-5">
        <Animated />
        <h2 className="text-center">All Events</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          {events && events.length > 0 ? (
            events.map((eve) => (
              <EventCard eve={eve} key={eve._id} />
            ))
          ) : (
            <p>No events found or loading...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
