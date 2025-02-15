"use client";
import { Demo } from "./page";


import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";

const App = () => {
  const [movie, setMovie] = useState("atack on titan");
  let name = "the best movie in 2024";
  const handchange = () => {
    name = "MOVIE AND ANIMATION"
  }
  return;
  <div className="App">
    <h2>{name}</h2>
    <div>
        <button onClick={ handchange}>click me</button>
    </div>
  </div>;
};
export default App;
