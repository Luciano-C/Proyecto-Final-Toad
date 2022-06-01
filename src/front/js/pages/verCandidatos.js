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
    console.log(store);
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

  console.log(candidatosMascotasFormularios, "hola");

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
      console.log(store.mascotas);
    });
    return arrayToMap;
  };

  //let arrayToMap = [
  //{ mascota: {}, candidato: {usuario}, id_formulario },
  //{ mascota: {}, candidato: {usuario}, id_formulario },
  //];
  let arrayToMap = generateArrayToMap();

  // candidatoMAscotasFormularios: [{ id: 15, id_formulario: 1, id_mascota: 11, id_usuario: 3 }, ...]

  return (
    <div className="container">
      <table className="table text-center">
        <thead>
          <tr>
            <th scope="col">Mascota</th>
            <th scope="col">Candidato </th>
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
              <Link to={`/respuestas-candidato/${x.idFormulario}`}>
                <td key={`l${i}`}>Ver Respuestas</td>
              </Link>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
{
  /* <div className="container" style={{ border: "solid 1px black" }}>
      <div className="row" style={{ border: "solid 1px black" }}>
        <div className="col-4 text-center">
          <span>Nombre Mascota</span>
        </div>
        <div className="col-4 text-center">
          <span>Nombre Candidato</span>
        </div>
        <div className="col-4 text-center">
          <span>Formulario Adopción</span>
        </div>
      </div>
      <div className="row">
        <div className="col-4 text-center">
          <span>Doggo</span>
        </div>
        <div className="col-4 text-center">
          <span>Juanito Perez</span>
        </div>
        <div className="col-4 text-center">
          <span>Link formulario</span>
        </div>
      </div>
      <div className="row">
        <ul>
          {myArray.map((x) => (
            <div className="d-flex" style={{ border: "solid 1px black" }}>
              <div className="col-4 text-center">
                <span>{x.nombre}</span>
              </div>
              <div className="col-4 text-center">
                <span>{x.candidato}</span>
              </div>
              <div className="col-4 text-center">
                <span>{x.link}</span>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </div> */
}
