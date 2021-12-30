import React, { Fragment } from "react";
import Header from "../Header";

const Admin = () => {
    return (
      <Fragment>
          <Header/>
          <h1>Página del administrador. Bienvenido!</h1>
          <hr></hr>
          <h2>¡Qué desea hacer hoy?</h2>
          <ul> 
              <li><button>Consultar</button>
              <ol>
                  <li>Ingrese el nombre del producto</li>
                  <li>Filtrar por nombre, precio,  marca, tipo, etc.</li>
                  <li>Aplicar filtros de búsqueda</li>
              </ol>
              </li>
              <li><button>Agregar</button></li>
              <li><button>Modificar</button></li>
              <li><button>Eliminar</button></li>
              
          </ul>
      </Fragment>
    );
  };
  export default Admin;