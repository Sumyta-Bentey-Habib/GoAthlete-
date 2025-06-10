import React from "react";
import { useLoaderData } from "react-router";
import { CalendarDays, User, PlusCircle, Clock } from "lucide-react";
import Swal from "sweetalert2";

const EventDetails = () => {
  const event = useLoaderData();

  if (!event) {
    return <p className="text-center mt-10 text-gray-500">Loading event details...</p>;
  }

  const { eventName, image, description, creatorName, eventDate } = event;

  const handleAddToList = () => {
    Swal.fire({
      title: "Event Added!",
      text: `${eventName} has been added to your list.`,
      icon: "success",
      confirmButtonColor: "#7C3AED",
      confirmButtonText: "Awesome!",
    });
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 space-y-6">
      <img
        src={image}
        alt={eventName}
        className="rounded-lg w-full object-cover h-72"
      />

      <div className="space-y-4">
        <h1 className="text-4xl font-extrabold text-gray-800 flex items-center gap-2">
          <CalendarDays className="w-6 h-6 text-violet-500" />
          {eventName}
        </h1>

        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6 text-gray-600 text-md">
          <p className="flex items-center gap-2 mt-2">
            <Clock className="w-5 h-5 text-blue-500" />
            <span className="font-medium">Event Date:</span> {eventDate}
          </p>

          <p className="flex items-center gap-2 mt-2">
            <User className="w-5 h-5 text-emerald-500" />
            <span className="font-medium">Organizer:</span> {creatorName}
          </p>
        </div>

        <p className="text-gray-700 text-base leading-relaxed">{description}</p>
      </div>

      <button
        onClick={handleAddToList}
        className="flex items-center gap-2 px-6 py-3 bg-violet-500 text-white font-semibold rounded-lg hover:bg-violet-600 transition duration-200"
      >
        <PlusCircle className="w-5 h-5" />
        Add to My Event List
      </button>
    </div>
  );
};

export default EventDetails;
