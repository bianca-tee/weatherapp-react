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
        <li id="weather-overall">{weatherData.description}</li>
        <li>
          <span id="min-temp">15</span> /<strong id="max-temp"> 25</strong>
        </li>
        <li>
          <span id="humidity">{weatherData.humidity}</span>% humidity
        </li>
        <li>
          <span id="wind">{weatherData.wind}</span>m/s wind
        </li>
      </ul>
    </div>
  );
}
