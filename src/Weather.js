import React, { useState } from "react";
import axios from "axios";
import "./Temperature.css";
import "./WeatherDetails.css";
import FormattedDate from "./FormattedDate";
import "./TemperatureImage.css";
import "./City.css";

export default function Weather(props) {
  return (
    <div className="Weather">
      <div className="col-12 city-col">
        <h2 className="city">{props.data.city}</h2>
        <h5 className="date-time">
          <FormattedDate date={props.data.date} />
        </h5>
      </div>
      <div className="row mx-0">
        <div className="col-6">
          <div className="Temperature">
            <h4 className="current-temp">{props.data.temperature}</h4>
            <span className="current-temp-units">°C</span>
          </div>
        </div>
        <div className="col-2">
          <div className="TemperatureImage">
            <img
              src={props.data.iconUrl}
              alt={props.data.description}
              className="main-icon"
            />
          </div>
        </div>
        <div className="col-4">
          <div className="WeatherDetails">
            <ul>
              <li className="text-capitalize">{props.data.description}</li>
              <li>
                <span>15</span> /<strong> 25</strong>
              </li>
              <li>
                <span>{props.data.humidity}</span>% humidity
              </li>
              <li>
                <span>{props.data.wind}</span>m/s wind
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
