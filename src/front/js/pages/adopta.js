import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Adopta = () => {
  return (
    <div className="container">
      <div className="title" style={{ textAlign: "center", color: "red" }}>
        <h1>Adoptar a una mascota</h1>
      </div>
      <div className="subtitle" style={{ textJustify: "inter-character" }}>
        <h5>¿Buscas adoptar?</h5>
      </div>
      <div className="parrafo">
        <p>
          Está App busca promover la adopción de mascotas de manera responsable,
          es decir, que cuando una persona quiere adoptar una mascota debe
          asumir varios compromisos y estar realmente seguro de que quiere
          llevar una nueva mascota a su hogar.
        </p>
        <p>
          Por eso no se debe entregar la mascota de forma inmediata, sino que
          generar una instancia para que la gente conozca y tenga contacto. Si
          alguien está interesado en adoptar con nosotros debe llenar un
          formulario de pre-adopción, donde se le preguntan cosas sobre el hogar
          donde vivirá la mascota, la composición de la familia, el tiempo que
          le dedicarán, etc.
        </p>
        <p>
          La idea de este formulario, es permitir a la persona que ponga en
          adopción su mascota evaluar si esa familia es adecuada para la mascota
          en cuestión y que los postulantes también reflexionen sobre todo lo
          que implica adoptar una mascota. Luego de eso, si el candidato cumple
          con los requisitos, el dueño de la mascota podrá contactarlo para
          coordinar detalles finales y la entrega.
        </p>
      </div>
      {/* <div
        className="d-grid gap-2 col-6 mx-auto"
        style={{
          marginTop: "10rem",
          textAlign: "center",
        }}
      >
        <a
          class="btn btn-outline-danger outline-info btn-lg"
          href="/regUsuario"
          role="button"
        >
          {" "}
          Formulario de adopción
        </a>
        <div
          className="donar"
          style={{
            marginTop: "8rem",
            textAlign: "center",
          }}
        >
          <h5>¿Quieres ayudar de otra forma? </h5>
          <p style={{ justify: "center" }}>
            Si no puedes adoptar a uno de nuestros animales rescatados, ¡no te
            preocupes! existen varias maneras en que puedes contribuir a mejorar
            su calidad de vida.
          </p>
          <div className="Logo">
            <img
              src="https://fundacionhuellaanimal.cl/wp-content/uploads/2021/02/paw-print.svg"
              className="rounded mx-auto"
              style={{ width: "4rem", paddingTop: "2rem" }}
            ></img>
          </div>
          <div className="boton" style={{ paddingTop: "2rem" }}>
            <button
              type="button"
              class="btn btn-outline-danger outline-info btn-lg"
            >
              Quiero Donar
            </button>
          </div>
        </div>
      </div> */}
    </div>
  );
};
