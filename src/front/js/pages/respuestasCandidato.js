import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { preguntas } from "../constants/preguntasFormulario";
import { useParams } from "react-router-dom";

export const RespuestasCandidato = () => {
  const { store, actions } = useContext(Context);
  const { idFormulario } = useParams();
  const [respuestas, setRespuestas] = useState([]);

  useEffect(() => {
    //actions.addCurrentUserId();
    //actions.getUsuarioMascotaFormulario();
    actions.getFormularioById(idFormulario);
    console.log(store);

    //setRespuestasFormulario(store.formularioActual);
  }, []);
  useEffect(() => {
    const { id, ...exceptId } = store.formularioActual;
    const objRespuestas = exceptId;
    setRespuestas(Object.values(objRespuestas));
  }, [store.formularioActual]);

  // Obtiene las id de las mascotas del usuario actual
  /*   useEffect(() => {
    console.log(store, "oñe");
    
  }, [store.usuarioActual]); */

  //respuestas = Object.values(respuestas);

  const combinarPreguntasRespuestas = (preguntas, respuestas) => {
    let preguntas_respuestas = [];
    preguntas.forEach((x, i) => {
      preguntas_respuestas.push({
        pregunta: x.pregunta,
        respuesta: respuestas[i],
      });
    });
    return preguntas_respuestas;
  };
  return (
    <ul>
      {combinarPreguntasRespuestas(preguntas, respuestas).map((x, i) => (
        <div key={`d${i}`}>
          <p key={`p${i}`} className="fw-bold">{`${i + 1}.-${x.pregunta}`}</p>
          <p key={`r${i}`}>{x.respuesta}</p>
        </div>
      ))}
    </ul>
  );
};
{
  /* <div className="d-flex flex-column">
      <ul>
        {preguntas.map((x, i) => (
          <div key={`d${i}`} className="d-flex">
            <p key={`IF${i}`}>
              {`${x.numero}.-
          ${x.pregunta}`}
            </p>
          </div>
        ))}
      </ul>

      <ul>
        {respuestas.map((x, i) => (
          <p key={`p${i}`}>{x}</p>
        ))}
      </ul>
    </div> */
}
