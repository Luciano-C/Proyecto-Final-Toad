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
      idFormularioActual: "",
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
          process.env.BACKEND_URL +
            `/api/get-usuario/email=${store.usuarioActual.email}`
        )
          .then((response) => response.json())
          .then((result) => {
            let user = {
              id: result.id,
              email: result.email,
              password: store.usuarioActual.password,
              nombre: result.nombre,
              apellidos: result.apellidos,
              direccion: result.direccion,
              telefono: result.telefono,
            };
            setStore({ usuarioActual: user });
          })
          .catch((error) => console.log("error", error));
      },

      editUserContactData: (id, nombre, apellidos, direccion, telefono) => {
        const store = getStore();
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
          id: id,
          email: store.usuarioActual.email,
          password: store.usuarioActual.password,
          nombre: nombre,
          apellidos: apellidos,
          direccion: direccion,
          telefono: telefono,
        });
        console.log(raw);
        var requestOptions = {
          method: "PUT",
          headers: myHeaders,
          body: raw,
          redirect: "follow",
        };

        fetch(process.env.BACKEND_URL + "/api/editar-usuario", requestOptions)
          .then((response) => response.json())
          .then((result) => console.log(result))
          .catch((error) => console.log("error", error));
      },

      crearFormulario: () => {
        const store = getStore();
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
          pregunta_1: store.respuestasFormularioAdopcion[0],
          pregunta_2: store.respuestasFormularioAdopcion[1],
          pregunta_3: store.respuestasFormularioAdopcion[2],
          pregunta_4: store.respuestasFormularioAdopcion[3],
          pregunta_5: store.respuestasFormularioAdopcion[4],
          pregunta_6: store.respuestasFormularioAdopcion[5],
          pregunta_7: store.respuestasFormularioAdopcion[6],
        });

        var requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow",
        };

        fetch(process.env.BACKEND_URL + "/api/crear-formulario", requestOptions)
          .then((response) => response.json())
          .then((result) => {
            console.log(result);
            setStore({ idFormularioActual: result.id });
          })
          .catch((error) => console.log("error", error));
      },

      crearCandidatoMascotaFormulario: (idUsuario, idMascota, idFormulario) => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
          id_usuario: idUsuario,
          id_mascota: idMascota,
          id_formulario: idFormulario,
        });

        var requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow",
        };

        fetch(
          process.env.BACKEND_URL + "/api/crear-candidato-mascota-formulario",
          requestOptions
        )
          .then((response) => response.json())
          .then((result) => console.log(result))
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
