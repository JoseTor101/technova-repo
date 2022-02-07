import React,  { useState, Fragment } from "react";
import Header from "../Header";
import Producto from "./Producto";
import Footer from "../Footer";
import ShoppingCartIndividualStructure from "./ShoppingCartIndividualStructure";

const ShoppingCartView = () => {
   

  // //Crear listado de productos
  // const [ productos, guardarProductos ] = useState([
  //   { id: 1, nombre: 'Camisa ReactJS', precio: 50 },
  //   { id: 2, nombre: 'Camisa VueJS', precio: 50 },
  //   { id: 3, nombre: 'Camisa Node.js', precio: 50 },
  //   { id: 4, nombre: 'Camisa Angular', precio: 50 },
  
  // ]);
  
  //State para un carrito de compras
  const [ carrito, agregarProducto] = useState([]);

  // * El primer valor de la constante es la referencia hacia el valor del state y el segundo el que va a modificarlo
  
  return (
  <Fragment>
    <div className="shoppingCartBackground">
       <Header />
       <div className="shoppingCartProducts">
           <div className="shoppingCartProductsHeader">
             <div id="productAmount">
               {/* Agregar el icono de carrito con boxicons */}
               <p id="productAmountText">
                 Productos en carrito({carrito.length}) (imagen de carrito)
               </p>
             </div>
           </div>

           <div className="shoppingProductsList">
           
             <ShoppingCartIndividualStructure 
              carrito={carrito}
              agregarProducto={agregarProducto}/>
            
           </div>
         </div>
       </div>
      {/* {productos.map(producto => (
        <Producto
        key={producto.id}
        producto={producto}
        productos={productos}
        carrito={carrito}
        agregarProducto={agregarProducto}
          />
      ))} */}

     <Footer></Footer> 
  </Fragment>
  );
}

export default ShoppingCartView;
