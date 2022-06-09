import React from "react";
import { Link } from "react-router-dom";
import { LoginButton } from "./loginButton";
import { useState } from "react";
import "../../styles/login.css";
import { useContext } from "react";
import { Context } from "../store/appContext";

export const LoginForm = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
              }}
            >
              {" "}
              Ingresar 😸
            </button>

            <LoginButton />
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
};
