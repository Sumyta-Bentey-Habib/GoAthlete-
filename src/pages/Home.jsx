import React, { useEffect } from "react";
import { useLoaderData, Link } from "react-router-dom";
import Banner from "../components/Banner";
import Animated from "../components/Animated";
import EventCard from "../components/EventCard";
import NewsGrid from "../components/NewsGrid";
import VerticalGallery from "../components/VerticalGallery";

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
        <h2 className="text-center text-4xl font-bold mb-6">Discover Your Next Challenge</h2>
        <p className="text-center font-bold mb-6">Explore a wide variety of sporting events designed for every athlete, whether you're just starting out or going pro</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {events && events.length > 0 ? (
            events
              .slice(0, 3)
              .map((eve) => <EventCard eve={eve} key={eve._id} />)
          ) : (
            <p>No events found or loading...</p>
          )}
        </div>

        <div className="text-center mt-8">
          <Link to="/all-events">
            <button className="inline-block bg-violet-400 text-gray-900 px-6 py-3 rounded-md font-semibold hover:bg-violet-300 transition duration-200">
              Dive Deeper
            </button>
          </Link>
        </div>
      </div>

      <NewsGrid />
      <VerticalGallery></VerticalGallery>
    </div>
  );
};

export default Home;
