import React, { useEffect } from "react";

const AboutUs = () => {
   useEffect(() => {
      document.title = "About Us || GoAthlete";
    }, []);
  return (
    <div className="max-w-6xl mx-auto px-4 py-20 grid gap-10">

      <div className="w-full rounded-md shadow-md bg-gray-300 text-black p-6">
        <h1 className="text-4xl font-bold mb-4 text-blue-700">About GoAthlete</h1>
        <p className="text-lg text-purple-700">
          Empowering athletes, uniting communities.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="rounded-md shadow-md bg-gray-300 text-black p-6">
          <h2 className="text-2xl font-semibold mb-4 text-blue-700">Our Mission</h2>
          <p className="text-black">
            At GoAthlete, our mission is to inspire and empower athletes of all
            levels to connect, compete, and grow together. We provide a
            comprehensive platform to discover events, book competitions, and
            build meaningful sports communities.
          </p>
        </div>

        <div className="rounded-md shadow-md bg-gray-300 text-black p-6">
          <h2 className="text-2xl font-semibold mb-4 text-blue-700">Our Vision</h2>
          <p className="text-black">
            We envision a world where every athlete, from beginners to
            professionals, has the resources and support they need to achieve
            their dreams. We aim to make sports accessible, organized, and
            engaging for everyone.
          </p>
        </div>
      </div>

      <div className="rounded-md shadow-md bg-gray-300 text-black p-6">
        <h2 className="text-2xl font-semibold mb-4 text-blue-700">Our Story</h2>
        <p className="text-black">
          GoAthlete was born from a simple idea: athletes thrive when they have
          the right community. We started as a small team of sports enthusiasts
          and technologists who saw the challenges in organizing and finding
          events. Today, GoAthlete connects thousands of athletes and event
          organizers, making sports more accessible than ever.
        </p>
      </div>

      <div className="rounded-md shadow-md bg-gray-300 text-black p-6">
        <h2 className="text-2xl font-semibold mb-4 text-blue-700">Our Core Values</h2>
        <ul className="list-disc pl-6 text-black space-y-2">
          <li>Community: We believe in the power of unity and support.</li>
          <li>Integrity: Fairness and transparency in every match and event.</li>
          <li>Innovation: Using technology to simplify sports management.</li>
          <li>Passion: Fueling athletes’ dreams and aspirations.</li>
        </ul>
      </div>

      <div className="rounded-md shadow-md bg-gray-300 text-black p-6 text-center">
        <h2 className="text-2xl font-bold mb-4 text-blue-700">Join Us</h2>
        <p className="text-black mb-6">
          Whether you’re an athlete, coach, or organizer — we welcome you to be
          part of the GoAthlete community.
        </p>
        <a
          href="/register"
          className="inline-block bg-violet-400 text-gray-900 px-6 py-3 rounded-md font-semibold hover:bg-violet-300 transition duration-200"
        >
          Get Started
        </a>
      </div>

    </div>
  );
};

export default AboutUs;
