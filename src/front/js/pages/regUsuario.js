import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Navbar } from "../component/navbar";
import { RegUsuarioForm } from "../component/regUsuarioForm";
import { Footer } from "../component/footer";

export const RegUsuario = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="regUsuarios">
      <RegUsuarioForm />
    </div>
  );
};
