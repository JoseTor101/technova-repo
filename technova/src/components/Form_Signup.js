import React, { useState } from "react";

// Añadir un campo para subir una foto y que esa misma aparezca luego de que inicien sesión
const Forms_Signup = () => {
  const [Information, setInformation] = useState({
    names: "",
    lastNames: "",
    email: "",
    adress: "",
    userName: "",
    password: "",
  });

  const HandleInputChange = (event) => {
    setInformation({
      ...Information,
      [event.target.name]: event.target.value,
    });
  };
  
  const sendData = () => {
     var formData = new FormData();
     
     if(Information.names != "" && 
        Information.lastNames != "" && 
        Information.email != ""  && 
        Information.adress != "" && 
        Information.userName != "" && 
        Information.password != "" ){

          formData.append("nombres", Information.names)
          formData.append("apellidos", Information.lastNames)
          formData.append("correo_electronico", Information.email)      
          formData.append("direccion", Information.adress)      
          formData.append("nombre_de_usuario", Information.userName)      
          formData.append("userPassword", Information.password)
          
          
          fetch("http://localhost/Technova/user.php", {      
            method: "POST",
            body: formData,
              headers: {
                'Accept': 'application/json'
              },
            })
            .then((user) => {         
              setInformation({ 
                names: "",
              lastNames: "",
              email: "",
              adress: "",
              userName: "",
              password: "",}) 
            });         
            alert('Usuario creado con exito')


          }else {
            alert('Tienes que llenar todos los campos')
    }  
    
  };

  return (
    <div className="FormSignup">
      <div className="HeaderSignUp">
        <div>
         <h1>Registrarse</h1>
        </div>
      </div>
      <hr class="blueLine"></hr>
      <div className="Signup" onSubmit={sendData}>
        
        <div clasName="Items_form_signup">
          <p>Nombres</p>
          <input
            placeholder="Ej. Miguel Ángel"
            type="text"
            name="names"
            onChange={HandleInputChange}
            required
          ></input>
        </div>
        <div clasName="Items_form_signup">
          <p>Apellidos</p>
          <input
            placeholder="Ej. Rivera Castillo"
            type="text"
            name="lastNames"
            onChange={HandleInputChange}
            required
          ></input>
        </div>
        <div clasName="Items_form_signup">
          <p>Correo electrónico</p>
          <input
            placeholder="Ej. usuario@gmail.com"
            type="email"
            name="email"
            onChange={HandleInputChange}
            required
          ></input>
        </div>
        <div clasName="Items_form_signup">
          <p>Dirección</p>
          <input
            placeholder="Ej. Antioquia, Envigado. CL 12#34"
            name="adress"
            onChange={HandleInputChange}
            required
          ></input>
        </div>
        <div clasName="Items_form_signup">
          <p>Nombre de usuario</p>
          <input
            placeholder="Ej. Miguela101"
            type="text"
            name="userName"
            onChange={HandleInputChange}
            required
          ></input>
        </div>
        <div clasName="Items_form_signup">
          <p>Contraseña</p>
          <input
            placeholder="Cree una contraseña"
            type="password"
            name="password"
            minLength="8"
            onChange={HandleInputChange}
            required
          ></input>
        </div>
        <div clasName="div_send_signUp">
          <button className="Send_signUp" onClick={sendData}>
            Crear cuenta
          </button>
        </div>
      </div>
    </div>
  );
};

export default Forms_Signup;
