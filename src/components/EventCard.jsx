import React from 'react';

const EventCard = ({ eve }) => {
  const { image, eventName, description } = eve;

  return (
    <div className="max-w-xs rounded-md shadow-md bg-gray-300 text-black">
      <img
        src={image}
        alt={eventName}
        className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
      />
      <div className="flex flex-col justify-between p-6 space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold tracking-wide">{eventName}</h2>
          <p className="text-black">{description}</p>
        </div>
        <button
          type="button" 
          className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-violet-400 text-gray-900"
        >
          Know more
        </button>
      </div>
    </div>
  );
};

export default EventCard;
