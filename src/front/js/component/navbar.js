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
          <div className="dropdown">
            <button
              className="cardButton btn btn-ls btn-danger outline-info dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {" "}
              <i className="fa fa-user"></i>
              <span> Cuenta</span>
            </button>
            <ul
              className="dropdown-menu"
              aria-labelledby="dropdownMenuButton1"
              style={{ border: "solid 1px black" }}
            >
              <li className="ms-1">
                <Link to="/perfil">
                  <button
                    className="btn btn-ligth"
                    href="/perfil"
                    /* onClick={() => {
                      sessionStorage.setItem("Token", "");
                      history.push("/");
                    }} */
                  >
                    <i className="fas fa-id-badge"> Perfil</i>
                  </button>
                </Link>
              </li>
              <li className="ms-1">
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
              <li className="">
                <Link className="dropdown-item" to="/regUsuario">
                  {" "}
                  <i className="fas fa-users"> Regístrate</i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
