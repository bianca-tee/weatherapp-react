import React from "react";
import "./TemperatureImage.css";
import Sun from "./img/Sun.png";

export default function TemperatureImage() {
  return (
    <div className="TemperatureImage">
      <img src={Sun} alt="" className="main-icon" />
    </div>
  );
}
