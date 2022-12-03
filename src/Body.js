import React, { useState } from "react";
import axios from "axios";
import Weather from "./Weather";
import "./Search.css";

export default function Body(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.city,
      temperature: Math.round(response.data.temperature.current),
      date: new Date(response.data.time * 1000),
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: Math.round(response.data.wind.speed),
      iconUrl: response.data.condition.icon_url,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    let apiKey = `36dt489d904a0bbfada4633o3f37abdb`;
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="row Body">
        <div className="col-12 Search">
          <form action="" className="search-form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter your city"
              className="city-box"
              autoFocus="on"
              onChange={handleCityChange}
            />
            <button type="submit" className="search-button">
              Search
            </button>
          </form>
          <button className="location-pin">
            <i className="fa-solid fa-map-pin pin"></i>
          </button>
        </div>
        <Weather data={weatherData} />
      </div>
    );
  } else {
    search();
    return <p>Loading...</p>;
  }
}
