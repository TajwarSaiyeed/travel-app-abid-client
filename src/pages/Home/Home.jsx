import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "./Home.css";

// import required modules
import { EffectCards } from "swiper";
const Home = () => {
  return (
    <div className="flex justify-between items-center w-full h-screen absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4">
      <div className=" px-20 py-2 flex flex-col justify-start items-start">
        <h1 className="text-7xl font-bold text-white  uppercase">
          Cox's Bazar
        </h1>
        <p className="text-white text-justify my-5">
          Cox's Bazar is a city, fishing port, tourism centre, and district
          headquarters in south eastern near Chattogram Bangladesh. It is
          located 150 km south of the city of Chittagong.
        </p>
        <button
          type="button"
          className="text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800"
        >
          Booking
          <svg
            aria-hidden="true"
            className="ml-2 -mr-1 w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
      <div className="w-full h-96">
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
        >
          <SwiperSlide></SwiperSlide>
          <SwiperSlide></SwiperSlide>
          <SwiperSlide></SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Home;
