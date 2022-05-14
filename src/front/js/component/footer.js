import React, { Component } from "react";
import logo from "../../img/logo.png";
import team from "../../img/team-toad.png";
import "../../styles/footer.css";

export const Footer = () => (
  <footer className="footer mt-auto py-3">
    <div className="d-flex justify-content-between">
      <img className="appLogo" src={logo} />
      <div className="logoContainer d-flex justify-content-center">
        <span>Powered by:</span>
        <img className="teamLogo" src={team} />
      </div>
    </div>
  </footer>
);
