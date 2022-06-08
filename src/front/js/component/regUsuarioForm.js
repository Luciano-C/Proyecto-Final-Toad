import React, { Component, useContext, useState } from "react";

import { Context } from "../store/appContext";

const Registro = () => {
  const { store, actions } = useContext(Context);
  const [inputNombre, setNombre] = useState("");
  const [inputApellido, setApellido] = useState("");
  const [inputEmail, setEmail] = useState("");
  const [inputContraseña, setConstraseña] = useState("");

  const validaEnvio = (e) => {
    e.preventDefault();

    console.log("Registro enviado");
  };
};

export const RegUsuarioForm = () => (
  <div class="container">
    <div class="row align-items-start">
      <div class="col"></div>
      <div class="col">
        <form className="container">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              placeholder="name@example.com"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Confirma tu email</label>
            <input
              type="email"
              className="form-control"
              placeholder="name@example.com"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Contraseña</label>
            <input type="password" className="form-control" />
          </div>
          <div className="col-auto">
            <button
              type="submit"
              className="btn btn-outline-danger outline-info btn-lg"
              onClick={() => {
                actions.login(mail, password);
              }}
            >
              Registrar 🐶
            </button>
          </div>
        </form>
      </div>
      <div className="col"></div>
    </div>
  </div>
);
