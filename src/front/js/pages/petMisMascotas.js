import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

export const PetMisMascotas = (props) => {
  const { index } = useParams();
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.addCurrentUserId();
  }, []);
  useEffect(() => {
    if (store.usuarioActual.id) {
      actions.getMascotasByUserId(store.usuarioActual.id);
    }
  }, [store.usuarioActual]);

  //console.log(checkIfOwner(store.usuarioActual.id, Number(id)));
  return (
    <div className="container">
      <div className="card mb-5">
        <img
          src={store.mascotasUsuario[index]?.url_foto}
          className="card-img d-block w-100"
          alt="..."
        />
        <div className="card-body">
          <h1 className="card-title">
            <strong>{store.mascotasUsuario[index]?.nombre}</strong>
          </h1>
          <h3 className="card-text">
            <strong>Raza: </strong>
            {store.mascotasUsuario[index]?.especie}
          </h3>
          <p className="card-text">
            <strong>Edad: </strong>
            {store.mascotasUsuario[index]?.edad}
          </p>
          <p className="card-text">
            <strong>Sexo: </strong>
            {store.mascotasUsuario[index]?.sexo}
          </p>
          <p className="card-text">
            <strong>Tamaño: </strong>
            {store.mascotasUsuario[index]?.tamaño}
          </p>
          <p className="card-text">
            <strong>Nivel de actividad: </strong>
            {store.mascotasUsuario[index]?.nivel_actividad}
          </p>
          <p className="card-text">
            <strong>Otros cuidados: </strong>
            {store.mascotasUsuario[index]?.otros_cuidados}
          </p>
        </div>
      </div>
      <div className="d-grid gap-2 d-md-flex justify-content-md-end">
        <Link to="/">
          <button className="cardButton btn btn-lg btn-danger outline-info">
            Regresar a Home
          </button>
        </Link>

        <Link to={`/`}>
          <button
            className="cardButton btn btn-lg btn-danger outline-info"
            onClick={() => {
              actions.borrarMascota(store.mascotasUsuario[index].id);
            }}
          >
            Borrar
          </button>
        </Link>
        {/* <button
          className="cardButton btn btn-lg btn-danger outline-info"
          onClick={() => {
            console.log(store.mascotasUsuario[index].id);
            actions.borrarMascota(store.mascotasUsuario[index].id);
          }}
        >
          Borrar
        </button> */}
      </div>
    </div>
  );
};
