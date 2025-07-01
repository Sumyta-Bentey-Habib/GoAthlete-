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
import logo from "../assets/logo/bow-arrow.png";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-10 px-6 border-t bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 justify-between">
        {/* Brand / Intro */}
        <div className="flex-1 md:max-w-xs">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-white rounded-full p-2 shadow-md">
              <img
                src={logo}
                alt="GoAthlete"
                className="w-10 h-10 object-contain"
              />
            </div>
            <h2 className="text-2xl font-bold text-white">GoAthlete</h2>
          </div>
          <p className="text-sm leading-relaxed">
            Built for champions. Whether you’re training, coaching, or competing
            — GoAthlete gives you the tools to reach peak performance.
          </p>
          <div className="flex gap-4 text-white mt-4">
            <Twitter className="hover:text-violet-400 cursor-pointer" />
            <Instagram className="hover:text-violet-400 cursor-pointer" />
            <Linkedin className="hover:text-violet-400 cursor-pointer" />
            <Youtube className="hover:text-violet-400 cursor-pointer" />
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex-1 md:max-w-xs">
          <h3 className="text-lg font-semibold mb-3 text-violet-400">
            Contact Us
          </h3>
          <ul className="space-y-3 text-sm">
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

        {/* Explore Links */}
        <div className="flex-1 md:max-w-xs">
          <h3 className="text-lg font-semibold mb-3 text-violet-400">Explore</h3>
          <ul className="space-y-2 text-sm flex flex-col">
            <NavLink to="/" className="hover:text-violet-400">
              Home
            </NavLink>
            <NavLink to="/all-events" className="hover:text-violet-400">
              Programs
            </NavLink>
            <NavLink to="/about-us" className="hover:text-violet-400">
              About Us
            </NavLink>
          </ul>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 mt-10">
        © {new Date().getFullYear()} GoAthlete. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
