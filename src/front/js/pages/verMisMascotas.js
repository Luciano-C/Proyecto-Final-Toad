import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { CardMisMascotas } from "../component/cardMisMascotas";

export const VerMisMascotas = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.addCurrentUserId();
  }, []);
  useEffect(() => {
    if (store.usuarioActual.id) {
      actions.getMascotasByUserId(store.usuarioActual.id);
    }
  }, [store.usuarioActual, store.mascotasUsuario]);
  return (
    <div>
      <div className="row">
        {store.mascotasUsuario.map((objeto, index) => (
          <CardMisMascotas key={index} objeto={objeto} index={index} />
        ))}
      </div>
    </div>
  );
};
