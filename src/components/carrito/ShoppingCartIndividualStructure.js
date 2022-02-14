import React from "react";
import CartProducts from "./CartProducts";

const ShoppingCartIndividualStructure = ({carrito, agregarProducto}) => {
  var item = JSON.parse(localStorage.getItem("item"));


    return(<div>

        {item === null
        ?
            <div className="empty"><p>No hay elementos en el carrito</p>
            </div>
            
        : 
         <CartProducts 
           key={item}
           item={item}
         /> 
       } 
        
    </div>);
}

export default ShoppingCartIndividualStructure;