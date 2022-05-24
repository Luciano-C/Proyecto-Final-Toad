import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import { Card } from "../component/card";

export const Pet = (props) => {
  const { id } = useParams();
  const { store, actions } = useContext(Context);

  return (
    <div className="container">
      <div className="card mb-5">
        <img
          src={store.mascotas[id]?.url_foto}
          className="card-img d-block w-100"
          alt="..."
        />
        <div className="card-body">
          <h1 className="card-title">
            {/*      <strong>{store.mascotas.map((id) => id.nombre)}</strong>
            {store.mascotas.map(function (id) {
              return <li> {id.nombre}</li>;
            })} */}
            <strong>{store.mascotas[id]?.nombre}</strong>
          </h1>
          <h3 className="card-text">
            <strong>Raza: </strong>
            {store.mascotas[id]?.especie}
          </h3>
          <p className="card-text">
            <strong>Edad: </strong>
            {store.mascotas[id]?.edad}
          </p>
          <p className="card-text">
            <strong>Sexo: </strong>
            {store.mascotas[id]?.sexo}
          </p>
          <p className="card-text">
            <strong>Tamaño: </strong>
            {store.mascotas[id]?.tamaño}
          </p>
          <p className="card-text">
            <strong>Nivel de actividad: </strong>
            {store.mascotas[id]?.nivel_actividad}
          </p>
          <p className="card-text">
            <strong>Otros cuidados: </strong>
            {store.mascotas[id]?.otros_cuidados}
          </p>
          <p className="card-text">
            <small className="text-muted">
              Publicado el 18 de Mayo del 2022.
            </small>
          </p>
        </div>
      </div>
      <div className="d-grid gap-2 d-md-flex justify-content-md-end">
        <Link to="/">
          <button className="cardButton btn btn-lg btn-danger outline-info">
            Regresar a Home
          </button>
        </Link>
        <Link to="/">
          <button className="cardButton btn btn-lg btn-danger outline-info">
            Adoptar
          </button>
        </Link>
      </div>
    </div>
  );
};
