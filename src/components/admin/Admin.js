import React, { Fragment } from "react";
import Header from "../Header";

const Admin = () => {
  return (
    <Fragment>
      <Header />
      <h1>Página del administrador. Bienvenido!</h1>
      <hr></hr>
      <h2>¿Qué desea hacer hoy?</h2>
      <div className="options">Opciones:</div>

      <div>Espacio que varia según la opción seleccionada</div>
      <p>Total de productos en base de datos: #</p>

      <div className="topAdmin"></div>
      <div className="bottomAdmin"></div>
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
    </Fragment>
  );
};
export default Admin;
