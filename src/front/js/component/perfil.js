import React, { Component, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import huella from "../../img/huella.png";
import mascotas from "../../img/mascotas.png";
import candidatos from "../../img/candidatos.png";
import postulaciones from "../../img/postulaciones.png";
import { CrearMascota } from "./../pages/crearMascota";

export const Perfil = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div class="card mb-3" style={{}}>
            <div class="row g-0">
              <div class="col-md-4">
                <img
                  src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                  class="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h1 className="card-title"> Mis Datos</h1>
                  <p className="card-text">
                    <strong>Nombre:</strong> Pepito
                  </p>
                  <p className="card-text">
                    <strong>Apellidos:</strong> Pepito
                  </p>
                  <p className="card-text">
                    <strong>Email:</strong> Pepito
                  </p>
                  <p className="card-text">
                    <strong>Dirección:</strong> Pepito
                  </p>
                  <p className="card-text">
                    <strong>Email:</strong> Pepito
                  </p>
                  <a
                    href="https://api.whatsapp.com/send?phone=+56950705762&text=Hola,%20muchas%20gracias%20por%20contactarme.%20Si%20est%C3%A1%20interesado%20en%20la%20mascota%20en%20adopci%C3%B3n%20me%20pondr%C3%A9%20en%20contacto%20en%20caso%20de%20ser%20aprobado%20o%20rechazar.%20"
                    className=" btn btn-success fab fa-whatsapp"
                  >
                    <span> Ir a whatsapp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <a>
              <img
                src={huella}
                className="imagen"
                data-bs-toggle="collapse"
                href="#huella"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
              ></img>
            </a>
            <h5> Añadir Mascotas</h5>
          </div>
          <div className="col-3">
            <a>
              <img
                src={mascotas}
                className="imagen"
                data-bs-toggle="collapse"
                href="#mascota"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
              ></img>
            </a>
            <h5> Mis mascotas</h5>
          </div>
          <div className="col-3">
            <a>
              <img
                src={candidatos}
                className="imagen"
                data-bs-toggle="collapse"
                data-bs-target="#candidatos"
                aria-expanded="false"
                aria-controls="collapseExample"
              ></img>
            </a>
            <h5> Candidatos</h5>
          </div>
          <div className="col-3">
            <a>
              <img
                src={postulaciones}
                className="imagen"
                data-bs-toggle="collapse"
                data-bs-target="#postulaciones"
                aria-expanded="false"
                aria-controls="collapseExample"
              ></img>
            </a>

            <h5>Postulaciones</h5>
          </div>
          <div class="collapse" id="huella">
            <div class="card card-body">
              <CrearMascota />
            </div>
          </div>
          <div class="mascota" id="mascota">
            <div class="card card-body">MASCOTAS</div>
          </div>

          <div class="collapse" id="candidatos">
            <div class="card card-body">CANDIDATOS</div>
          </div>

          <div class="collapse" id="postulaciones">
            <div class="card card-body">POSTULACIONES</div>
          </div>
        </div>
      </div>
    </div>
  );
};
