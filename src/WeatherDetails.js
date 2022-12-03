import React from "react";
import "./WeatherDetails.css";

export default function WeatherDetails() {
  let weatherData = {
    city: "Sydney",
    temperature: 23,
    date: "Thursday, at 10:13",
    description: "Cloudy",
    humidity: 30,
    wind: 5,
  };
  return (
    <div className="WeatherDetails">
      <ul>
        <li>{weatherData.description}</li>
        <li>
          <span>15</span> /<strong> 25</strong>
        </li>
        <li>
          <span>{weatherData.humidity}</span>% humidity
        </li>
        <li>
          <span>{weatherData.wind}</span>m/s wind
        </li>
      </ul>
    </div>
  );
}
