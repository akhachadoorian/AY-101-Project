import React from "react";
import ReactDOM from "react-dom";
import { planetComponents } from "./homepageInfo.js";

const pComponents = planetComponents.map((p, index) => (
    <div className="glass-box" key={index}>
      <i className="fa-solid fa-wind"></i>
      <h4>{p.title}</h4>
      {p.paragraph && <p>{p.paragraph}</p>}
      <p><strong>Relative Abundance by mass: </strong>{p.relativeAbundance}</p>
    </div>
  ));


  ReactDOM.render(
    <div>{pComponents}</div>,
    document.getElementById("planet-comp")
  );