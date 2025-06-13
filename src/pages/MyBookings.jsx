import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext/AuthProvider";
import { Trash2, CalendarDays } from "lucide-react";
import Swal from "sweetalert2";

const MyBookings = () => {
  useEffect(() => {
    document.title = "My Bookings || GoAthlete";
  }, []);
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/bookings?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => setBookings(data));
    }
  }, [user]);

  const handleDelete = async (id) => {
    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: "Do you want to delete this event?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#EF4444",
      cancelButtonColor: "#6B7280",
      confirmButtonText: "Yes, delete it!",
    });

    if (confirm.isConfirmed) {
      const res = await fetch(`http://localhost:3000/bookings/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();

      if (data.deletedCount > 0) {
        setBookings((prev) => prev.filter((b) => b._id !== id));
        Swal.fire("Deleted!", "Your booking has been removed.", "success");
      }
    }
  };

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString(undefined, {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  if (!bookings.length) {
    return (
      <div className="text-center mt-20 text-gray-500 text-xl">
        You have no bookings yet. 🗓️
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 px-4">
      {bookings.map(({ _id, eventName, eventDate, image }) => (
        <div
          key={_id}
          className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl bg-white transition duration-300"
        >
          <img
            src={image}
            alt={eventName}
            className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />

          <div className="p-4 space-y-2">
            <h3 className="text-xl font-semibold text-gray-800">{eventName}</h3>
            <p className="flex items-center gap-2 text-gray-600 text-sm">
              <CalendarDays className="w-4 h-4 text-violet-500" />
              {formatDate(eventDate)}
            </p>
          </div>

          <button
            onClick={() => handleDelete(_id)}
            className="absolute top-3 right-3 bg-red-100 text-red-500 hover:bg-red-200 p-2 rounded-full transition duration-200"
          >
            <Trash2 className="w-5 h-5" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default MyBookings;
