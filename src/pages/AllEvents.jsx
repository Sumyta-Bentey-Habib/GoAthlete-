import React, { useEffect, useState } from "react";
import EventCard from "../components/EventCard";
import Loading from "../components/Loading";

const AllEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  const [searchText, setSearchText] = useState("");
  const [sortBy, setSortBy] = useState("eventDate"); 
  const [order, setOrder] = useState("desc");        

  const fetchEvents = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://goathlete-server-site.vercel.app/events?search=${encodeURIComponent(
          searchText
        )}&sortBy=${sortBy}&order=${order}`
      );
      const data = await res.json();
      setEvents(data);
    } catch (error) {
      console.error("Error fetching events:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    document.title = "All Events || GoAthlete";
    fetchEvents();
  }, []);

  const handleApply = () => {
    fetchEvents();
  };

  return (
    <div className="flex flex-col items-center m-10">
      <div className="flex flex-wrap gap-4 mb-6">
        <input
          type="text"
          placeholder="Search events..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="border px-3 py-2 rounded"
        />

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="border px-3 py-2 rounded"
        >
          <option value="eventDate" className="text-blue-500">Sort by Date</option>
          <option value="location"className="text-blue-500">Sort by Location</option>
          <option value="eventName" className="text-blue-500">Sort Alphabetically</option>
        </select>

        <select
          value={order}
          onChange={(e) => setOrder(e.target.value)}
          className="border px-3 py-2 rounded"
        >
          <option value="asc" className="text-blue-500">Ascending</option>
          <option value="desc" className="text-blue-500">Descending</option>
        </select>

        <button
          onClick={handleApply}
          className="bg-violet-400 text-white px-4 py-2 rounded"
        >
          Apply
        </button>
      </div>

      {loading ? (
        <Loading />
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full">
          {events && events.length > 0 ? (
            events.map((eve) => <EventCard key={eve._id} eve={eve} />)
          ) : (
            <p>No events found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default AllEvents;
