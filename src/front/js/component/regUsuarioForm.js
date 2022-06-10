import React, { Component, useContext, useState } from "react";

import { Context } from "../store/appContext";

export const RegUsuarioForm = () => {
  const { store, actions } = useContext(Context);
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [direccion, setDireccion] = useState("");
  const [comuna, setComuna] = useState("");
  const [region, setRegion] = useState("");

  const validaEnvio = (e) => {
    e.preventDefault();

    console.log("Registro enviado");
  };

  return (
    <div class="row align-items-start">
      <div class="col-10">
        <form class="row g-3">
          <div class="col-md-6">
            <label for="inputEmail4" class="form-label">
              Nombre
            </label>
            <input
              type="text"
              class="form-control"
              placeholder="Last name"
              aria-label="Last name"
            />
          </div>
          <div class="col-md-6">
            <label for="inputEmail4" class="form-label">
              Apellido
            </label>
            <input
              type="text"
              class="form-control"
              placeholder="Last name"
              aria-label="Last name"
            />
          </div>
          <div class="col-md-6">
            <label for="inputEmail4" class="form-label">
              Email
            </label>
            <input
              type="email"
              class="form-control"
              placeholder="name@example.com"
              onChange={(e) => setEmail(e.target.value)}
              name="user_email"
              id="inputEmail4"
            />
          </div>
          <div class="col-md-6">
            <label for="inputEmail4" class="form-label">
              Confirmar email
            </label>
            <input
              type="email"
              class="form-control"
              placeholder="name@example.com"
              onChange={(e) => setEmail(e.target.value)}
              name="user_email"
              id="inputEmail4"
            />
          </div>
          <div class="col-md-6">
            <label for="inputPassword4" class="form-label">
              Contraseña
            </label>
            <input type="password" class="form-control" id="inputPassword4" />
          </div>
          <div class="col-md-6">
            <label for="inputPassword4" class="form-label">
              Confirmar contraseña
            </label>
            <input type="password" class="form-control" id="inputPassword4" />
          </div>
          <div class="col-12">
            <label for="inputAddress" class="form-label">
              Dirección
            </label>
            <input
              type="text"
              class="form-control"
              id="inputAddress"
              placeholder="1234 Main St"
            />
          </div>
          <div class="col-md-6">
            <label for="inputState" class="form-label">
              Región
            </label>
            <select id="inputState" class="form-select">
              <option selected>Selecione...</option>
              <option>Región Metropolitana</option>
              <option>Arica</option>
              <option>Antofagasta</option>
              <option>Tarapacá</option>
              <option>Atacama y Coquimbo</option>
              <option>Aconcagua y Valparaíso</option>
              <option>O'Higgins y Colchagua</option>
              <option>Curicó, Talca, Maule y Linares</option>
              <option>Ñuble, Concepción, Arauco, Biobío y Malleco</option>
              <option>Valdivia y Osorno</option>
              <option>Llanquihue, Chiloé y Aysén</option>
              <option>Magallanes</option>
            </select>
          </div>
          <div class="col-md-6">
            <label for="inputCity" class="form-label">
              Comuna
            </label>
            <input type="text" class="form-control" id="inputCity" />
          </div>
          <div class="col-12" style={{ marginTop: "4rem" }}>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="gridCheck" />
              <label class="form-check-label" for="gridCheck">
                Check me out
              </label>
            </div>
          </div>
          <div className="row">
            <div className="col-auto" style={{ marginTop: "5rem" }}>
              <button
                type="submit"
                className="btn btn-primary mb-3"
                //  onClick={() => {
                //   actions.login(email, password);
                //</div>     }}
              >
                Registrarse 🐶
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
