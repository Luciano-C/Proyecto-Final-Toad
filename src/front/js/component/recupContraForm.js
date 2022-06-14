import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/login.css";
import emailjs, { sendForm } from "emailjs-com";
import { Context } from "../store/appContext";

export const RecupContraForm = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errrorEmail, setErrorEmail] = useState(null);
  const [loading, setLoading] = useState(null);

  // Funcionalidad para buscar contraseña en base de datos y almacenar en password
  useEffect(() => {
    getPasswordByEmail(email);
  }, [email]);

  const getPasswordByEmail = (email) => {
    fetch(process.env.BACKEND_URL + `/api/get-password/email=${email}`)
      .then((response) => response.json())
      .then((result) => {
        setPassword(result);
      })
      .catch((error) => console.log("error", error));
  };

  // Valida email verificando si hay "@" en el input
  const onSubmit = () => {
    if (!validateData()) {
      return;
    }
  };

  const validateData = () => {
    setErrorEmail(null);
    let valid = true;

    if (!email.includes("@")) {
      setErrorEmail("Debes ingresar un email válido");
      valid = false;
    }
    return valid;
  };

  // Función que interactúa con EmailJS, manda un objeto con las variables requeridas en la plantilla
  function recuperarContraseña(e) {
    getPasswordByEmail(email);
    e.preventDefault();
    const parameters = {
      user_email: email,
      from_name: "Appdopta",
      password: password,
    };
    emailjs
      .send(
        "service_hmyjggt",
        "template_y16zf9q",
        parameters,
        "7mmIhv5U2jO59TOvV"
      )

      .then((res) => {
        alert("Revise su bandeja de entrada.");
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="login">
      <div className="row">
        <div
          className="card"
          style={{
            width: "50rem",
            height: "55rem",
            padding: "2rem",
            margin: "2rem",
          }}
        >
          <form onSubmit={recuperarContraseña}>
            <div className="title" style={{ marginTop: "2rem" }}>
              <h1>Restaurar tu contraseña</h1>
            </div>

            <div className="mb-3" style={{ marginTop: "2rem" }}>
              <label htmlFor="exampleFormControlInput1" className="form-label">
                <h4> Email</h4>
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Ingresa tu email"
                onChange={(e) => setEmail(e.target.value)}
                name="user_email"
                value={email}
              />
            </div>
            <div className="col-auto" style={{ marginTop: "2rem" }}>
              <button
                type="submit"
                title="Recuperar Contraseña"
                onClick={onSubmit}
                className="cardButton btn btn-lg btn-danger outline-info"
              >
                Enviar 🐰
              </button>
            </div>
            <div
              className="regresar"
              style={{ marginTop: "2rem", justifyContent: "start" }}
            >
              <Link to="/login">
                <span>Regresar</span>
              </Link>{" "}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
