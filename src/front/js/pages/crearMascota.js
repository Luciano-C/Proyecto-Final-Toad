import React, { useState } from "react";
import Axios from "axios";

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
  const [URLFoto, setURLFoto] = useState(
    `https://res.cloudinary.com/${process.env.CLOUDINARE_CLOUD_NAME}/image/upload/v1652804030/fkr55gcbx3uywcij7f2z.jpg`
  );

  const inputHandler = (valor, funcion) => {
    funcion(valor);
    console.log(valor);
  };

  const handleUpload = () => {
    console.log(foto);
    if (foto.type === "image/jpeg" || foto.type === "image/png") {
      const formData = new FormData();
      formData.append("file", foto);
      formData.append("upload_preset", process.env.CLOUDINARY_PRESET_NAME);

      const cloudName = process.env.CLOUDINARE_CLOUD_NAME;
      Axios.post(
        `https://api.cloudinary.com/v1_1/${cloudName}/upload`,
        formData
      )
        .then((response) => {
          console.log(response);
          setURLFoto(response.data.url);
        })
        .catch((error) => console.log(error));
    } else {
      alert("Adjunte una imagen de tipo jpg o png");
    }
  };

  const añadirMascotaHandler = () => {
    if (foto) {
      handleUpload();
    }
  };

  return (
    <div className="d-flex justify-content-around">
      <img className="fotoDoggo" src={URLFoto} />
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
          <label className="form-label d-flex justify-content-between">
            <span>Subir foto</span>
            <span className="text-secondary">
              Formatos permitidos: jpg, png
            </span>
          </label>
          <input
            type="file"
            className="form-control uploadInput"
            accept="image/*"
            onChange={(e) => {
              setFoto(e.target.files[0]);
            }}
          />
        </div>
        <button
          className="btn btn-primary"
          onClick={() => añadirMascotaHandler()}
        >
          Añadir Mascota
        </button>
      </div>
    </div>
  );
};
