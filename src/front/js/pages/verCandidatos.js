import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const VerCandidatos = () => {
  const { store, actions } = useContext(Context);
  const [candidatosMascotasFormularios, setCandidatosMascotasFormularios] =
    useState([]);

  useEffect(() => {
    actions.addCurrentUserId();
    actions.getUsuarioMascotaFormulario();
    actions.getUsers();
  }, []);

  useEffect(() => {
    if (store.usuarioActual.id) {
      actions.getUserPetsId(store.usuarioActual.id);
    }
  }, [store.usuarioActual.id]);

  useEffect(() => {
    let infoToPush = [];
    if (store.idMascotasDelUsuario) {
      store.idMascotasDelUsuario.forEach((x) => {
        infoToPush.push(
          ...actions.filtrarUsuarioMacotaFormularioPorIdMascota(x)
        );
      });
      setCandidatosMascotasFormularios(infoToPush);
    }
  }, [store.idMascotasDelUsuario]);

  const generateArrayToMap = () => {
    let arrayToMap = [];

    candidatosMascotasFormularios.forEach((x) => {
      let objetosUsuario = store.usuarios.filter(
        (usuario) => usuario.id === x.id_usuario
      );
      let objetosMascota = store.mascotas.filter(
        (mascota) => mascota.id === x.id_mascota
      );

      let idFormulario = x.id_formulario;

      arrayToMap.push({
        mascota: objetosMascota[0],
        candidato: objetosUsuario[0],
        idFormulario: idFormulario,
      });
    });
    return arrayToMap;
  };

  //let arrayToMap = [
  //{ mascota: {}, candidato: {}, id_formulario },
  //{ mascota: {}, candidato: {}, id_formulario },
  //];
  let arrayToMap = generateArrayToMap();

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
          {arrayToMap.map((x, i) => (
            <tr key={`tr${i}`}>
              <td key={`n${i}`}>{x.mascota.nombre}</td>
              <td
                key={`c${i}`}
              >{`${x.candidato.nombre} ${x.candidato.apellidos}`}</td>
              <td key={`e${i}`}>{x.candidato.email}</td>
              <td key={`t${i}`}>{x.candidato.telefono}</td>
              <td key={`dir${i}`}>{x.candidato.direccion}</td>

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
