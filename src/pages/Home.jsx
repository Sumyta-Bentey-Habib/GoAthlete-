import React, { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Animated from "../components/Animated";
import EventCard from "../components/EventCard";
import NewsGrid from "../components/NewsGrid";

const Home = () => {
  useEffect(() => {
    document.title = "GoAthlete";
  }, []);
  const events = useLoaderData();

  console.log("Events in Home:", events);

  return (
    <div>
      <Banner />
      <div className="m-5">
        <Animated />
      </div>
      <div className="m-10">
        <h2 className="text-center text-4xl font-bold mb-6">All Events</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {events && events.length > 0 ? (
            events.map((eve) => <EventCard eve={eve} key={eve._id} />)
          ) : (
            <p>No events found or loading...</p>
          )}
        </div>
      </div>
      <NewsGrid></NewsGrid>
    </div>
  );
};

export default Home;
