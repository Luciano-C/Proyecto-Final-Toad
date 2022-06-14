import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import logo from "../../img/logo.png";
import "../../styles/home.css";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const history = useHistory();
  const { store, actions } = useContext(Context);
  return (
    <div className="display-flex">
      <nav className="navbar navbar bg-light mb-3">
        <div className="logo">
          <Link to="/">
            <img src={logo} className="imagen"></img>
          </Link>
        </div>
        <div className="col">
          <Link to="/app">
            <button className="btn btn-ligth" type="button">
              Quiénes somos?
            </button>
          </Link>
          <Link to="/adopta">
            <button className="btn btn-ligth" type="button">
              Adopta
            </button>
          </Link>
          <Link to="/contacto">
            <button className="btn btn-ligth" type="button">
              Contacto
            </button>
          </Link>
        </div>
        <div className="col-2">
          <div class="dropdown">
            <button
              class="cardButton btn btn-ls btn-danger outline-info dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {" "}
              <i className="fa fa-user"></i>
              <span> Login</span>
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <Link to="/perfil">
                  <button
                    className="btn btn-ligth"
                    href="/perfil"
                    onClick={() => {
                      sessionStorage.setItem("Token", "");
                      history.push("/");
                    }}
                  >
                    <i class="fas fa-id-badge"> Perfil</i>
                  </button>
                </Link>
              </li>
              <li>
                <div className="ml-auto">
                  {!sessionStorage.getItem("Token") ||
                  sessionStorage.getItem("Token") == "" ? (
                    <Link to="/login">
                      <button
                        className="btn btn-ligth"
                        type="button"
                        href="/login"
                      >
                        <i className="fas fa-user"> Iniciar sesión </i>
                      </button>
                    </Link>
                  ) : (
                    <button
                      className="btn btn-dark"
                      href="/login"
                      onClick={() => {
                        sessionStorage.setItem("Token", "");
                        sessionStorage.setItem("email", "");
                        actions.resetUsuarioActual();
                        history.push("/");
                      }}
                    >
                      <i className="fas fa-user"> Cerrar sesión </i>
                    </button>
                  )}
                </div>
              </li>
              <li>
                <a class="dropdown-item" href="/regUsuario">
                  {" "}
                  <i class="fas fa-users"></i>
                  <span> Registrate </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
