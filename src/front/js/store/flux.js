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
      user: [
        {
          currentEmail: "",
          currentPassword: "",
          //token:"",
        },
      ],

      mascotas: [],
      usuarios: [],

      //Paginas
      paginasHome: [],

      // Para generar formulario de adopción
      respuestasDatosContacto: [],
      respuestasFormularioAdopcion: [],

      // Temporal, hay que actualizar con token
      usuarioActual: {
        /*  email: "test_user1@test.com",
        password: "123456",
        nombre: "Bob",
        apellidos: "Martinez Lopez",
        telefono: "1981234568",
        direccion: "Callequenoexiste 123", */
        email: "",
        password: "",
        nombre: "",
        apellidos: "",
        telefono: "",
        direccion: "",
      },

      idMascotasDelUsuario: [],
      usuariosMascotasFormularios: [],

      // Para mis candidatos
      candidatosDelUsuario: [],

      //Para mis postulaciones
      usuariosMascotas: [],
      misPostulaciones: [],

      //Para ver respuestas de candidato
      //candidatoActual: {},
      //mascotaActual: {},
      formularioActual: {},

      //Para mis mascotas:
      mascotasUsuario: [],

      //Para verificar si usuario es dueño en pet.js
      esDueño: "",
    },
    actions: {
      login: (email, password) => {
        console.log("este es el email y password", email, password);

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
          email: email,
          password: password,
        });

        var requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow",
        };

        fetch(process.env.BACKEND_URL + "/login", requestOptions)
          .then((response) => response.json())
          .then((result) => {
            console.log(result);
            if (result.Token) {
              sessionStorage.setItem("Token", result.Token);

              sessionStorage.setItem("email", result.email);

              window.location.href = "/perfil";
            } else {
              alert("inicio de sesion fallido");
            }
          })
          .then((result) => {
            console.log(result);
          })
          .catch((error) => console.log("error", error));
      },

      registroUsuario: (
        nombre,
        apellidos,
        email,
        password,
        telefono,
        direccion
      ) => {
        console.log(
          "Datos recibidos",
          nombre,
          apellidos,
          email,
          password,
          telefono,
          direccion
        );

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
          nombre: nombre,
          apellidos: apellidos,
          email: email,
          password: password,
          telefono: telefono,
          direccion: direccion,
        });

        var requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow",
        };

        fetch(process.env.BACKEND_URL + "/registro", requestOptions)
          .then((response) => response.json())
          .then((result) => {
            console.log(result);
            //window.location.href = "/login";
            /* if (
              result.nombre &&
              result.apellidos &&
              result.email &&
              result.password &&
              result.direccion
            ) {
              window.location.href = "/login";
            } else {
              alert("Resgistro no exitoso");
            } */
          })

          .catch((error) => console.log("error", error));
        return true;
      },

      recuperar: (password) => {
        console.log("este es el email y password", password);
      },

      getMascotas: () => {
        fetch(process.env.BACKEND_URL + "/api/mascotas")
          .then((response) => response.json())
          .then((result) => {
            console.log(result);
            setStore({ mascotas: result });
            let numeroPaginas = Math.ceil(result.length / 8);
            let pages = [];
            for (let i = 1; i <= numeroPaginas; i++) {
              pages.push(i);
            }
            setStore({ paginasHome: pages });
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
            `/api/get-usuario/email=${sessionStorage.getItem("email")}`
        )
          .then((response) => response.json())
          .then((result) => {
            let user = {
              id: result.id,
              email: result.email,
              nombre: result.nombre,
              apellidos: result.apellidos,
              direccion: result.direccion,
              telefono: result.telefono,
            };
            setStore({ usuarioActual: user });
          })
          .then(console.log(store))
          .catch((error) => console.log("error", error));
      },

      editUserContactData: (id, nombre, apellidos, direccion, telefono) => {
        const store = getStore();
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
          id: id,
          email: store.usuarioActual.email,
          //password: store.usuarioActual.password,
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

      crearFormulario: (idUsuario, idMascota) => {
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

        fetch(
          process.env.BACKEND_URL +
            `/api/crear-formulario/id-usuario=${idUsuario}/id-mascota=${idMascota}`,
          requestOptions
        )
          .then((response) => response.json())
          .then((result) => {
            console.log(result);
            /* setStore({ idFormularioActual: result.id }) */
          })
          .catch((error) => console.log("error", error));
      },

      getUserPetsId: (id_usuario) => {
        const store = getStore();
        fetch(
          process.env.BACKEND_URL +
            `/api/get-usuario-mascota/id-usuario=${id_usuario}`
        )
          .then((response) => response.json())
          .then((result) => {
            console.log(result);
            setStore({ idMascotasDelUsuario: result.map((x) => x.id_mascota) });
            console.log(getStore());
          })
          .catch((error) => console.log("error", error));
      },

      getUsuarioMascotaFormulario: () => {
        fetch(process.env.BACKEND_URL + `/api/get-usuario-mascota-formulario/`)
          .then((response) => response.json())
          .then((result) => {
            console.log(result);
            setStore({ usuariosMascotasFormularios: result });
            console.log(getStore());
          })
          .catch((error) => console.log("error", error));
      },

      filtrarUsuarioMacotaFormularioPorIdMascota: (idMascota) => {
        const store = getStore();
        const usuarioFormularioFiltrados =
          store.usuariosMascotasFormularios.filter(
            (x) => x.id_mascota === idMascota
          );
        return usuarioFormularioFiltrados;
      },

      getUsers: () => {
        fetch(process.env.BACKEND_URL + "/api/usuarios")
          .then((response) => response.json())
          .then((result) => {
            console.log(result);
            setStore({ usuarios: result });
          })
          .catch((error) => console.log("error", error));
      },

      getUsuariosMascotas: () => {
        fetch(process.env.BACKEND_URL + "/api/usuario-mascota")
          .then((response) => response.json())
          .then((result) => setStore({ usuariosMascotas: result }))
          .catch((error) => console.log("error", error));
      },

      getMascotasByUserId: (userId) => {
        fetch(
          process.env.BACKEND_URL +
            `/api/get-mascotas-by-user/id-user=${userId}`
        )
          .then((response) => response.json())
          .then((result) => setStore({ mascotasUsuario: result }))
          .catch((error) => console.log("error", error));
      },

      getPostulacionesByUserId: (userId) => {
        fetch(
          process.env.BACKEND_URL +
            `/api/get-postulaciones-by-user/id-user=${userId}`
        )
          .then((response) => response.json())
          .then((result) => setStore({ misPostulaciones: result }))
          .catch((error) => console.log("error", error));
      },

      checkIfOwner: (idUser, idPet) => {
        fetch(
          process.env.BACKEND_URL +
            `/api/check-if-owner/id-user=${idUser}/id-pet=${idPet}`
        )
          .then((response) => response.json())
          .then((result) => setStore({ esDueño: result.mensaje }))
          .catch((error) => console.log("error", error));
      },

      //Poner funciones para obtener by id usuario (candidato), mascota, formulario
      /*       getCandidatoById: (idUser) => {
        fetch(process.env.BACKEND_URL + `/api/get-usuario/id=${idUser}`)
          .then((response) => response.json())
          .then((result) => {
            setStore({ candidatoActual: result });
          })
          .catch((error) => console.log("error", error));
      },

      getMascotaById: (idMascota) => {
        fetch(process.env.BACKEND_URL + `/api/get-mascota/id=${idMascota}`)
          .then((response) => response.json())
          .then((result) => {
            setStore({ mascotaActual: result });
          })
          .catch((error) => console.log("error", error));
      }, */

      getFormularioById: (idFormulario) => {
        fetch(
          process.env.BACKEND_URL + `/api/get-formulario/id=${idFormulario}`
        )
          .then((response) => response.json())
          .then((result) => {
            setStore({ formularioActual: result });
          })
          .catch((error) => console.log("error", error));
      },

      borrarMascota: (idMascota) => {
        var requestOptions = {
          method: "DELETE",
          redirect: "follow",
        };

        fetch(
          process.env.BACKEND_URL + `/api/delete-pet/id-pet=${idMascota}`,
          requestOptions
        )
          .then((response) => response.json())
          .then((result) => console.log(result))
          .catch((error) => console.log("error", error));
      },

      resetUsuarioActual: () => {
        setStore({
          usuarioActual: {
            email: "",
            password: "",
            nombre: "",
            apellidos: "",
            telefono: "",
            direccion: "",
          },
        });
      },

      getCandidatosByUserId: (idUsuario) => {
        fetch(
          process.env.BACKEND_URL +
            `/api/get-candidatos-by-user/id-user=${idUsuario}`
        )
          .then((response) => response.json())
          .then((result) => setStore({ candidatosDelUsuario: result }))
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
