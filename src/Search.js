import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      <form action="" className="search-form" id="search-form">
        <input
          type="text"
          placeholder="Enter your city"
          className="city-box"
          id="city-input"
          autoFocus="on"
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <button className="location-pin" id="location-pin">
        <i className="fa-solid fa-map-pin pin"></i>
      </button>
    </div>
  );
}
