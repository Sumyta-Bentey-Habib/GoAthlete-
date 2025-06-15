import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext/AuthProvider";
import { Trash2, CalendarDays, Table, LayoutGrid } from "lucide-react";
import Swal from "sweetalert2";

const MyBookings = () => {
  useEffect(() => {
    document.title = "My Bookings || GoAthlete";
  }, []);

  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const [isTableView, setIsTableView] = useState(false);

  useEffect(() => {
    if (user?.email) {
      fetch(` https://goathlete-server-site.vercel.app/bookings?email=${user.email}`, {
        credentials: "include",
      })
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
      const res = await fetch(` https://goathlete-server-site.vercel.app/bookings/${id}`, {
        method: "DELETE",
        credentials: "include",
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
    <div className="max-w-7xl mx-auto mt-12 px-4">
      {/* Toggle Buttons */}
      <div className="flex justify-end mb-6 space-x-3">
        <button
          onClick={() => setIsTableView(false)}
          className={`flex items-center gap-1 px-4 py-2 rounded-lg border transition ${
            !isTableView
              ? "bg-violet-600 text-white border-violet-600"
              : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
          }`}
          aria-label="Card View"
          title="Card View"
        >
          <LayoutGrid className="w-5 h-5" />
          Card View
        </button>
        <button
          onClick={() => setIsTableView(true)}
          className={`flex items-center gap-1 px-4 py-2 rounded-lg border transition ${
            isTableView
              ? "bg-violet-600 text-white border-violet-600"
              : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
          }`}
          aria-label="Table View"
          title="Table View"
        >
          <Table className="w-5 h-5" />
          Table View
        </button>
      </div>

      {/* Content */}
      {!isTableView ? (
        // Card View
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
                <h3 className="text-xl font-semibold text-gray-800">
                  {eventName}
                </h3>
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
      ) : (
        // Table View
        <div className="overflow-x-auto rounded-lg shadow-md">
          <table className="min-w-full bg-white rounded-lg">
            <thead className="bg-violet-600 text-white">
              <tr>
                <th className="py-3 px-6 text-left font-semibold uppercase tracking-wider">
                  Event Name
                </th>
                <th className="py-3 px-6 text-left font-semibold uppercase tracking-wider">
                  Event Date
                </th>
                <th className="py-3 px-6 text-center font-semibold uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {bookings.map(({ _id, eventName, eventDate }) => (
                <tr
                  key={_id}
                  className="border-b border-gray-200 hover:bg-violet-50 transition-colors duration-200 cursor-pointer"
                >
                  <td className="py-4 px-6 text-gray-700">{eventName}</td>
                  <td className="py-4 px-6 text-gray-600">{formatDate(eventDate)}</td>
                  <td className="py-4 px-6 text-center">
                    <button
                      onClick={() => handleDelete(_id)}
                      className="inline-flex items-center px-3 py-1 bg-red-600 text-white text-sm font-medium rounded hover:bg-red-700 transition"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyBookings;
