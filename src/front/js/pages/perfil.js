import React, { useState, useEffect, useContext } from "react";
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
<<<<<<< HEAD
  const [mode, setMode] = useState(undefined);
  /* Modos
- crearMascota
- mascotas
- candidatos
- postulaciones
*/

  const clickHandler = (nuevoModo) => {
    if (mode !== nuevoModo) {
      setMode(nuevoModo);
    } else {
      setMode(undefined);
    }
  };

=======
  const { store, actions } = useContext(Context);
  const { email, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }
>>>>>>> 60a21f7faef2297d50c23d82ceaa593e92b124a5
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
          <div className="col-3 d-flex flex-column align-items-center">
            <img
              src={huella}
              className="imagen"
              data-bs-toggle="collapse"
              href="#huella"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
              onClick={() => clickHandler("crearMascota")}
            ></img>

            <h5 className="text-center">Añadir Mascotas</h5>
          </div>
          <div className="col-3 d-flex flex-column align-items-center">
            <img
              src={mascotas}
              className="imagen"
              data-bs-toggle="collapse"
              href="#mascota"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
              onClick={() => clickHandler("mascotas")}
            ></img>

            <h5 className="text-center">Mis Mascotas</h5>
          </div>
          <div className="col-3 d-flex flex-column align-items-center">
            <img
              src={candidatos}
              className="imagen"
              data-bs-toggle="collapse"
              data-bs-target="#candidatos"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
              onClick={() => clickHandler("candidatos")}
            ></img>

            <h5 className="text-center">Ver Candidatos</h5>
          </div>
          <div className="col-3 d-flex flex-column align-items-center">
            <img
              src={postulaciones}
              className="imagen"
              data-bs-toggle="collapse"
              data-bs-target="#postulaciones"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
              onClick={() => clickHandler("postulaciones")}
            ></img>

            <h5 className="text-center">Mis Postulaciones</h5>
          </div>
          <div>
            <div className="card card-body">
              {mode === "crearMascota" ? (
                <CrearMascota />
              ) : mode === "mascotas" ? (
                <VerMisMascotas />
              ) : mode === "candidatos" ? (
                <VerCandidatos />
              ) : mode === "postulaciones" ? (
                <VerMisPostulaciones />
              ) : (
                <></>
              )}
            </div>
          </div>
          {/* <div className="collapse" id="mascota">
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
          </div> */}
        </div>
      </div>
    </div>
  );
};
