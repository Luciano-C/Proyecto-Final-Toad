import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";
import "../../styles/home.css";

export const Navbar = () => {
  return (
    <div className="container">
      <nav className="navbar navbar bg-light mb-3">
        <div className="logo">
          <Link to="/">
            <img src={logo} className="imagen"></img>
          </Link>
        </div>
        <div className="col">
          <Link to="/">
            <button className="btn btn-ligth" type="button">
              ADOPTA
            </button>
          </Link>
          <Link to="/">
            <button className="btn btn-ligth" type="button">
              REQUISITOS DE ADOPCIÓN
            </button>
          </Link>
          <Link to="/">
            <button className="btn btn-ligth" type="button">
              COMO ADOPTAR
            </button>
          </Link>
        </div>
        <div className="ml-auto">
          <Link to="/demo">
            <button className="btn btn-dark">
              <i class="fas fa-user"> Inicia sección </i>
            </button>
          </Link>
        </div>
      </nav>
    </div>
  );
};
