import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Navbar } from "../component/navbar";
import { LoginForm } from "../component/loginForm";
import { Footer } from "../component/footer";

export const Login = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="login">
      <LoginForm />
    </div>
  );
};
