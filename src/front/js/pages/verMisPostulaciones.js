import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const VerMisPostulaciones = () => {
  /* ALGORITMO:
  - Añadir id a current user
  - Se consigue por fetch usuarioMascotaFormulario (candidato, mascota, formulario), todos los usuarios y todos los usuariosMascotas (dueños mascotas)
  - arrayToMap tiene la siguiente estructura [{mascota: {}, candidato: {}, idFormulario: #},...]
  - Se filtra usuarioMascotaFormulario para obtener una lista de los de usuarioActual.
  - En la función arrayToMap se generan listas de idMascota, idDueños, idFormulario en base a usuarioMascotaFormulario filtrado.
  - Con los id de mascota se buscan los id de sus dueños en usuarioMascota para generar lista de idDueños.
  - Con id de mascota se buscan los objetos mascotas (store.mascotas). Con id de dueños se buscan los objetos usuarios (store.usuarios).
  - Además se genera una lista con id de formularios.
  - Para cada elemento de la lista de objetos mascotas se crea un objeto temporal con el formato {mascota: {}, dueño: {}, idFormulario: #} y se hace un push a una lista vacía.
  - Al completar la iteración se fija la variable de estado arrayToMap y se mapea en jsx.

  NOTA: Se añadió renderizado condicional y variable isLoading porque la línea "let idDueño = store.usuariosMascotas.filter((y) => y.id_mascota === x)[0].id_usuario;"
  Estaba causando problemas cuando se demoraba en cargar el fetch.
  */

  const { store, actions } = useContext(Context);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    actions.addCurrentUserId();
  }, []);
  useEffect(() => {
    if (store.usuarioActual.id) {
      actions.getPostulacionesByUserId(store.usuarioActual.id);
      setIsLoading(false);
    }
  }, [store.usuarioActual]);

  /*   let arrayToMap = [
    {
      mascota: { nombre: "Chocolate" },
      candidato: { nombre: "Candidato1" },
      idFormulario: 1,
    },
    {
      mascota: { nombre: "Orejas" },
      candidato: { nombre: "Candidato2" },
      idFormulario: 1,
    },
  ]; */

  // candidatoMAscotasFormularios: [{ id: 15, id_formulario: 1, id_mascota: 11, id_usuario: 3 }, ...]

  if (!isLoading) {
    return (
      <div className="container">
        <table className="table text-center">
          <thead>
            <tr>
              <th scope="col">Mascota</th>
              <th scope="col">Dueño</th>
              <th scope="col">Formulario</th>
            </tr>
          </thead>
          <tbody>
            {store.misPostulaciones.map((x, i) => (
              <tr key={`tr${i}`}>
                <td key={`n${i}`}>{x.mascota.nombre}</td>
                <td
                  key={`c${i}`}
                >{`${x.dueño.nombre} ${x.dueño.apellidos}`}</td>

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
  } else {
    return (
      <div className="spinner-grow text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }
};
