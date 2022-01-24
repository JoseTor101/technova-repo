import React from "react";
import { Link, useLocation } from "react-router-dom";

export const ProductComponent = ({ product }) => {

  const pathName = useLocation().pathname.slice(1);
  
  return (
        <div className="productContainerDiv">
          <div className="cardIndividualProductTop">
            <p>{product.nombre}</p>
          </div>
          <div className="cardIndividualProductBottom">
            <div className="cardIndividualProductLeft">
                <p>
                    <div className="imgGrid"><img src={product.img} alt="Producto"></img></div>
                </p>
            </div>
            <div className="cardIndividualProductRight">
              <div className="cardIndividualRightFlex">
              <div className="cardPrice"><b>Precio: </b>$ {product.precio}</div>
                <div className="cardBrand"><b>Marca: </b> {product.marca}</div>
              </div>              
              <div className="cardMoreDetailsCenter"><Link to={`/product/${product.id}/${pathName}`}><p>Ver más detalles</p></Link></div>
              
            </div>
          </div>
        </div>

        
    
      
  );
};
