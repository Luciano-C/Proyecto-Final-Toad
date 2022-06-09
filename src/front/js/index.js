//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import { Auth0Provider } from "@auth0/auth0-react";

//include your index.scss file into the bundle
import "../styles/index.css";

//import your own components
import Layout from "./layout";

//render your react application
ReactDOM.render(
  <Auth0Provider
    domain="dev-o-bggp4h.us.auth0.com"
    clientId="5KjCcuGiJQzJjh4NchhgHgcwGIYti0j7"
    redirectUri={window.location.origin}
  >
    {" "}
    <Layout />
  </Auth0Provider>,
  document.querySelector("#app")
);
