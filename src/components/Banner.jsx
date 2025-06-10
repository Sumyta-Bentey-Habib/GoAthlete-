import React from "react";
import bgimage from "../assets/images/bg.jpg";
import { ArrowBigRightDash } from "lucide-react";

const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${bgimage})`,
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h2 className="mb-5 text-5xl font-bold">Welcome to GoAthlete</h2>
          <p className="mb-5">
            Empower your athletic journey with personalized training plans,
            real-time performance tracking, and a community of passionate
            athletes. Join GoAthlete and take your game to the next level!
          </p>
          <button className="btn btn-primary">
            Explore
            <ArrowBigRightDash />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
