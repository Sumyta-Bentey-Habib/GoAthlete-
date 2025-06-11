import React from "react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router";
import Footer from "../components/Footer";
const HomeLayout = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div className=" className='min-h-[calc(100vh-100.08px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default HomeLayout;

