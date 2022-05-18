import React, { useState, useEffect } from "react";
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
  const [errorNombre, setErrorNombre] = useState("");
  const [errorEdad, setErrorEdad] = useState("");
  const [errorEspecie, setErrorEspecie] = useState("");
  const [errorSexo, setErrorSexo] = useState("");
  const [errorTamaño, setErrorTamaño] = useState("");
  const [errorNivelActividad, setErrorNivelActividad] = useState("");
  const [errorOtrosCuidados, setErrorOtrosCuidados] = useState("");

  const inputHandler = (valor, funcion) => {
    funcion(valor);
    console.log(valor);
  };

  // Verifica que inputs sean correctos
  useEffect(() => {
    setErrorNombre(
      nombre.length === 0
        ? "*Requerido"
        : nombre.length > 120
        ? "Nombre debe tener menos de 120 caracteres"
        : ""
    );
    setErrorEdad(
      edad.length === 0
        ? "*Requerido"
        : !Number(edad)
        ? "Edad debe ser un número."
        : ""
    );
    setErrorEspecie(
      especie.length === 0
        ? "*Requerido"
        : especie.length > 120
        ? "Especie debe tener menos de 120 caracteres"
        : ""
    );
    setErrorSexo(
      sexo.length === 0 || sexo === "Seleccionar sexo" ? "*Requerido" : ""
    );
    setErrorTamaño(
      tamaño.length === 0 || tamaño === "Seleccionar tamaño" ? "*Requerido" : ""
    );
    setErrorNivelActividad(
      nivelActividad.length === 0 ||
        nivelActividad === "Seleccionar nivel de actividad"
        ? "*Requerido"
        : ""
    );
    setErrorOtrosCuidados(
      otrosCuidados.length >= 0 && otrosCuidados.length <= 200
        ? ""
        : "Máximo 200 caracteres"
    );
  }, [nombre, edad, especie, sexo, tamaño, nivelActividad, otrosCuidados]);

  //Hace fetch de imagen a cloudinary, verificando que sean png o jpeg
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

  //Realiza fetch a api interna
  const añadirMascotaHandler = () => {
    if (foto) {
      handleUpload();
    }
  };

  return (
    <div className="d-flex justify-content-around">
      <img className="fotoDoggo" src={URLFoto} />

      <div className="d-flex flex-column">
        <div className="mb-3 inputCampo">
          <label className="form-label">Nombre</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => inputHandler(e.target.value, setNombre)}
          />
          <span className="errorInput">{errorNombre}</span>
        </div>

        <div className="mb-3 inputCampo">
          <label className="form-label">Edad</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => inputHandler(e.target.value, setEdad)}
          />
          <span className="errorInput">{errorEdad}</span>
        </div>

        <div className="mb-3 inputCampo">
          <label className="form-label">Especie</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => inputHandler(e.target.value, setEspecie)}
          />
          <span className="errorInput">{errorEspecie}</span>
        </div>

        <div className="mb-3 inputCampo">
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
          <span className="errorInput">{errorSexo}</span>
        </div>

        <div className="mb-3 inputCampo">
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
          <span className="errorInput">{errorTamaño}</span>
        </div>

        <div className="mb-3 inputCampo">
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
          <span className="errorInput">{errorNivelActividad}</span>
        </div>

        <div className="mb-3 inputCampo">
          <label className="form-label">Otros cuidados</label>
          <textarea
            className="form-control"
            placeholder="Ingresar cuidados adicionales"
            onChange={(e) => inputHandler(e.target.value, setOtrosCuidados)}
          ></textarea>
          <span className="errorInput">{errorOtrosCuidados}</span>
        </div>

        <div className="mb-3 mt-5 inputCampo">
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
