import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ReactDOM from "react-dom"

export const ProductDetailComponent = ({product, variants, producto, carrito, agregarProducto, productos}) => {
  var precio = new Intl.NumberFormat('es-ES',{style: 'currency', currency: 'COP'}).format(product.precio);

  return (

    <div className="individualProductBackground">
      <div className="individualProductHeader">
        <div className="individualProductTitle">{product.nombre}</div>
      </div>
      <div className="individualProductCenter">
        <div className="individualProductImg">
          <center>
            <img src={product.img} alt="imas"></img>
          </center>
        </div>
        <div className="individualProductFeactures">
          <div className="individualProductFeacturesTitle">Características</div>
          <div className="individualProductFeacturesTable">
            <b>Marca:</b> {product.marca}
            <hr></hr>
            <b>Precio:</b>$ {precio}
            <hr></hr>
            <b>Descripcion:</b> {product.descripcion}
            <hr></hr>
             {variants.map((variant)=>(
               <span>
                 <b>{variant.charAt(0).toUpperCase() + variant.slice(1)}:</b> {product[variant]}
                 <hr></hr>
               </span>
             )
             )}
            
          </div>
        </div>
      </div>
      <div className="individualProductShop">
        <div className="individualProductBuy"><p>Comprar</p></div>
        <div className="individualProductCar"><p>Añadir al carrito</p></div>
        
      </div>
    </div>

  );
};

