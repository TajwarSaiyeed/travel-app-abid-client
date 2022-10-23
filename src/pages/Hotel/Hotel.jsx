import React from "react";
import Card from "../../components/Card/Card";
import img1 from "../../assets/images/Rectangle1.png";
import img2 from "../../assets/images/Rectangle26.png";
import img3 from "../../assets/images/Rectangle27.png";
import { Marker, Popup } from "react-leaflet";
import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";

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
        <Card src={img1} />
        <Card src={img2} />
        <Card src={img3} />
      </div>
      <div>
        <MapContainer
          center={[51.505, -0.09]}
          zoom={13}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[51.505, -0.09]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default Hotel;
