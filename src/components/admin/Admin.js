import React, { Fragment, lazy, Suspense, useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import ModalSU from "../forms/ModalSU";
import { Redirect } from "react-router-dom";
// const Loading = lazy((()=>import('./LoadingIcon')));

const Admin = (products) => {
  
  const [Information, setInformation] = useState({
    user: "",
    password: "",
  });

  const HandleInputChange = (event) => {
    setInformation({
      ...Information,
      [event.target.name]: event.target.value,
    });
  };

  const sendData = (e) => {
    e.preventDefault();
    fetch(
      "https://technova-back.herokuapp.com/user.php?" +
        "user_name" +
        "=" +
        '"' +
        Information.user +
        '"' +
        "&" +
        "user_password" +
        "=" +
        '"' +
        Information.password +
        '"',
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((user) => {
        isUser(user);
      });
  };

  const isUser = (user) => {
    console.log(user);
    let usuario = user.nombres;
    let contrasena = user.userPassword;
    
    if (usuario === 'admin' && contrasena === 'admin') {
     window.location.href = "/adminView" ;
    } else {
      alert("Sus credenciales no son las indicadas");
    }
  };

  return (
    <Fragment>
      <Header />
      <div className="adminLogin">
      <div className="FormSignIn" onSubmit={sendData}>
        <div className="HeaderSignIn">
          <h1>Página del administrador </h1>
        </div>
        <div className="SigIn">
          <div className="Items_form_signIn">
            <p>Correo o nombre usuario</p>
            <input
              placeholder="Ingrese su nombre de usuario"
              name="user"
              onChange={HandleInputChange}
              required
            ></input>
          </div>
          <div className="Items_form_signIn">
            <p>Contraseña</p>
            <input
              placeholder="Ingrese su contraseña"
              type="password"
              name="password"
              onChange={HandleInputChange}
              required
            ></input>
          </div>
          <div className="div_send_sigIn">
            <button className="Send_signIn" onClick={sendData}>
              Iniciar sesión
            </button>
          </div>
        </div>
      </div>
      </div>
    </Fragment>
  );
};
export default Admin;
