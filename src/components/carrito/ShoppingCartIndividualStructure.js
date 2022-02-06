import React from "react";
import Producto from "./Producto";
import { useLocalStorage } from "./useLocalStorage";

const ShoppingCartIndividualStructure = ({carrito, agregarProducto}) => {

   var item = JSON.parse(localStorage.getItem("item"));

    return(<div>
        <h2>Tu carrito de compras</h2>
        
        <div className="itemCart">
          <div className="itemImgCart"></div>
          <div className="itemImgFeactures">
            <div className="itemName"></div>
            <div className="itemAmountPrice">
              <div className="itemPrice"></div>
              <div className="itemAmount"></div>
            </div>
            <div className=""></div>
          </div>
        </div>

        {carrito.length === 0
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
    </div>);
}

export default ShoppingCartIndividualStructure;