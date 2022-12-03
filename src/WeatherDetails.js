import React from "react";
import "./WeatherDetails.css";

export default function WeatherDetails(props) {
  return (
    <div className="WeatherDetails">
      <ul>
        <li className="text-capitalize">{props.description}</li>
        <li>
          <span>15</span> /<strong> 25</strong>
        </li>
        <li>
          <span>{props.humidity}</span>% humidity
        </li>
        <li>
          <span>{props.wind}</span>m/s wind
        </li>
      </ul>
    </div>
  );
}
