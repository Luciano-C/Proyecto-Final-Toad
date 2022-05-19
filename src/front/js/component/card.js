import React, { Component, useContext } from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Card = (props) => {
  return (
    <div class="card" style={{ width: "18rem" }}>
      <img
        src="https://www.thesprucepets.com/thmb/bzdiSVEaF7gjQ_GKtKprxKnqOtE=/2124x1195/smart/filters:no_upscale()/GoldenPuppy185743593-56a9c1f23df78cf772aa4a33.jpg"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">Mascota</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <Link to="/demo">
          <button className="cardButton btn btn-lg btn-danger outline-info">
            Leer más
          </button>
        </Link>
      </div>
    </div>
  );
};
