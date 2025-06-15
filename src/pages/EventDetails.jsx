import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import {
  CalendarDays,
  User,
  PlusCircle,
  Clock,
  CheckCircle,
  LocateFixed,
} from "lucide-react";
import Swal from "sweetalert2";
import { AuthContext } from "../contexts/AuthContext/AuthProvider";

const EventDetails = () => {
  useEffect(() => {
    document.title = "Event Details || GoAthlete";
  }, []);
  const event = useLoaderData();
  const { user } = useContext(AuthContext);
  const [isBooked, setIsBooked] = useState(false);

  const { _id, eventName, image, description, creatorName, eventDate,eventLocation } =
    event || {};

  // Check if the event is already booked by the user
  useEffect(() => {
    const fetchBookings = async () => {
      if (user?.email && _id) {
        const res = await fetch(
          ` https://goathlete-server-site.vercel.app/bookings?email=${user.email}`,
          { credentials: "include" }
        );
        const data = await res.json();
        const alreadyBooked = data.some((b) => b.eventId === _id);
        setIsBooked(alreadyBooked);
      }
    };

    fetchBookings();
  }, [user, _id]);

  const handleAddToList = async () => {
    const currentDate = new Date();
    const eventD = new Date(eventDate);

    if (eventD < currentDate) {
      return Swal.fire({
        title: "Expired Event",
        text: "You cannot add a past event.",
        icon: "error",
        confirmButtonColor: "#EF4444",
      });
    }

    const booking = {
      eventId: _id,
      eventName,
      image,
      description,
      creatorName,
      eventDate,
      email: user?.email,
    };

    const res = await fetch(" https://goathlete-server-site.vercel.app/bookings", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(booking),
    });

    const data = await res.json();

    if (data.insertedId) {
      Swal.fire({
        title: "Event Added!",
        text: `${eventName} has been added to your list.`,
        icon: "success",
        confirmButtonColor: "#7C3AED",
      });
      setIsBooked(true);
    } else {
      Swal.fire({
        title: "Already Added",
        text: "You have already added this event.",
        icon: "info",
        confirmButtonColor: "#3B82F6",
      });
    }
  };

  if (!event) {
    return (
      <p className="text-center mt-10 text-gray-500">
        Loading event details...
      </p>
    );
  }

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
          <span className="flex items-center gap-1 text-violet-500 text-lg ml-4">
    <LocateFixed className="w-6 h-6" />
    {eventLocation || "Unknown Location"}
  </span>
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
        disabled={isBooked}
        className={`flex items-center gap-2 px-6 py-3 font-semibold rounded-lg transition duration-200 ${
          isBooked
            ? "bg-gray-300 text-gray-600 cursor-not-allowed"
            : "bg-violet-500 text-white hover:bg-violet-600"
        }`}
      >
        {isBooked ? (
          <>
            <CheckCircle className="w-5 h-5" />
            Already Added
          </>
        ) : (
          <>
            <PlusCircle className="w-5 h-5" />
            Add to My Event List
          </>
        )}
      </button>
    </div>
  );
};

export default EventDetails;
