import React from "react";
import "./TemperatureImage.css";

export default function TemperatureImage(props) {
  console.log(props);
  return (
    <div className="TemperatureImage">
      <img src={props.iconUrl} alt={props.description} className="main-icon" />
    </div>
  );
}
