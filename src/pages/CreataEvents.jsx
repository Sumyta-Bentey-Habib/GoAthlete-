import React, { useContext, useEffect } from "react";
import { AuthContext } from "../contexts/AuthContext/AuthProvider";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const CreateEvents = () => {
  useEffect(() => {
    document.title = "Create An Event || GoAthlete";
  }, []);
  const { user, loading } = useContext(AuthContext);
  const navigate = useNavigate();

  if (loading) return <p>Loading...</p>;
  if (!user) {
    navigate("/login");
    return null;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const eventName = form.eventName.value;
    const eventType = form.eventType.value;
    const eventDate = form.eventDate.value;
    const description = form.description.value;
    const image = form.image.value;

    const eventData = {
      eventName,
      eventType,
      eventDate,
      description,
      image,
      creatorEmail: user.email,
      creatorName: user.displayName || "Anonymous",
    };

    try {
      const response = await fetch("http://localhost:3000/events", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(eventData),
      });

      if (response.ok) {
        Swal.fire("Success", "Event  created successfully!", "success");
        navigate("/");
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to create group");
      }
    } catch (error) {
      Swal.fire("Error", error.message, "error");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Create New Event</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Event Name</label>
          <input
            type="text"
            name="eventName"
            required
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <div>
          <label className="block mb-1">Event Type</label>
          <select
            name="eventType"
            required
            className="w-full border px-3 py-2 rounded"
          >
            <option value="" className="text-blue-900 text-2xl">
              Select Event Type
            </option>
            <option value="Swimming" className="text-blue-900">
              Swimming
            </option>
            <option value="Sprinting" className="text-blue-900">
              Sprinting
            </option>
            <option value="Long Jump" className="text-blue-900">
              Long Jump
            </option>
            <option value="High Jump" className="text-blue-900">
              High Jump
            </option>
            <option value="Hurdle Race" className="text-blue-900">
              Hurdle Race
            </option>
            <option value=" Archery" className="text-blue-900">
              {" "}
              Archery
            </option>
            <option value="others" className="text-blue-900">
              {" "}
              Others
            </option>
          </select>
        </div>

        <div>
          <label className="block mb-1">Event Date</label>
          <input
            type="date"
            name="eventDate"
            required
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <div>
          <label className="block mb-1">Description</label>
          <textarea
            name="description"
            rows="4"
            required
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <div>
          <label className="block mb-1">Event Image URL</label>
          <input
            type="url"
            name="image"
            required
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Submit Event
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateEvents;
