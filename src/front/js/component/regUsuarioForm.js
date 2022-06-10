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
  <div className="container">
    <div className="row align-items-start">
      <div className="col"></div>
      <div className="col">
        <form className="container">
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
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
