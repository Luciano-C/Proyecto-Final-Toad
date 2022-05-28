import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import emailjs from "emailjs-com";

export const Contacto = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_eunlgtd",
        "template_k4r4v3p",
        e.target,
        "7mmIhv5U2jO59TOvV"
      )
      .then((res) => {
        alert("Email enviado exitosamente.");
        console.log(res);
      })
      .cath((error) => {
        console.log(error);
      });
  }

  return (
    <div className="container">
      <form onSubmit={sendEmail}>
        <div className="row">
          <div className="col-6" style={{ paddingTop: "20px" }}>
            <div className="contacto" style={{ textAlign: "left" }}>
              <h1 style={{ color: "red" }}>Contacto</h1>
              <div className="parrafo" style={{ paddingTop: "20px" }}>
                <p>
                  Rellena este formulario en caso de que tengas dudas respecto a
                  adopciones, cómo ser hogar temporal, donaciones o cómo
                  padrinar a uno de nuestros rescatados.
                </p>
              </div>
            </div>
            <div className="input-group" style={{ paddingTop: "20px" }}>
              <label className="input-group-text">Nombre</label>
              <input
                type="text"
                aria-label="First name"
                className="form-control"
                name="name"
              />
              <label className="input-group-text">Apellido</label>
              <input
                type="text"
                aria-label="First name"
                className="form-control"
                name="firstname"
              />
            </div>
            <div className="mb-6" style={{ paddingTop: "20px" }}>
              <label for="exampleFormControlInput1" className="form-label">
                Correo electrónico
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="nombre@example.com"
                name="user_email"
              />
            </div>
            <div className="mb-6" style={{ paddingTop: "20px" }}>
              <label for="exampleFormControlTextarea1" className="form-label">
                Mensaje
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                name="message"
              ></textarea>
            </div>
            <button
              type="Submit"
              className="btn btn-danger outline-info btn-lg"
            >
              Enviar
            </button>
          </div>
          <div className="col-6" style={{ paddingTop: "20px" }}>
            <img src="https://s03.s3c.es/imag/_v0/770x420/6/0/5/mascotas-archivo.png"></img>
          </div>
        </div>
      </form>
    </div>
  );
};
