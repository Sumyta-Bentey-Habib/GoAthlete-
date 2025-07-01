import React from "react";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import { Clock, LocateFixed } from "lucide-react";

const EventCard = ({ eve }) => {
  const { image, eventName, description, _id, eventDate, eventLocation } = eve;

  return (
    <div className="w-full max-w-sm sm:max-w-sm md:max-w-md lg:max-w-sm xl:max-w-md rounded-md shadow-md bg-gray-300 text-black overflow-hidden flex flex-col">
      {/* Image */}
      <img
        src={image}
        alt={eventName}
        className="w-full h-56 sm:h-64 md:h-72 object-cover rounded-t-md"
      />

      {/* Content */}
      <div className="flex flex-col justify-between p-4 sm:p-5 space-y-3 flex-grow">
        <div className="space-y-2">
          <h2 className="text-xl sm:text-2xl font-bold">{eventName}</h2>

          <p className="text-purple-700 text-xs sm:text-sm font-medium">
            <Typewriter
              words={[
                "Join us!",
                "Be part of something amazing.",
                "Let’s make memories.",
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </p>

          <span className="flex items-center gap-2 text-violet-500 text-sm sm:text-base">
            <LocateFixed className="w-5 h-5 sm:w-6 sm:h-6" />
            {eventLocation || "Unknown Location"}
          </span>

          <p className="flex items-center gap-2 mt-1 text-sm sm:text-base">
            <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />
            <span className="font-medium">Event Date:</span> {eventDate}
          </p>

          <p className="text-sm text-black">{description}</p>
        </div>

        <Link to={`/events/${_id}`}>
          <button
            type="button"
            className="w-full mt-4 p-3 font-semibold rounded-md bg-violet-500 text-white hover:bg-violet-600 transition duration-200 text-sm sm:text-base"
          >
            Uncover Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default EventCard;
