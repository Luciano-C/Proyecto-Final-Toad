import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Demo = () => {
  const { store, actions } = useContext(Context);
  return (
    <div className="container">
      <div className="card mb-5">
        <img
          src="https://p4.wallpaperbetter.com/wallpaper/524/805/269/cute-puppy-dog-pet-face-hand-wallpaper-preview.jpg"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h1 className="card-title">
            <strong>Tobby</strong>
          </h1>
          <h2 className="card-text">Raza</h2>
          <p className="card-text">Edad:</p>
          <p className="card-text">Ubicación:</p>
          <p className="card-text">Descripción:</p>
          <p className="card-text">
            <small className="text-muted">
              Publicado el 18 de Mayo del 2022.
            </small>
          </p>
        </div>
      </div>
      <div className="d-grid gap-2 d-md-flex justify-content-md-end">
        <Link to="/">
          <button className="cardButton btn btn-lg btn-danger outline-info">
            Regresar a Home
          </button>
        </Link>
        <Link to="/">
          <button className="cardButton btn btn-lg btn-danger outline-info">
            Adoptar
          </button>
        </Link>
      </div>
    </div>
  );
};
