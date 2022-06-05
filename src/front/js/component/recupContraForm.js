import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../styles/login.css";
import emailjs, { sendForm } from "emailjs-com";
import { useState, useContext } from "react";
import { Context } from "../store/appContext";

export const RecupContraForm = () => {
  const { store, actions } = useContext(Context);

  function recuperarContraseña(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hmyjggt",
        "template_y16zf9q",
        e.target,
        "7mmIhv5U2jO59TOvV"
      )

      .then((res) => {
        alert("Revise su Bandeja de entrada.");
        console.log(res);
      })
      .cath((error) => {
        console.log(error);
      });
  }

  return (
    <div className="login">
      <div className="row">
        <div className="card mb-3">
          <form onSubmit={recuperarContraseña}>
            <div className="title" style={{ margin: "1rem" }}>
              <h1>Restaurar tu contraseña</h1>
            </div>

            <div className="mb-3" style={{ margin: "1rem" }}>
              <label for="exampleFormControlInput1" className="form-label">
                <h4> Email</h4>
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
                name="user_email"
              />
            </div>
            <div className="col-auto" style={{ margin: "1rem" }}>
              <button type="submit" className="btn btn-primary mb-3">
                Enviar 🐰
              </button>
            </div>
            <div
              className="regresar"
              style={{ margin: "1rem", justifyContent: "start" }}
            >
              <Link to="/login">
                <span>Regresar</span>
              </Link>{" "}
            </div>
          </form>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
};
