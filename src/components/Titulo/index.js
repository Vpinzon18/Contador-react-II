import React from "react";
import logosena from "./assets/logosena.png";
import "./Titulo.css";

export const Titulo = () => {
  return (
    <div>
      <div class="p">
        <h1> Contador JS</h1>
      </div>

      <div class="logo">
        <img src={logosena}></img>
      </div>
    </div>
  );
};
