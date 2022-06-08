import React, { Component } from "react";

export const RecupContraForm = () => (
  <div class="container">
    <div class="row align-items-start">
      <div class="col"></div>
      <div class="col">
        <form className="">
          <div class="mb-3">
            <label class="form-label">Email</label>
            <input
              type="email"
              class="form-control"
              placeholder="name@example.com"
            />
          </div>
          <div className="col-auto">
            <button
              type="submit"
              className="btn btn-outline-danger outline-info btn-lg"
            >
              Enviar 🐰
            </button>
          </div>
        </form>
      </div>
      <div className="col"></div>
    </div>
  </div>
);
