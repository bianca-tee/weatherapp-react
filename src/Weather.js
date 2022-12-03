import React from "react";
import Temperature from "./Temperature";
import TemperatureImage from "./TemperatureImage";
import WeatherDetails from "./WeatherDetails";
import "./City.css";

export default function Weather() {
  let weatherData = {
    city: "Sydney",
    temperature: 23,
    date: "Thursday, at 10:13",
    description: "Cloudy",
    humidity: 30,
    wind: 5,
  };
  return (
    <div>
      <div className="col-12 city-col">
        <h2 className="city" id="current-city">
          {weatherData.city}
        </h2>
        <h5 className="date-time" id="current-date-time">
          Last updated on {weatherData.date}
        </h5>
      </div>
      <div className="Weather row mx-0">
        <div className="col-6">
          <Temperature />
        </div>
        <div className="col-2">
          <TemperatureImage />
        </div>
        <div className="col-4">
          <WeatherDetails />
        </div>
      </div>
    </div>
  );
}
