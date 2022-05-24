import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Adopta = () => {
  return (
    <div className="container">
      <div className="title" style={{ textAlign: "center", color: "red" }}>
        <h1>Adoptar a una mascota</h1>
      </div>
      <div
        className="subtitle"
        style={{ margin: "3rem", textJustify: "inter-character" }}
      >
        <h5>¿Buscas adoptar y dar hogar a un animal rescatado?</h5>
      </div>
      <div className="parrafo">
        <p>
          Todos ellos eran animales abandonados en las calles que fueron
          rescatados y rehabilitados, recibiendo atención para mejorar su salud
          física y emocional. Todos están listos para encontrar a una nueva
          familia que los quiera y los cuide.
        </p>
        <p>
          Está App busca promover la adopción de mascotas de manera responsable,
          es decir, que cuando una persona quiere adoptar un perro debe asumir
          varios compromisos y estar realmente seguro de que quiere llevar una
          nueva mascota a su hogar.
        </p>
        <p>
          Por eso no se debe entregar el perro en de forma inmediata, sino que
          son sólo una instancia para que la gente conozca y tenga contacto. Si
          alguien está interesado en adoptar con nosotros debe llenar un
          formulario de pre-adopción, donde se le preguntan cosas sobre el hogar
          donde vivirá la mascota, la composición de la familia, el tiempo que
          le dedicarán, etc.
        </p>
        <p>
          La idea de este formulario, es poder evaluar si esa familia es
          adecuada para el perro en cuestión, que los postulantes también
          reflexionen sobre todo lo que implica adoptar una mascota. Luego de
          eso, si el formulario cumple con los requisitos, se contacta a la
          persona a través de la misma App mediante una notificación de aprobado
          o rechazado.
        </p>
        <p>
          En caso de ser aceptado se aclaran dudas mutuas, para luego coordinar
          la entrega. Los perros son entregados al domicilio y se les hace un
          seguimiento después.
        </p>
      </div>
      <div
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
      </div>
    </div>
  );
};