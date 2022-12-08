import React from "react";
import ReactAnimatedWeather from "react-animated-weather";
import "./TemperatureImage.css";

export default function WeatherIcon(props) {
  return (
    <ReactAnimatedWeather
      icon={CLEAR_DAY}
      color={goldenrod}
      size={512}
      animate={true}
    />
  );
}
