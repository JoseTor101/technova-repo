import React,  { useState, Fragment } from "react";
import 'boxicons';
import Header from "../Header";
import Producto from "./Producto";
import Footer from "../Footer";
import ShoppingCartIndividualStructure from "./ShoppingCartIndividualStructure";
import Payment from "./Payment";
import { NavItem } from "reactstrap";

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
               <p id="productAmountText">
                 CARRITO DE COMPRAS <box-icon type='solid' name='cart'></box-icon>
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
       <Payment></Payment>
     <Footer></Footer> 
  </Fragment>
  );
}

export default ShoppingCartView;
