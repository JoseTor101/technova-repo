import React, {useState} from "react";
import Producto from "./Producto";
import { useLocalStorage } from "./useLocalStorage";

const ShoppingCartIndividualStructure = ({carrito, agregarProducto}) => {


   var item = JSON.parse(localStorage.getItem("item"));
   var total = new Intl.NumberFormat('es-ES',{style: 'currency', currency: 'COP'}).format(item.precio);
   

    return(<div>
        <h2>Tu carrito de compras</h2>
        
        <div className="itemCart">
          <div className="itemImgCart"><img className="imgCart" src={item.img} alt="item-img"></img></div>
            <div className="itemFeactures">
              <div className="itemName"><p>{item.nombre}</p></div>
              <div className="itemPrice"><p>Precio: $ {total}</p></div>
              <div className="itemAmount"><p>Cantidad <button>+</button> 0 <button>-</button></p></div>
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