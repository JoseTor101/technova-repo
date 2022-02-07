import React, {useState} from "react";
import { useLocalStorage } from "./useLocalStorage";
import CartProducts from "./CartProducts";

const ShoppingCartIndividualStructure = ({carrito, agregarProducto}) => {
  var item = JSON.parse(localStorage.getItem("item"));

    return(<div>
        <h2>Tu carrito de compras</h2>

        {item === null
        ?
            <p>No elementos en el carrito</p>
            
        : item.map(producto => (
         <CartProducts 
           key={item}
           item={item}
         /> 
       ))} 
        {/* {carrito.length === 0
        ?
            <p>No elementos en el carrito</p>
            
        : carrito.map(producto => (
         <Producto 
           key={producto.id}
           producto={producto}
           carrito={carrito}
           agregarProducto={agregarProducto}
         /> 
       ))} 
       {productos 
        ?
          (
        
            <button 
            type="button"
            id="comprar"
            onClick={ () => seleccionarProducto(id) }
            >Comprar</button>
           )
        :
           (
            <button 
            type="button"
            id="comprar"
            onClick={ () => eliminarProducto(id) }
            >Eliminar</button>  
           )}
       */
       }
    </div>);
}

export default ShoppingCartIndividualStructure;