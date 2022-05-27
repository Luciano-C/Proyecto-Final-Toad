import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/inputFormulario.css";

export const InputDatosContacto = (props) => {
  const [respuesta, setRespuesta] = useState("");

  const { store, actions } = useContext(Context);

  let arrayRespuestas = store.respuestasDatosContacto;

  const modificarRespuesta = (index, nuevaRespuesta) => {
    arrayRespuestas[index] = nuevaRespuesta;
  };

  return (
    <div className="inputCampo">
      <label className="form-label textoPregunta">{`${props.campo}`}</label>
      <input
        className="form-control respuestaFormulario"
        onChange={(e) => {
          setRespuesta(e.target.value);
          modificarRespuesta(props.index, e.target.value);
          actions.setRespuestasDatosContacto(arrayRespuestas);
        }}
        value={respuesta}
        maxLength={500}
      ></input>
    </div>
  );
};
