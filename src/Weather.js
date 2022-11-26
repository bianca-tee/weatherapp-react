import React from "react";
import Temperature from "./Temperature";
import TemperatureImage from "./TemperatureImage";
import WeatherDetails from "./WeatherDetails";

export default function Weather() {
  return (
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
  );
}
