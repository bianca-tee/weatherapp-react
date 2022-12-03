import React, { useState } from "react";
import axios from "axios";
import Temperature from "./Temperature";
import TemperatureImage from "./TemperatureImage";
import WeatherDetails from "./WeatherDetails";
import FormattedDate from "./FormattedDate";
import "./City.css";

export default function Weather(props) {
  let [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response);
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

  if (weatherData.ready) {
    return (
      <div>
        <div className="col-12 city-col">
          <h2 className="city">{weatherData.city}</h2>
          <h5 className="date-time">
            <FormattedDate date={weatherData.date} />
          </h5>
        </div>
        <div className="row mx-0">
          <div className="col-6">
            <Temperature temp={weatherData.temperature} />
          </div>
          <div className="col-2">
            <TemperatureImage
              iconUrl={weatherData.iconUrl}
              description={weatherData.description}
            />
          </div>
          <div className="col-4">
            <WeatherDetails
              description={weatherData.description}
              humidity={weatherData.humidity}
              wind={weatherData.wind}
            />
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = `36dt489d904a0bbfada4633o3f37abdb`;
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return <p>Loading...</p>;
  }
}
