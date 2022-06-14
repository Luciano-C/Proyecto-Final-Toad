import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import "../../styles/login.css";
import { useContext } from "react";
import { Context } from "../store/appContext";

export const LoginForm = () => {
  const { store, actions } = useContext(Context);
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
          <div>
            <h1>Inicia sesión</h1>
          </div>

          <div className="mb-3" style={{ marginTop: "2rem" }}>
            <label htmlFor="exampleFormControlInput1" className="form-label">
              <h4> Email</h4>
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="correo@example.com"
              onChange={(e) => setEmail(e.target.value)}
              name="user_email"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
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
              <span className="mb-3" href="#">
                ¿Quieres adoptar?... Regístrate 😻
              </span>
            </Link>
            <div>
              <Link to="/resetpass">
                <span className="mb-3" href="#">
                  Recuperar contraseña
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
