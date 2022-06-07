import React from "react";
import noEncontrada from "../../img/no-encontrada.png";

export const NoEncontrada = () => {
  return (
    <div className="container d-flex justify-content-center">
      <img src={noEncontrada} style={{ width: "35em", height: "35em" }} />
    </div>
  );
};
