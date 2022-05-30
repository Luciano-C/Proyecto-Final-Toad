import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { preguntas } from "../constants/preguntasFormulario";
import { campos } from "../constants/camposDatosContacto";
import { InputFormulario } from "../component/inputFormulario";
import { InputDatosContacto } from "../component/inputDatosContacto";
import perroCartel from "../../img/perro-cartel.png";
import { useParams } from "react-router-dom";
import { StrictMode } from "react/cjs/react.production.min";

export const FormularioAdopcion = () => {
  const { store, actions } = useContext(Context);
  const [isDatosContacto, setIsDatoContacto] = useState(false);
  const { idMascota } = useParams();

  // Añade un elemento vacío por pregunta a la lista de respuesta para que no hayan errores con los índices.
  useEffect(() => {
    let respuestasDatosContacto = store.respuestasDatosContacto;
    let respuestasFormulario = store.respuestasFormularioAdopcion;

    campos.forEach((x) => {
      respuestasDatosContacto.push("");
    });

    preguntas.forEach((x) => {
      respuestasFormulario.push("");
    });
    actions.setRespuestasDatosContacto(respuestasDatosContacto);
    actions.setRespuestasFormularioAdopcion(respuestasFormulario);
    // Hace fetch para buscar la id del usuario en base de datos correspondiente al email actual
    actions.addCurrentUserId();
  }, []);

  useEffect(() => {
    if (store.idFormularioActual !== "") {
      actions.crearCandidatoMascotaFormulario(
        store.usuarioActual.id,
        (Number(idMascota) + 1).toString(),
        store.idFormularioActual
      );
    }
  }, [store.idFormularioActual]);

  return (
    <div className="container">
      <div className="d-flex justify-content-between">
        <img className="perroCartel" src={perroCartel} />

        {isDatosContacto ? (
          <ul>
            {campos.map((x, i) => (
              <div key={`d${i}`} className="d-flex preguntasContainer">
                <InputDatosContacto key={`IDC${i}`} campo={x.campo} index={i} />
              </div>
            ))}
          </ul>
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
              console.log(store.respuestasDatosContacto);
              if (store.respuestasDatosContacto.includes("")) {
                alert("Complete todos los campos");
              } else {
                console.log(store.usuarioActual);
                actions.editUserContactData(
                  store.usuarioActual.id,
                  store.respuestasDatosContacto[0],
                  store.respuestasDatosContacto[1],
                  store.respuestasDatosContacto[2],
                  store.respuestasDatosContacto[3]
                );
                setIsDatoContacto(false);
              }
            }}
          >
            Continuar
          </button>
        ) : (
          <button
            className="btn btn-danger"
            onClick={() => {
              console.log(store.respuestasFormularioAdopcion);
              actions.crearFormulario();
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
