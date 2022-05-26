import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { preguntas } from "../contants/preguntasFormulario";
import { InputFormulario } from "../component/inputFormulario";
import perroCartel from "../../img/perro-cartel.png";

export const FormularioAdopcion = () => {
  const { store, actions } = useContext(Context);

  // Añade un elemento vacío por pregunta a la lista de respuesta para que no hayan errores con los índices.
  useEffect(() => {
    let respuestas = store.respuestasFormularioAdopcion;
    preguntas.forEach((x) => {
      respuestas.push("");
    });
    actions.setRespuestasFormularioAdopcion(respuestas);
    console.log(store.respuestasFormularioAdopcion);
  }, []);

  return (
    <div className="container">
      <div className="d-flex justify-content-around">
        <img className="perroCartel" src={perroCartel} />
        <ul>
          {preguntas.map((x, i) => (
            <div key={`d${i}`} className="d-flex preguntasContainer">
              <InputFormulario key={`IF${i}`} pregunta={x.pregunta} index={i} />
            </div>
          ))}
        </ul>
      </div>
      <button
        onClick={() => {
          console.log(store.respuestasFormularioAdopcion);
        }}
      >
        hola
      </button>
    </div>
  );
};
