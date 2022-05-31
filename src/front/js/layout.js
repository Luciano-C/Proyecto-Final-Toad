import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Pet } from "./pages/pet";
import { Single } from "./pages/single";
import { CrearMascota } from "./pages/crearMascota";
import { Login } from "./pages/login";
import { RegUsuario } from "./pages/regUsuario";
import { RecupContra } from "./pages/recupContra";
import injectContext from "./store/appContext";
import { Adopta } from "./pages/adopta";
import { App } from "./pages/app";
import { Contacto } from "./pages/contacto";
import { FormularioAdopcion } from "./pages/formularioAdopcion";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { RecupContraForm } from "./component/recupContraForm";
import { Perfil } from "./component/perfil";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/crear-mascota">
              <CrearMascota />
            </Route>
            <Route exact path="/formulario-adopcion/:idMascota">
              <FormularioAdopcion />
            </Route>
            <Route exact path="/pet/:id">
              <Pet />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/regUsuario">
              <RegUsuario />
            </Route>
            <Route exact path="/resetpass">
              <RecupContraForm />
            </Route>
            <Route exact path="/single/:theid">
              <Single />
            </Route>
            <Route exact path="/adopta">
              <Adopta />
            </Route>
            <Route exact path="/app">
              <App />
            </Route>
            <Route exact path="/contacto">
              <Contacto />
            </Route>
            <Route exact path="/perfil">
              <Perfil />
            </Route>
            <Route>
              <h1>Not found!</h1>
            </Route>
          </Switch>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
