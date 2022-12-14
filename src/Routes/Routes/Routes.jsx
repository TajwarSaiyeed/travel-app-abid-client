import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Booking from "../../pages/Booking/Booking";
import Home from "../../pages/Home/Home";
import Hotel from "../../pages/Hotel/Hotel";
import Login from "../../pages/Login/Login";
import SignUp from "../../pages/SignUp/SignUp";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <SignUp /> },
      {
        path: "/hotel",
        element: <Hotel />,
      },
      {
        path: "/booking",
        element: <Booking />,
      },
    ],
  },
]);
