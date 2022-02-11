import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ReactDOM from "react-dom";
import { useLocalStorage } from "../carrito/UseLocalStorage";


export const ProductDetailComponent = ({product, variants, producto, carrito, agregarProducto, productos}) => {
  var precio = new Intl.NumberFormat('es-ES',{style: 'currency', currency: 'COP'}).format(product.precio);

  const [Item, setItem] = useLocalStorage("item", []);
  function agregado(){
    alert('Producto agregado al carrito');
  }

  function goPay(){
    window.location.href = "localhost:3000/shoppingCart#payment"; 
  }
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
        <div className="individualProductBuy" onClick={() => goPay}><p><Link to="/shoppingCart">Comprar</Link></p></div>
        <div className="individualProductCar" onClick={() => {setItem(product); agregado()}}><p className="pIndividualCar">Añadir al carrito</p></div>
        
      </div>
    </div>

  );
};

