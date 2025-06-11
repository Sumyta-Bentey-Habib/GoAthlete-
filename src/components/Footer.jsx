import React from "react";
import {
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-10 px-6 border-t bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 justify-between">
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-6 rounded-2xl w-full md:w-1/4 text-center flex flex-col items-center justify-between gap-4 shadow-lg">
          <h2 className="text-xl font-bold">🏃‍♂️ GoAthlete</h2>
          <p className="text-sm">
            Built for champions. Whether you're training, coaching, or competing
            — GoAthlete gives you the tools to reach peak performance.
          </p>
          <div className="flex gap-4 text-xl mt-2">
            <Twitter className="hover:text-gray-300 cursor-pointer" />
            <Instagram className="hover:text-gray-300 cursor-pointer" />
            <Linkedin className="hover:text-gray-300 cursor-pointer" />
            <Youtube className="hover:text-gray-300 cursor-pointer" />
          </div>
        </div>
        <div className="w-full md:w-1/4">
          <h3 className="text-lg font-semibold mb-3 text-green-400">
            Contact Us
          </h3>
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="flex items-center gap-2">
              <Mail size={18} /> support@goathlete.com
            </li>
            <li className="flex items-center gap-2">
              <Phone size={18} /> +8801900000000
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={18} /> 24 Fitness Ave, Khulna, Bangladesh
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/4 flex flex-wrap gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-3 text-green-400">
              Explore
            </h3>
            <ul className="space-y-2 text-sm text-gray-300 flex flex-col">
              <NavLink to="/" className="hover:text-green-300">
                Home
              </NavLink>
             
              <NavLink to="/all-events" className="hover:text-green-300">
                Programs
              </NavLink>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3 invisible md:visible">
              &nbsp;
            </h3>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 mt-10">
        © {new Date().getFullYear()} GoAthlete. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
