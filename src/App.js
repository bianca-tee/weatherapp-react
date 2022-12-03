import "./App.css";
import React from "react";
import Header from "./Header";
import Body from "./Body";

export default function App() {
  return (
    <div>
      <div className="container App">
        <Header />
        <Body />
        <footer className="text-center">
          Open-source code by{" "}
          <a
            href="https://github.com/bianca-tee"
            target="_blank"
            rel="noreferrer"
          >
            Bianca Treu
          </a>
        </footer>
      </div>
    </div>
  );
}
