import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button
      className="cardButton btn btn-lg btn-danger outline-info btn-sm"
      onClick={() => {
        //logout({ returnTo: window.location.origin });
        logout({ returnTo: process.env.BACKEND_URL + "/" });
      }}
    >
      Cerrar Sesión
    </button>
  );
};
