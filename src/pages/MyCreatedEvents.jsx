import React, { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import axios from "axios";
import Swal from "sweetalert2";

const MyCreatedEvents = () => {
  useEffect(() => {
    document.title = " MyCreated Events || GoAthlete";
  }, []);

  const [events, setEvents] = useState([]);
  const [editingEvent, setEditingEvent] = useState(null);
  const auth = getAuth();
  const user = auth.currentUser;

  useEffect(() => {
    if (user?.email) {
      axios
        .get(`http://localhost:3000/my-events?email=${user.email}`)
        .then((res) => setEvents(res.data))
        .catch((err) => console.error(err));
    }
  }, [user?.email]);

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        await axios.delete(`http://localhost:3000/events/${id}`);
        setEvents(events.filter((e) => e._id !== id));
        Swal.fire("Deleted!", "Your event has been deleted.", "success");
      } catch (err) {
        console.error("Delete failed", err);
        Swal.fire("Error!", "Failed to delete the event.", "error");
      }
    }
  };

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const updatedEvent = {
      eventName: form.eventName.value,
      eventType: form.eventType.value,
      eventDate: form.eventDate.value,
      description: form.description.value,
      image: form.image.value,
    };

    try {
      await axios.put(
        `http://localhost:3000/events/${editingEvent._id}`,
        updatedEvent
      );
      setEvents(
        events.map((e) =>
          e._id === editingEvent._id ? { ...e, ...updatedEvent } : e
        )
      );
      Swal.fire("Success!", "Event updated successfully.", "success");
      setEditingEvent(null);
    } catch (err) {
      console.error("Update failed", err);
      Swal.fire("Error!", "Failed to update the event.", "error");
    }
  };

  return (
    <div className="p-4 text-gray-900 dark:text-gray-100">
      {events.length === 0 ? (
        <p>No events created by you.</p>
      ) : (
        <ul className="space-y-3">
          {events.map((event) => (
            <li
              key={event._id}
              className="border p-4 rounded-md bg-white dark:bg-gray-800"
            >
              <h3 className="text-lg font-bold">{event.eventName}</h3>
              <p>{event.description}</p>
              <div className="mt-2 flex gap-2">
                <button
                  onClick={() => setEditingEvent(event)}
                  className="px-2 py-1 rounded bg-yellow-500 text-white"
                >
                  Update
                </button>
                <button
                  onClick={() => handleDelete(event._id)}
                  className="px-2 py-1 rounded bg-red-500 text-white"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      {editingEvent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-900 rounded-lg p-6 w-full max-w-lg">
            <h3 className="text-xl font-bold mb-4">Update Event</h3>
            <form onSubmit={handleUpdateSubmit} className="space-y-3">
              <input
                name="eventName"
                defaultValue={editingEvent.eventName}
                className="w-full p-2 border rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                placeholder="Event Name"
                required
              />
              <input
                name="eventType"
                defaultValue={editingEvent.eventType}
                className="w-full p-2 border rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                placeholder="Event Type"
                required
              />
              <input
                name="eventDate"
                defaultValue={editingEvent.eventDate}
                type="date"
                className="w-full p-2 border rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                required
              />
              <input
                name="image"
                defaultValue={editingEvent.image}
                className="w-full p-2 border rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                placeholder="Image URL"
                required
              />
              <textarea
                name="description"
                defaultValue={editingEvent.description}
                className="w-full p-2 border rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                placeholder="Description"
                required
              />
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setEditingEvent(null)}
                  className="px-3 py-1 rounded bg-gray-500 text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-3 py-1 rounded bg-green-600 text-white"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyCreatedEvents;
