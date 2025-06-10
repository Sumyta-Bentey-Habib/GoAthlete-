import React from "react";
import bgimage from "../assets/images/bg.jpg";
import { ArrowBigRightDash } from "lucide-react";

const Banner = () => {
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
    </div>
  );
};

export default Banner;
