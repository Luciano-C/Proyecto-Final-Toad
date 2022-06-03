import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Card } from "../component/card";

export const VerMisMascotas = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.addCurrentUserId();
  }, []);
  useEffect(() => {
    if (store.usuarioActual.id) {
      actions.getMascotasByUserId(store.usuarioActual.id);
    }
  }, [store.usuarioActual]);
  return (
    <div>
      <div className="row">
        {store.mascotasUsuario.map(function (objeto, index) {
          return <Card key={index} objeto={objeto} index={index} />;
        })}
      </div>
    </div>
  );
};
