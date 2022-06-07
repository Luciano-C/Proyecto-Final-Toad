import React from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const CardMisMascotas = (props) => {
  return (
    <div className="col">
      <div className="card" style={{ width: "18rem" }}>
        <img src={props.objeto.url_foto} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.objeto.nombre}</h5>
          <p className="card-text">Edad: {props.objeto.edad} años.</p>
          <p className="card-text">Especie: {props.objeto.especie}.</p>
          <p className="card-text">Sexo: {props.objeto.sexo}.</p>
          <Link to={"/pet-mis-mascotas" + "/" + props.index}>
            <button className="cardButton btn btn-lg btn-danger outline-info">
              Leer más
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
