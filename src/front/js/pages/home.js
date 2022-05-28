import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Card } from "../component/card";
import { Carousel } from "../component/carousel";

export const Home = () => {
  const { store, actions } = useContext(Context);
  return (
    <div className="text-center">
      <div className="carousel">
        <Carousel />
      </div>
      <div className="row">
        {store.mascotas.map(function (objeto, index) {
          return <Card key={index} objeto={objeto} index={index} />;
        })}
      </div>
      <div className="page">
        <nav aria-label="page">
          <ul className="pagination justify-content-center">
            <li className="page-item disabled">
              <a className="page-link">Previous</a>
            </li>
            <li className="page-item">
              <a className="page-link" href="/">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="/">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="/">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="/">
                Next
              </a>
            </li>
          </ul>
          <div className="Logo" style={{ paddingTop: "4rem" }}>
            <h5>¿Quieres ayudar de otra forma? </h5>
            <small style={{ justify: "center", width: "" }}>
              Si no puedes adoptar a uno de nuestros animales rescatados, ¡no te
              preocupes! existen varias maneras en que puedes contribuir a
              mejorar su calidad de vida.
            </small>
            <div>
              <img
                src="https://fundacionhuellaanimal.cl/wp-content/uploads/2021/02/paw-print.svg"
                className="rounded mx-auto"
                style={{ width: "4rem", paddingTop: "1rem" }}
              ></img>
            </div>
          </div>
          <div className="boton" style={{ paddingTop: "1rem" }}>
            <button
              type="button"
              className="btn btn-outline-danger outline-info btn-lg"
            >
              Quiero Donar
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};
