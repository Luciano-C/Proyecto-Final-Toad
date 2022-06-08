import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";

export const LoginForm = () => {
  const { store, actions } = useContext(Context);
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
};
