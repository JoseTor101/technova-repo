import React, { useState } from 'react'

const AddGad = () => {
    
    const [Information, setInformation] = useState({
        name: "",
        price: "",
        brand: "",
        description: "",
        img: "",
      });
    
      const HandleInputChange = (event) => {
        setInformation({
          ...Information,
          [event.target.name]: event.target.value,
        });
      };
      
      const sendData = () => {
         var formData = new FormData();
         
         if(Information.name !== "" && 
            Information.price !== "" && 
            Information.brand!== ""  && 
            Information.description !== ""  && 
            Information.img !== ""  ){
    
              formData.append("nombre", Information.name)
              formData.append("precio", Information.price)
              formData.append("marca", Information.brand)      
              formData.append("descripcion", Information.description)      
              formData.append("img", Information.img)   
              
              
              fetch("https://technova-back.herokuapp.com/gadgets_category.php", {      
                method: "POST",
                body: formData,
                  headers: {
                    'Accept': 'application/json'
                  },
                })
                .then((user) => {         
                  setInformation({ 
                    name: "",
                    price: "",
                    operatives: "",
                    ram: "",
                    storage: "",
                    processor: "",
                    disktype: "",
                    brand: "",
                    model: "",
                    size: "",
                    description: "",
                    img: "",}) 
                });         
                alert('Producto creado con éxito')
    
    
              }else {
                alert('Tienes que llenar todos los campos')
        }  }

  return (
    <div className="FormSignup2" id='gadgets'>
    <div className="HeaderSignUp">
        <div>
         <h1>Nuevo accesorio</h1>
        </div>
      </div>
      <hr class="blueLine"></hr>
      <div className="Signup" onSubmit={sendData}>
        
        <div className="Items_form_signup">
          <p>Nombre del producto</p>
          <input
            placeholder="Ej. Audifonos x"
            type="text"
            name="name"
            onChange={HandleInputChange}
            required
          ></input>
        </div>

        <div className="Items_form_signup">
          <p>Precio</p>
          <input
            placeholder="Ej. 125600"
            type="text"
            name="price"
            onChange={HandleInputChange}
            required
          ></input>
        </div>
        <div className="Items_form_signup">
          <p>Marca</p>
          <input
            placeholder="Ej. Sound Master"
            type="text"
            name="brand"
            onChange={HandleInputChange}
            required
          ></input>
        </div>
        <div className="Items_form_signup">
          <p>Descripcion</p>
          <input
            placeholder="Ej. Lorem ipsum dolor sit amet"
            type="textarea"
            name="description"
            onChange={HandleInputChange}
            required
          ></input>
        </div>

        <div className="Items_form_signup">
          <p>Imagen</p>
          <input
            placeholder="Ej. https://xxxxx.jpg"
            type="text"
            name="img"
            onChange={HandleInputChange}
            required
          ></input>
        </div>


        <div className="div_send_signUp">
          <button className="Send_signUp" onClick={sendData}>
            Ingresar producto
          </button>
        </div>
      </div>
      </div>
  )
}

export default AddGad;