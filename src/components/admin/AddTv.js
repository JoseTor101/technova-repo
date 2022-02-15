import React, { useState } from 'react'

const AddTv = () => {
    
    const [Information, setInformation] = useState({
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
            Information.operatives !== ""  && 
            Information.ram !== ""  && 
            Information.storage !== "" && 
            Information.processor !== "" && 
            Information.disktype !== "" && 
            Information.brand !== "" &&
            Information.model !== "" &&
            Information.size !== "" &&
            Information.img !== ""  &&
            Information.description !== "" ){
    
              formData.append("nombre", Information.name)
              formData.append("precio", Information.price)
              formData.append("sistema_operativo", Information.operatives)      
              formData.append("ram", Information.ram)      
              formData.append("almacenamiento", Information.storage)      
              formData.append("procesador", Information.processor)
              formData.append("tipo_disco", Information.disktype)
              formData.append("marca", Information.brand)
              formData.append("modelo", Information.model)
              formData.append("tamanio", Information.size)
              formData.append("img", Information.img)
              formData.append("descripcion", Information.description)
              
              
              fetch("https://technova-back.herokuapp.com/computer_category.php", {      
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
                alert('Producto creador con éxito')
    
    
              }else {
                alert('Tienes que llenar todos los campos')
        }  }

  return (
    <div className="FormSignup" id='tvs'>
    <div className="HeaderSignUp">
        <div>
         <h1>Nuevo televisor</h1>
        </div>
      </div>
      <hr class="blueLine"></hr>
      <div className="Signup" onSubmit={sendData}>
        
        <div className="Items_form_signup">
          <p>Nombre del producto</p>
          <input
            placeholder="Ej. Computador x"
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
          <p>Sistema operativo</p>
          <input
            placeholder="Ej. MacOS"
            type="text"
            name="operatives"
            onChange={HandleInputChange}
            required
          ></input>
        </div>
        <div className="Items_form_signup">
          <p>Ram</p>
          <input
            placeholder="Ej. 8GB"
            type="text"
            name="ram"
            onChange={HandleInputChange}
            required
          ></input>
        </div>
        <div className="Items_form_signup">
          <p>Almacenamiento</p>
          <input
            placeholder="Ej. 256GB"
            type="text"
            name="storage"
            onChange={HandleInputChange}
            required
          ></input>
        </div>
        <div className="Items_form_signup">
          <p>Procesador</p>
          <input
            placeholder="Ej. Apple GPU M1"
            type="text"
            name="processor"
            onChange={HandleInputChange}
            required
          ></input>
        </div>
        <div className="Items_form_signup">
          <p>Tipo de disco</p>
          <input
            placeholder="Ej. SSD"
            type="text"
            name="disktype"
            onChange={HandleInputChange}
            required
          ></input>
        </div>
        
        <div className="Items_form_signup">
          <p>Marca</p>
          <input
            placeholder="Ej. Apple"
            type="text"
            name="brand"
            onChange={HandleInputChange}
            required
          ></input>
        </div>
        <div className="Items_form_signup">
          <p>Modelo</p>
          <input
            placeholder="Ej. A2337"
            type="text"
            name="model"
            onChange={HandleInputChange}
            required
          ></input>
        </div>
        <div className="Items_form_signup">
          <p>Tamaño</p>
          <input
            placeholder='Ej. 14"'
            type="text"
            name="size"
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

export default AddTv;