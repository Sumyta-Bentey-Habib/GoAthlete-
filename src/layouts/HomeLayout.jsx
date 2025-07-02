import React from "react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router";
import Footer from "../components/Footer";

const HomeLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <div className="flex-grow mb-10">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default HomeLayout;
