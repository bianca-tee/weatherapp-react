import React from "react";
import Search from "./Search";
import City from "./City";
import Weather from "./Weather";

export default function Body() {
  return (
    <div className="row Body">
      <div className="col-12 Search">
        <Search />
        <Weather defaultCity="Sydney" />
      </div>
    </div>
  );
}
