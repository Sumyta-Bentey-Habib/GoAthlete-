import React from 'react';
import { Link } from 'react-router-dom';
import { Typewriter } from "react-simple-typewriter";

const EventCard = ({ eve }) => {
  const { image, eventName, description, _id } = eve;

  return (
    <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-sm xl:max-w-md rounded-md shadow-md bg-gray-300 text-black">
      <img
        src={image}
        alt={eventName}
        className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
      />

      <div className="flex flex-col justify-between p-6 space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold tracking-wide">{eventName}</h2>
          
          <p className="text-purple-700 text-sm font-medium">
            <Typewriter
              words={['Join us!', 'Be part of something amazing.', 'Let’s make memories.']}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </p>

          <p className="text-black text-sm">{description}</p>
        </div>

        <Link to={`/events/${_id}`}>
          <button
            type="button"
            className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-violet-400 text-gray-900 hover:bg-violet-300 transition duration-200"
          >
            Know more
          </button>
        </Link>
      </div>
    </div>
  );
};

export default EventCard;
