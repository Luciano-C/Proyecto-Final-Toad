import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { preguntas } from "../constants/preguntasFormulario";
import { campos } from "../constants/camposDatosContacto";
import { InputFormulario } from "../component/inputFormulario";
import { InputDatosContacto } from "../component/inputDatosContacto";
import perroCartel from "../../img/perro-cartel.png";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export const FormularioAdopcion = () => {
  const { store, actions } = useContext(Context);
  const [isDatosContacto, setIsDatoContacto] = useState(true);
  const { idMascota } = useParams();

  // Añade un elemento vacío por pregunta a la lista de respuesta para que no hayan errores con los índices.
  useEffect(() => {
    let respuestasDatosContacto = store.respuestasDatosContacto;
    let respuestasFormulario = store.respuestasFormularioAdopcion;

    campos.forEach((x) => {
      if (!respuestasDatosContacto) {
        respuestasDatosContacto.push("");
      }
    });

    preguntas.forEach((x) => {
      if (!respuestasFormulario) {
        respuestasFormulario.push("");
      }
    });
    actions.setRespuestasDatosContacto(respuestasDatosContacto);
    actions.setRespuestasFormularioAdopcion(respuestasFormulario);
    // Hace fetch para buscar la id del usuario en base de datos correspondiente al email actual
    actions.addCurrentUserId();
  }, []);

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
            className="btn btn-danger btn-lg outline-info"
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
          <Link to="/">
            <button
              className="btn btn-danger btn-lg outline-info"
              onClick={() => {
                console.log(store.respuestasFormularioAdopcion);
                actions.crearFormulario(
                  store.usuarioActual.id,
                  store.mascotas[Number(idMascota)].id
                );
                alert("Formulario de adopción enviado al dueño.");
              }}
            >
              Confirmar
            </button>
          </Link>
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
