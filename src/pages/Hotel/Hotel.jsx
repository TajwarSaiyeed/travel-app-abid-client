import React from "react";
// import hotelimg from "../../assets/images/Rectangle 1.png";
import Card from "../../components/Card/Card";
const Hotel = () => {
  return (
    <div className="grid lg:grid-cols-2 px-12 ">
      <div className="grid grid-cols-1 gap-3 p-5">
        {/* <div>
          <img src={hotelimg} alt="" />
          <div>
            <h1>Hotel Heading</h1>
            <div>
              <span>4 guests</span>
              <span>2 bedrooms</span>
              <span>2 beds</span>
              <span>2 baths</span>
            </div>
            <p>wifi air condition kitch</p>
            <p>wifi air condition kitch</p>
            <div>
              <span>4.9(20)</span>
              <span>$34/night</span>
              <span>$167 total</span>
            </div>
          </div>
        </div> */}
        <Card />
        <Card />
        <Card />
      </div>
      <div>Right</div>
    </div>
  );
};

export default Hotel;
