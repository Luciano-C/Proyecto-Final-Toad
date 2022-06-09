import React, { Component, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import huella from "../../img/huella.png";
import mascotas from "../../img/mascotas.png";
import candidatos from "../../img/candidatos.png";
import postulaciones from "../../img/postulaciones.png";
import { CrearMascota } from "./crearMascota";
import { VerCandidatos } from "./verCandidatos";
import { VerMisMascotas } from "./verMisMascotas";
import { VerMisPostulaciones } from "./verMisPostulaciones";
import { useAuth0 } from "@auth0/auth0-react";
import { LogoutButton } from "../component/logoutButton";

export const Perfil = () => {
  const { store, actions } = useContext(Context);
  const { email, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="container">
      <div className="logoutButton">
        <LogoutButton />
      </div>
      <div className="row">
        <div className="col">
          <div className="card mb-3" style={{}}>
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h1 className="card-title"> Mis Datos</h1>
                  <p className="card-text">
                    <strong>Nombre: </strong> {store.usuarioActual.nombre}
                  </p>
                  <p className="card-text">
                    <strong>Apellidos: </strong>.{store.usuarioActual.apellidos}
                  </p>
                  <p className="card-text">
                    <strong>Email: </strong> {store.usuarioActual.email}
                  </p>
                  <p className="card-text">
                    <strong>Dirección: </strong>.{store.usuarioActual.direccion}
                  </p>
                  <p className="card-text">
                    <strong>Teléfono: </strong> {store.usuarioActual.telefono}
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
          <div className="collapse" id="huella">
            <div className="card card-body">
              <CrearMascota />
            </div>
          </div>
          <div className="collapse" id="mascota">
            <div className="card card-body">
              <VerMisMascotas />
            </div>
          </div>

          <div className="collapse" id="candidatos">
            <div className="card card-body">
              <VerCandidatos />
            </div>
          </div>

          <div className="collapse" id="postulaciones">
            <div className="card card-body">
              <VerMisPostulaciones />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
