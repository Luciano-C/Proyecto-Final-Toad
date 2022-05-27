import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { preguntas } from "../contants/preguntasFormulario";
import { InputFormulario } from "../component/inputFormulario";
import { DatosContacto } from "../component/datosContacto";
import perroCartel from "../../img/perro-cartel.png";

export const FormularioAdopcion = () => {
  const { store, actions } = useContext(Context);
  const [isDatosContacto, setIsDatoContacto] = useState(true);

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
      <div className="d-flex justify-content-between">
        <img className="perroCartel" src={perroCartel} />

        {isDatosContacto ? (
          <DatosContacto />
        ) : (
          <ul>
            {preguntas.map((x, i) => (
              <div key={`d${i}`} className="d-flex preguntasContainer">
                <InputFormulario
                  key={`IF${i}`}
                  pregunta={x.pregunta}
                  index={i}
                />
              </div>
            ))}
          </ul>
        )}
      </div>
      <div className="d-flex justify-content-end">
        {isDatosContacto ? (
          <button
            className="btn btn-danger"
            onClick={() => {
              setIsDatoContacto(false);
            }}
          >
            Continuar
          </button>
        ) : (
          <button
            className="btn btn-danger"
            onClick={() => {
              console.log(store.respuestasFormularioAdopcion);
            }}
          >
            Confirmar
          </button>
        )}
      </div>
    </div>
  );

  /*  if (isDatosContacto) {
    return (
      <div className="container">
        <div className="d-flex justify-content-between">
          <img className="perroCartel" src={perroCartel} />
          <DatosContacto />
        </div>
        <div className="d-flex justify-content-end">
          <button
            className="btn btn-danger"
            onClick={() => {
              setIsDatoContacto(false);
            }}
          >
            Continuar
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container">
        <div className="d-flex justify-content-between">
          <img className="perroCartel" src={perroCartel} />
          <ul>
            {preguntas.map((x, i) => (
              <div key={`d${i}`} className="d-flex preguntasContainer">
                <InputFormulario
                  key={`IF${i}`}
                  pregunta={x.pregunta}
                  index={i}
                />
              </div>
            ))}
          </ul>
        </div>
        <div className="d-flex justify-content-end">
          <button
            className="btn btn-danger"
            onClick={() => {
              console.log(store.respuestasFormularioAdopcion);
            }}
          >
            Confirmar
          </button>
        </div>
      </div>
    );
  } */
};
