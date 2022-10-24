import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import Navbar from "../pages/Shared/Navbar/Navbar";
import "./Main.css";
const Main = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div
      className={
        location.pathname === "/" || location.pathname === "/booking"
          ? `backgroundFull`
          : ""
      }
    >
      <Navbar />
      <div className="min-h-screen">
        <Outlet></Outlet>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
