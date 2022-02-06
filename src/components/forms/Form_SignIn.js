import React, { useState } from "react";
import ModalSU from "./ModalSU";

const Forms = ({userPhotoState}) => {
  const [Information, setInformation] = useState({
    user: "",
    password: ""
  });

  const isUser = (user) => {
    console.log(user)
    if(user === false){
      alert('No estás registrado')
      userPhotoState(false); 
    }else{
      alert ('Bienvenido a Technova')
      userPhotoState(true); 
    }
  }

  const HandleInputChange = (event) => {
    setInformation({
      ...Information,
      [event.target.name]: event.target.value,
    });
  };

  const sendData = (e) => {
    e.preventDefault(); 
      fetch("https://technova-back.herokuapp.com/user.php?" + "user_name" + "=" + '"' + Information.user + '"' + "&" + "user_password" + "=" + '"' + Information.password +'"',{
        method: "GET",
        headers: {
          'Accept': 'application/json'
        }
      })
      .then(response => response.json())
      .then((user) => {
        isUser(user); 
      }
      
      )
    }

  return (
    <div className="FormSignIn" onSubmit={sendData}>
      <div className="HeaderSigIn">
        <h1>Iniciar sesión </h1>
      </div>
      <div className="SigIn">
        <div clasName="Items_form_signIn">
          <p>Correo o nombre usuario</p>
          <input
            placeholder="Ingrese su nombre de usuario"
            name="user"
            onChange={HandleInputChange}
            required
          ></input>
        </div>
        <div clasName="Items_form_signIn">
          <p>Contraseña</p>
          <input
            placeholder="Ingrese su contraseña"
            type="password"
            name="password"
            onChange={HandleInputChange}
            required
          ></input>
        </div>
        <div clasName="div_send_sigIn">
          <button className="Send_signIn" onClick={sendData}>
            Iniciar sesión
          </button>
        </div>
        <p>
          Si no tienes una cuenta
          <ModalSU />
        </p>
      </div>
    </div>
  );
};

export default Forms;
