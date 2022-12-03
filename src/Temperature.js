import React from "react";
import "./Temperature.css";

export default function Temperature() {
  let weatherData = {
    city: "Sydney",
    temperature: 23,
    date: "Thursday, at 10:13",
    description: "Cloudy",
    humidity: 30,
    wind: 5,
  };
  return (
    <div className="Temperature">
      <h4 className="current-temp">{weatherData.temperature}</h4>
      <span className="current-temp-units">°C</span>
    </div>
  );
}
