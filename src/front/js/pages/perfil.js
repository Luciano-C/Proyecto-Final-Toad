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

export const Perfil = () => {
  const { store, actions } = useContext(Context);
  const { email, isAuthenticated, isLoading } = useAuth0();

  return (
    <div className="container">
      <div className="ml-auto">
        {!sessionStorage.getItem("Token") ||
        sessionStorage.getItem("Token") == "" ? (
          <div>
            <div
              class="offcanvas offcanvas-top show"
              tabindex="-1"
              id="offcanvas"
              aria-labelledby="offcanvasLabel"
            >
              <div class="offcanvas-header">
                <h2 class="offcanvas-title" id="offcanvasLabel">
                  Lo sentimos...
                  <img
                    src="https://media.gettyimages.com/vectors/emoticon-in-shock-vector-id1382916734?s=2048x2048"
                    className="robot"
                  ></img>
                </h2>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div class="offcanvas-body">
                <p>
                  Para continuar en nuestro sitio web debe iniciar sección, sino
                  posee cuenta puede registrarse{" "}
                  <Link to="/regUsuario">aquí</Link>
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div>
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
                        <strong>Apellidos: </strong>.
                        {store.usuarioActual.apellidos}
                      </p>
                      <p className="card-text">
                        <strong>Email: </strong> {store.usuarioActual.email}
                      </p>
                      <p className="card-text">
                        <strong>Dirección: </strong>.
                        {store.usuarioActual.direccion}
                      </p>
                      <p className="card-text">
                        <strong>Teléfono: </strong>{" "}
                        {store.usuarioActual.telefono}
                      </p>
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
        )}
      </div>
    </div>
  );
};
