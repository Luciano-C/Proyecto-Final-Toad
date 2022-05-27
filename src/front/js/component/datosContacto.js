import React, { useState } from "react";

export const DatosContacto = () => {
  return (
    <form className="formularioContacto container">
      <div className="mb-3">
        <label htmlFor="nombre" className="form-label">
          Nombre
        </label>
        <input type="text" className="form-control" id="nombre" />
      </div>
    </form>
  );
};
