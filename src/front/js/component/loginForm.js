<<<<<<< HEAD
import React, { useState, useContext, useEffect } from "react";
=======
import React from "react";
import { Link, useHistory } from "react-router-dom";
import { LoginButton } from "./loginButton";
import { useState } from "react";
import "../../styles/login.css";
import { useContext } from "react";
>>>>>>> 60a21f7faef2297d50c23d82ceaa593e92b124a5
import { Context } from "../store/appContext";

export const LoginForm = () => {
  const { store, actions } = useContext(Context);
<<<<<<< HEAD
  const [emailInput, setEmail] = useState("");
  const [passwordInput, setPassword] = useState("");

  if (!store.token) {
    return (
      <div className="container">
        <div className="row align-items-start">
          <div className="col"></div>
          <div className="col">
            <form className="">
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="name@example.com"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Contraseña</label>
                <input
                  type="password"
                  className="form-control"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="col-auto">
                <button
                  type="submit"
                  className="btn btn-outline-danger outline-info btn-lg"
                  onClick={() => {
                    emailInput, passwordInput;
                    actions.login(emailInput, passwordInput);
                    console.log(emailInput, passwordInput);
                  }}
                >
                  Ingresar 😸
                </button>
                <br />
                <br />

                <a className="mb-3" href="/regusers">
                  ¿Quieres adoptar?... Regístrate 😻
                </a>
                <br />
                <a className="mb-3" href="/resetpass">
                  ¿Olvidaste tu contraseña?
                </a>
              </div>
            </form>
          </div>
          <div className="col"></div>
        </div>
      </div>
    );
  } else {
    return <formulario-adopcion />;
  }
=======
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  return (
    <div className="login">
      <div className="row">
        <div
          className="card"
          style={{
            width: "48rem",
            height: "40rem",
            padding: "2rem",
            margin: "2rem",
          }}
        >
          <h1>Inicia sección</h1>
          <div className="mb-3" style={{ marginTop: "2rem" }}>
            <label for="exampleFormControlInput1" class="form-label">
              <h4> Email</h4>
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="correo@example.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              <h4> Contraseña</h4>
            </label>
            <input
              type="password"
              className="form-control"
              placeholder="contraseña"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="col-auto" style={{ marginTop: "2rem" }}>
            <button
              type="submit"
              className="cardButton btn btn-lg btn-danger outline-info"
              href="#"
              onClick={() => {
                actions.login(email, password);
                // if (sessionStorage.getItem("logeado") === "ok") {
                //   history.push("/perfil");
                // } else {
                //   alert("login falló :(");
                // }
              }}
            >
              {" "}
              Ingresar 😸
            </button>
            <br />
          </div>
          <div className="registro" style={{ marginTop: "2rem" }}>
            <Link to="/regUsuario">
              <a className="mb-3" href="#">
                ¿Quieres adoptar?... Regístrate 😻
              </a>
            </Link>
            <div>
              <Link to="/resetpass">
                <a className="mb-3" href="#">
                  Recuperar contraseña
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
>>>>>>> 60a21f7faef2297d50c23d82ceaa593e92b124a5
};
