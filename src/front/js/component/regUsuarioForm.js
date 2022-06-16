import React, { Component } from "react";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import "../../styles/login.css";
import { useContext } from "react";
import { Context } from "../store/appContext";

export const RegUsuarioForm = () => {
  const { store, actions } = useContext(Context);
  const [nombre, setNombre] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [direccion, setDireccion] = useState("");
  const history = useHistory();

  return (
    <div className="row align-items-start">
      <div className="col-10">
        <form className="row g-3">
          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">
              Nombre
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
              aria-label="Last name"
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">
              Apellidos
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
              aria-label="Last name"
              onChange={(e) => setApellidos(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              placeholder="name@example.com"
              onChange={(e) => setEmail(e.target.value)}
              name="user_email"
              id="inputEmail4"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputPassword4" className="form-label">
              Contraseña
            </label>
            <input
              type="password"
              className="form-control"
              id="inputPassword4"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="col-12">
            <label htmlFor="inputAddress" className="form-label">
              Dirección
            </label>
            <input
              type="text"
              className="form-control"
              id="inputAddress"
              onChange={(e) => setDireccion(e.target.value)}
              placeholder="Región, Comuna, Calle, Número"
            />
          </div>
          <div className="row">
            <div className="col-auto" style={{ marginTop: "5rem" }}>
              <button
                type="submit"
                className="btn btn-primary mb-3"
                onClick={(e) => {
                  e.preventDefault();
                  let respuestas = [
                    nombre,
                    apellidos,
                    email,
                    password,
                    direccion,
                  ];

                  if (respuestas.includes("")) {
                    alert("Complete todos los campos");
                  } else {
                    if (
                      actions.registroUsuario(
                        nombre,
                        apellidos,
                        email,
                        password,
                        direccion
                      )
                    ) {
                      alert("Usuario registrado");
                      history.push("/login");
                    }
                  }

                  /* actions.registroUsuario(
                    nombre,
                    apellidos,
                    email,
                    password,
                    direccion
                  ); */
                }}
              >
                {" "}
                Registrarse 🐶
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
