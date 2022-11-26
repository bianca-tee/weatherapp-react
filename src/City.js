import React from "react";
import "./City.css";

export default function City() {
  let weatherData = {
    city: "Sydney",
    temperature: 23,
    date: "Thursday, at 10:13",
    description: "Cloudy",
    humidity: 30,
    wind: 5,
  };
  return (
    <div className="col-12 city-col">
      <h2 className="city" id="current-city">
        {weatherData.city}
      </h2>
      <h5 className="date-time" id="current-date-time">
        Last updated on {weatherData.date}
      </h5>
    </div>
  );
}
