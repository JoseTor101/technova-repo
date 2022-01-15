import React from "react";
import Producto from "../products/Producto"

const ShoppingCartIndividualStructure = ({carrito, agregarProducto}) => (
    <div>
        <h2>Tu carrito de compras</h2>

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
    </div>
)
export default ShoppingCartIndividualStructure;