import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link, useHistory } from "react-router-dom";
import huella from "../../img/huella.png";
import mascotas from "../../img/mascotas.png";
import candidatos from "../../img/candidatos.png";
import postulaciones from "../../img/postulaciones.png";
import { CrearMascota } from "./crearMascota";
import { VerCandidatos } from "./verCandidatos";
import { VerMisMascotas } from "./verMisMascotas";
import { VerMisPostulaciones } from "./verMisPostulaciones";
import { useAuth0 } from "@auth0/auth0-react";
import iniciaSesion from "../../img/inicia-sesion.png";

export const Perfil = () => {
  const [mode, setMode] = useState(undefined);
  const { store, actions } = useContext(Context);

  const history = useHistory();
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

  const { email, isAuthenticated, isLoading } = useAuth0();

  useEffect(() => {
    actions.addCurrentUserId();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (store.usuarioActual.id) {
    return (
      <div className="container">
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
                      <strong>Nombre: </strong> {store.usuarioActual?.nombre}
                    </p>
                    <p className="card-text">
                      <strong>Apellidos: </strong>
                      {store.usuarioActual?.apellidos}
                    </p>
                    <p className="card-text">
                      <strong>Email: </strong> {store.usuarioActual?.email}
                    </p>
                    <p className="card-text">
                      <strong>Dirección: </strong>
                      {store.usuarioActual?.direccion}
                    </p>
                    <p className="card-text">
                      <strong>Teléfono: </strong>{" "}
                      {store.usuarioActual?.telefono}
                    </p>
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
          </div>
        </div>
      </div>
    );
  }
  if (!isLoading) {
    return (
      <div className="container d-flex justify-content-center">
        <img src={iniciaSesion} style={{ width: "35em", height: "35em" }} />
      </div>
    );
  }
};
