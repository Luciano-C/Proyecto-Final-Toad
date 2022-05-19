import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Navbar } from "../component/navbar";
import { RecupContraForm } from "../component/recupContraForm";
import { Footer } from "../component/footer";

export const RecupContra = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="recupContra">
      <RecupContraForm />
    </div>
  );
};
