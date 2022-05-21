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
          return <Card objeto={objeto} index={index} />;
        })}
      </div>
      <div className="page">
        <nav aria-label="page">
          <ul class="pagination justify-content-center">
            <li class="page-item disabled">
              <a class="page-link">Previous</a>
            </li>
            <li class="page-item">
              <a class="page-link" href="/">
                1
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="/">
                2
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="/">
                3
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="/">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
