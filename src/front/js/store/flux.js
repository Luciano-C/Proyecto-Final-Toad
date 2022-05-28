const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      message: null,
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
      mascotas: [],
      respuestasDatosContacto: [],
      respuestasFormularioAdopcion: [],

      // Temporal, hay que actualizar con token
      usuarioActual: {
        email: "test_user1@test.com",
        password: "123456",
        nombre: "Bob",
        apellidos: "Martinez Lopez",
        telefono: "1981234568",
        direccion: "Callequenoexiste 123",
      },
    },
    actions: {
      login: (email, password) => {
        console.log("este es el email y password", email, password);
      },

      getMascotas: () => {
        fetch(process.env.BACKEND_URL + "/api/mascotas")
          .then((response) => response.json())
          .then((result) => {
            console.log(result);
            setStore({ mascotas: result });
          })
          .catch((error) => console.log("error", error));
      },

      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },

      setRespuestasDatosContacto: (respuestas) => {
        setStore({ respuestasDatosContacto: respuestas });
      },

      setRespuestasFormularioAdopcion: (respuestas) => {
        setStore({ respuestasFormularioAdopcion: respuestas });
      },

      addCurrentUserId: () => {
        const store = getStore();

        fetch(
          process.env.BACKEND_URL + "/api/get-usuario/email=test_user1@test.com"
        )
          .then((response) => response.json())
          .then((result) => setStore({ usuarioActual: result }))
          .catch((error) => console.log("error", error));
      },

      getMessage: () => {
        // fetching data from the backend
        fetch(process.env.BACKEND_URL + "/api/hello")
          .then((resp) => resp.json())
          .then((data) => setStore({ message: data.message }))
          .catch((error) =>
            console.log("Error loading message from backend", error)
          );
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
    },
  };
};

export default getState;
