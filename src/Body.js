import React from "react";
import Search from "./Search";
import City from "./City";
import Weather from "./Weather";
import "./Search.css";

export default function Body() {
  return (
    <div className="row Body">
      <div className="col-12 Search">
        <form action="" className="search-form">
          <input
            type="text"
            placeholder="Enter your city"
            className="city-box"
            autoFocus="on"
          />
          <button type="submit" className="search-button">
            Search
          </button>
        </form>
        <button className="location-pin">
          <i className="fa-solid fa-map-pin pin"></i>
        </button>
      </div>
      <Weather defaultCity="Sydney" />
    </div>
  );
}
