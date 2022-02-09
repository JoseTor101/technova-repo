import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useLocalStorage } from "../carrito/UseLocalStorage";
import "boxicons";

export const ProductComponent = ({ product }) => {
  const pathName = useLocation().pathname.slice(1);

  const [Item, setItem] = useLocalStorage("item", []);
  var precio = new Intl.NumberFormat('es-ES',{style: 'currency', currency: 'COP'}).format(product.precio);

  return (
    <div className="productContainerDiv">
      <div className="cardIndividualProductTop">
        <p>{product.nombre}</p>
      </div>
      <div className="cardIndividualProductBottom">
        <div className="cardIndividualProductLeft">
          <p>
            <div className="imgGrid">
              <img src={product.img} alt="Producto"></img>
            </div>
          </p>
        </div>
        <div className="cardIndividualProductRight">
          <div className="cardIndividualRightFlex">
            <div className="moreDetailsCart">
              <box-icon
                type="solid"
                name="cart-add"
                onClick={() => setItem(product)}
              ></box-icon>
            </div>
            <div className="cardPrice">
              <b>Precio: </b>$ {precio}
            </div>
            <div className="cardBrand">
              <b>Marca: </b> {product.marca}
            </div>
          </div>
          <div className="cardMoreDetailsCenter">
            <Link to={`/product/${product.id}/${pathName}`}>
              <p>Ver más detalles</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
