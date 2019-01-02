import React from "react";
import "./Components.css";
import Api from "./Api";

const Card = ({ word, meaning, url }) => {
  return (
    <div className="card">
      <dir className="container">
        <br />
        <h3>{word}</h3>
        <h3 className="meaning">{meaning}</h3>
        <img src={url} alt="" />
      </dir>
    </div>
  );
};

export default Card;
