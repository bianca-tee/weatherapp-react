import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
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
  );
}
