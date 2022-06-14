import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const VerCandidatos = () => {
  const { store, actions } = useContext(Context);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    actions.addCurrentUserId();
  }, []);

  useEffect(() => {
    if (store.usuarioActual.id) {
      actions.getCandidatosByUserId(store.usuarioActual.id);
      setIsLoading(false);
    }
  }, [store.usuarioActual]);

  //let arrayToMap = [
  //{ mascota: {}, candidato: {}, id_formulario },
  //{ mascota: {}, candidato: {}, id_formulario },
  //];

  // candidatoMAscotasFormularios: [{ id: 15, id_formulario: 1, id_mascota: 11, id_usuario: 3 }, ...]

  return (
    <div className="container">
      <table className="table text-center">
        <thead>
          <tr>
            <th scope="col">Mascota</th>
            <th scope="col">Candidato</th>
            <th scope="col">Email</th>
            <th scope="col">Teléfono</th>
            <th scope="col">Dirección</th>
            <th scope="col">Formulario</th>
          </tr>
        </thead>
        <tbody>
          {store.candidatosDelUsuario.map((x, i) => (
            <tr key={`tr${i}`}>
              <td key={`n${i}`}>{x.mascota.nombre}</td>
              <td
                key={`c${i}`}
              >{`${x.candidato?.nombre} ${x.candidato?.apellidos}`}</td>
              <td key={`e${i}`}>{x.candidato?.email}</td>
              <td key={`t${i}`}>{x.candidato?.telefono}</td>
              <td key={`dir${i}`}>{x.candidato?.direccion}</td>

              <td key={`l${i}`}>
                <Link to={`/respuestas-candidato/${x.idFormulario}`}>
                  Ver Respuestas
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
