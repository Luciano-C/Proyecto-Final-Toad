import React, { Component } from "react";

export const Login = () => (
  <div className="container">
    <div className="dropdown-menu">
      <form className="px-4 py-3">
        <div className="form-group">
          <label for="exampleDropdownFormEmail1">Email</label>
          <input
            type="email"
            className="form-control"
            id="exampleDropdownFormEmail1"
            placeholder="email@example.com"
          />
        </div>
        <div className="form-group">
          <label for="exampleDropdownFormPassword1">Contraseña</label>
          <input
            type="password"
            className="form-control"
            id="exampleDropdownFormPassword1"
            placeholder="Contraseña"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Ingresar
        </button>
      </form>
      <div className="dropdown-divider"></div>
      <a className="dropdown-item" href="#">
        ¿Quieres adoptar?.... Regístrate
      </a>
      <a className="dropdown-item" href="#">
        ¿Olvidaste tu contraseña?
      </a>
    </div>
  </div>
);
