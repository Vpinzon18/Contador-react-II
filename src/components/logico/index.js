import React from "react";
import { UseContador } from "../Hooks/UseContador";
import { Contador } from "../Contador/index";
import "./logico.css";

export const Logico = () => {
  const { Aumentar, Disminuir, Reset, data } = UseContador();

  return (
    <div>
      <Contador Contador={data} />
      <button onClick={() => Aumentar()}>+</button>
      <button onClick={() => Reset()}>Reset</button>
      <button onClick={() => Disminuir()}>-</button>
    </div>
  );
};


