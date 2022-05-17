import React, { useState } from "react";

import "../../styles/crearMascota.css";

export const CrearMascota = () => {
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");
  const [especie, setEspecie] = useState("");
  const [sexo, setSexo] = useState("");
  const [tamaño, setTamaño] = useState("");
  const [nivelActividad, setNivelActividad] = useState("");
  const [otrosCuidados, setOtrosCuidados] = useState("");
  const [foto, setFoto] = useState("");

  const inputHandler = (valor, funcion) => {
    funcion(valor);
    console.log(valor);
  };

  return (
    <div className="d-flex justify-content-around">
      <img
        className="fotoDoggo"
        src="https://wallpaperaccess.com/full/1730273.jpg"
      />
      <div className="d-flex flex-column">
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => inputHandler(e.target.value, setNombre)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Edad</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => inputHandler(e.target.value, setEdad)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Especie</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => inputHandler(e.target.value, setEspecie)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Sexo</label>
          <select
            className="form-select"
            aria-label="Default select example"
            onChange={(e) => inputHandler(e.target.value, setSexo)}
          >
            <option defaultValue>Seleccionar sexo</option>
            <option value="macho">Macho</option>
            <option value="hembra">Hembra</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Tamaño</label>
          <select
            className="form-select"
            aria-label="Default select example"
            onChange={(e) => inputHandler(e.target.value, setTamaño)}
          >
            <option defaultValue>Seleccionar tamaño</option>
            <option value="chico">Chico</option>
            <option value="mediano">Mediano</option>
            <option value="grande">Grande</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Nivel de actividad</label>
          <select
            className="form-select"
            aria-label="Default select example"
            onChange={(e) => inputHandler(e.target.value, setNivelActividad)}
          >
            <option defaultValue>Seleccionar nivel de actividad</option>
            <option value="bajo">Bajo</option>
            <option value="mediano">Mediano</option>
            <option value="alto">Alto</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Otros cuidados</label>
          <textarea
            className="form-control"
            placeholder="Ingresar cuidados adicionales"
            onChange={(e) => inputHandler(e.target.value, setOtrosCuidados)}
          ></textarea>
        </div>

        <div className="mb-3">
          <label className="form-label">Subir foto</label>
          <input
            type="file"
            className="form-control"
            onChange={(e) => {
              setFoto(e.target.value[0]);
              console.log(foto);
            }}
          />
        </div>
        <button className="btn btn-primary">Añadir Mascota</button>
      </div>
    </div>
  );
};
