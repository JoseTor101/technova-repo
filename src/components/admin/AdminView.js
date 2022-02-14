import React, { Fragment, useState } from 'react';
import Footer from '../Footer';
import Header from "../Header"

const AdminViewR = (usuario, contrasena) =>{
    const consultar = () => {
        alert("Iniciando la consulta");
      };

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
    <Fragment>
        <Header></Header>
        <h2>¿Qué desea hacer hoy?</h2>
        <p>Total de productos en base de datos: #</p>
  
        <div className="topAdmin">
          <div className="containerAdminOption">
            <div className="adminOption" id="Consultar" onClick={consultar}><p>Consultar</p></div>
            <div className="adminOption" onClick="admin()"><p>Agregar</p></div>
            <div className="adminOption" onClick="admin()"><p>Modificar</p></div>
            <div className="adminOption" onClick="admin()"><p>Eliminar</p></div>
          </div>
        </div>
        <div className="bottomAdmin">
        
        <div className="FormSignup">
      <div className="HeaderSignUp">
        <div>
         <h1>Ingresar nuevo producto</h1>
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
        </div>
        <ul>
          <li>
            <button>Consultar</button>
            <ol>
              <li>Ingrese el nombre del producto</li>
              <li>Filtrar por nombre, precio, marca, tipo, etc.</li>
              <li>Aplicar filtros de búsqueda</li>
            </ol>
          </li>
          <li>
            <button>Agregar</button>
            <ol>
              <li>Ingrese el tipo de producto</li>
              <li>
                De acuerdo al tipo de producto aparece una tabla para llenar on
                los detalles del tipo de producto seleccionado, por ejemplo si es
                televisor que aparezca nombre, marca, smartTV, etc.
              </li>
              <li>Todos los campos deben estar diligenciados</li>
              <li>Botón para subir el producto</li>
            </ol>
          </li>
          <li>
            <button>Modificar</button>
            <ol>
              <li>Se filtra primero hasta encontrar el producto</li>
              <li>
                Los detalles actuales del producto aparecen en una tabla. Luego
                aparece un Menu para cambiar los detalles actuales
              </li>
              <li>Se aplica el cambio</li>
            </ol>
          </li>
          <li>
            <button>Eliminar</button>
            <ol>
              <li>Se busca el producto</li>
              <li>La pagina arroja un mensaje de confirmación para eliminar</li>
              <li>El producto es eliminado</li>
            </ol>
          </li>
          <p>
            <b>
              Consultar acerca de cómo hacer herramienta de consulta, CRUD, etc.
              Con PHP y SQL
            </b>
          </p>
        </ul>
  
        <Footer/>
        </Fragment>
  )
  
};

export default AdminViewR;
