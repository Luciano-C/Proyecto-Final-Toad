import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../styles/login.css";
import emailjs, { sendForm } from "emailjs-com";
import { useState, useContext } from "react";
import { Context } from "../store/appContext";

export const RecupContraForm = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errrorEmail, setErrorEmail] = useState(null);
  const [loading, setLoading] = useState(null);

  const onSubmit = () => {
    if (!validateData()) {
      return;
    }
    console.log("recuperación exitosa!");
  };

  const validateData = () => {
    setErrorEmail(null);
    let valid = true;

    if (!validateEmail(email)) {
      setErrorEmail("Debes ingresar un email válido");
      valid = false;
    }
    return valid;
  };

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
        <div
          className="card"
          style={{
            width: "50rem",
            height: "55rem",
            padding: "2rem",
            margin: "2rem",
          }}
        >
          <form onSubmit={recuperarContraseña}>
            <div className="title" style={{ marginTop: "2rem" }}>
              <h1>Restaurar tu contraseña</h1>
            </div>

            <div className="mb-3" style={{ marginTop: "2rem" }}>
              <label for="exampleFormControlInput1" className="form-label">
                <h4> Email</h4>
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Ingresa tu email"
                onChange={(e) => setEmail(e.target.value)}
                defaultValue={email}
                errorMessage={errrorEmail}
                keyboardType="email-address"
                name="user_email"
              />
            </div>
            <div className="col-auto" style={{ marginTop: "2rem" }}>
              <button
                type="submit"
                title="Recuperar Contraseña"
                onPress={onSubmit}
                className="cardButton btn btn-lg btn-danger outline-info"
              >
                Enviar 🐰
              </button>
            </div>
            <div
              className="regresar"
              style={{ marginTop: "2rem", justifyContent: "start" }}
            >
              <Link to="/login">
                <span>Regresar</span>
              </Link>{" "}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
