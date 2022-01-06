import React from "react";
import { Link, useLocation } from "react-router-dom";

export const ProductDetailComponent = ({product, variants}) => {
  console.log(product); 
  //Agregar función para separar las unidades del precio

  function separatePrice(product) {
    var price = product.precio;
    var priceAssigned= price.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' });
    return priceAssigned
  };

  

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
            <b>Precio:</b> {product.precio}
            <hr></hr>
            <b>Descripcion:</b> {product.descripcion}
            <hr></hr>
             { variants.map((variant)=>(
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
        <div className="individualProductCar"><Link to={`/shoppingCart`}><p>Añadir al carrito</p></Link></div>
        
      </div>
    </div>

  );
};

