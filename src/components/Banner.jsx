import React, { useState } from "react";
import bgimage from "../assets/images/bg.jpg";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim()) {
      navigate(`/all-events?search=${encodeURIComponent(search.trim())}`);
    } else {
      navigate("/all-events");
    }
  };

  return (
    <div className="p-5">
      <div
        className="hero min-h-[80vh] rounded-3xl overflow-hidden relative"
        style={{
          backgroundImage: `url(${bgimage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50 z-0" />
        <div className="hero-content text-neutral-content text-center relative z-10">
          <div className="max-w-md w-full">
            <h2 className="mb-5 text-5xl font-bold">Welcome to GoAthlete</h2>
            <p className="mb-5">
              Empower your athletic journey with personalized training plans,
              real-time performance tracking, and a community of passionate athletes.
            </p>
            <form
              onSubmit={handleSearch}
              className="flex items-center rounded-full overflow-hidden shadow-lg bg-white"
            >
              <input
                type="text"
                placeholder="Search for events..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full px-4 py-2 text-black focus:outline-none"
              />
              <button
                type="submit"
                className="bg-primary text-white p-2 flex items-center justify-center"
              >
                <Search />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
