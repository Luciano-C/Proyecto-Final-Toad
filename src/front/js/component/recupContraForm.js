import React, { Component } from "react";

export const RecupContraForm = () => (
  <div classname="">
    <form classname="px-4 py-3">
      <div classname="form-group">
        <label for="exampleDropdownFormEmail1">Email</label>
        <input
          type="email"
          classname="form-control"
          id="exampleDropdownFormEmail1"
          placeholder="email@example.com"
        />
      </div>
      <button type="submit" classname="btn btn-primary">
        Enviar
      </button>
    </form>
    <div classname=""></div>
  </div>
);
