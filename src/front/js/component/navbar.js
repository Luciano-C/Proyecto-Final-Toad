import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";
import "../../styles/home.css";

export const Navbar = () => {
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
        <div className="ml-auto">
          {!sessionStorage.getItem("Token") ||
          sessionStorage.getItem("Token") == "" ? (
            <Link to="/login">
              <button className="btn btn-dark" href="/login">
                <i className="fas fa-user"> Iniciar sesión </i>
              </button>
            </Link>
          ) : (
            <button className="btn btn-dark" href="/login">
              <i className="fas fa-user"> Cerrar sesión </i>
            </button>
          )}
        </div>
      </nav>
    </div>
  );
};
