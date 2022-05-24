import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const App = () => {
  return (
    <div className="">
      <div className="card bg-dark text-black">
        <div
          id="carouselExampleSlidesOnly"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel">
            <div className="carousel-item active">
              <img
                src="https://www.marketingdirecto.com/wp-content/uploads/2014/11/mascotas-marcas-850x478.png"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://s1.eestatic.com/2020/08/26/curiosidades/mascotas/mascotas-perros-gatos_515959375_158488465_1706x960.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://www.ustedpregunta.com/data/articulos/cuales-son-los-beneficios-de-los-perros-como-mascotas/60dd85997081f.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className=""
        style={{ textAlign: "center", padding: "2rem", margin: "4rem" }}
      >
        <h1 className="mision">Misión</h1>
        <p className="textM">
          Promover el bienestar animal y la tenencia responsable, a través de la
          implementación de una App, que permita la interacción entre el usuario
          que desea adoptar y el usuario que da en adopción. Generando una
          atención personalizada para garantizar la seguridad, educación,
          cuidado y mantención de la mascota.
        </p>
      </div>

      <div className="card bg-dark text-black">
        <div
          id="carouselExampleSlidesOnly"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel">
            <div className="carousel-item active">
              <img
                src="https://c4.wallpaperflare.com/wallpaper/26/58/362/animales-corre-hierba-perro-wallpaper-preview.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://www.emprendedores.es/wp-content/uploads/2018/09/mascotas-1024x576.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://mercado.com.ar/wp/wp-content/uploads/2021/09/mascotas.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className=""
        style={{ textAlign: "center", padding: "2rem", margin: "4rem" }}
      >
        <h1 className="mision">Visión</h1>
        <p className="textM">
          Convertirnos en la App que garantiza el bienestar animal a través de
          la tenencia responsable de mascotas.
        </p>
      </div>
    </div>
  );
};
