import React, { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import axios from "axios";
import Swal from "sweetalert2";

const MyCreatedEvents = () => {
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
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
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
      await axios.put(`http://localhost:3000/events/${editingEvent._id}`, updatedEvent);
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
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">My Created Events</h2>
      {events.length === 0 ? (
        <p>No events created by you.</p>
      ) : (
        <ul className="space-y-3">
          {events.map((event) => (
            <li
              key={event._id}
              className="border p-4 rounded-md shadow-md bg-white"
            >
              <h3 className="text-lg font-bold">{event.eventName}</h3>
              <p>{event.description}</p>
              <div className="mt-2 flex gap-2">
                <button
                  onClick={() => setEditingEvent(event)}
                  className="btn btn-sm btn-warning"
                >
                  Update
                </button>
                <button
                  onClick={() => handleDelete(event._id)}
                  className="btn btn-sm btn-error"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      {/* Modal for updating */}
      {editingEvent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-lg relative">
            <h3 className="text-xl font-bold mb-4">Update Event</h3>
            <form onSubmit={handleUpdateSubmit} className="space-y-3">
              <input
                name="eventName"
                defaultValue={editingEvent.eventName}
                className="w-full p-2 border rounded"
                placeholder="Event Name"
                required
              />
              <input
                name="eventType"
                defaultValue={editingEvent.eventType}
                className="w-full p-2 border rounded"
                placeholder="Event Type"
                required
              />
              <input
                name="eventDate"
                defaultValue={editingEvent.eventDate}
                type="date"
                className="w-full p-2 border rounded"
                required
              />
              <input
                name="image"
                defaultValue={editingEvent.image}
                className="w-full p-2 border rounded"
                placeholder="Image URL"
                required
              />
              <textarea
                name="description"
                defaultValue={editingEvent.description}
                className="w-full p-2 border rounded"
                placeholder="Description"
                required
              />
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setEditingEvent(null)}
                  className="btn btn-sm"
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-sm btn-success">
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
