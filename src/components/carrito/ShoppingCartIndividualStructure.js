import React, {useState} from "react";
import { useLocalStorage } from "./UseLocalStorage";
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
        
    </div>);
}

export default ShoppingCartIndividualStructure;