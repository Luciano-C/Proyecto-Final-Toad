import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

export const VerCandidatos = () => {
  const { store, actions } = useContext(Context);

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

  let candidatosMascotasFormularios = [];
  store.idMascotasDelUsuario.forEach((x) => {
    candidatosMascotasFormularios.push(
      ...actions.filtrarUsuarioMacotaFormularioPorIdMascota(x)
    );
  });
  console.log(candidatosMascotasFormularios);
  // candidatoMAscotasFormularios: [{ id: 15, id_formulario: 1, id_mascota: 11, id_usuario: 3 }, ...]
  // Mapear esta array buscando los nombres de mascota y candidato en store.mascotas y store.usuarios (filtros)
  let myArray = [
    { nombre: "Doggo", candidato: "Juanito Lopez", link: "Link1" },
    { nombre: "Chocolate", candidato: "Pepito Perez", link: "Link2" },
  ];

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
          {myArray.map((x, i) => (
            <tr key={`tr${i}`}>
              <td key={`n${i}`}>{x.nombre}</td>
              <td key={`c${i}`}>{x.candidato}</td>
              <td key={`l${i}`}>{x.link}</td>
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
