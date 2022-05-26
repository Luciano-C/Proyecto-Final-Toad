import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/inputFormulario.css";

export const InputFormulario = (props) => {
  const [respuesta, setRespuesta] = useState("");

  const { store, actions } = useContext(Context);

  let arrayRespuestas = store.respuestasFormularioAdopcion;

  const modificarRespuesta = (index, nuevaRespuesta) => {
    arrayRespuestas[index] = nuevaRespuesta;
  };

  return (
    <div className="inputCampo">
      <label className="form-label textoPregunta">{`${props.index + 1}.- ${
        props.pregunta
      }`}</label>
      <textarea
        className="form-control respuestaFormulario"
        onChange={(e) => {
          setRespuesta(e.target.value);
          modificarRespuesta(props.index, e.target.value);
          actions.setRespuestasFormularioAdopcion(arrayRespuestas);
        }}
        value={respuesta}
        maxLength={500}
      ></textarea>
    </div>
  );
};
