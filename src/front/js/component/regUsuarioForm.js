import React, { Component } from "react";

export const RegUsuarioForm = () => (
  <div class="container">
    <div class="row align-items-start">
      <div class="col"></div>
      <div class="col">
        <form className="container">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Email
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Contraseña
            </label>
            <input type="password" class="form-control" />
          </div>
          <div className="col-auto">
            <button type="submit" className="btn btn-primary mb-3">
              Registrar 🐶
            </button>
          </div>
        </form>
      </div>
      <div className="col"></div>
    </div>
  </div>
);
