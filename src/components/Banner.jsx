import React from "react";
import bgimage from "../assets/images/bg.jpg";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();

  const handleExplore = () => {
    navigate("/all-events"); 
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
            <button
              onClick={handleExplore}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition duration-300"
            >
              Explore Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
