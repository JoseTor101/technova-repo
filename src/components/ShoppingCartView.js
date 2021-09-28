import React from "react";
import Header from "../components/Header";
import fish from "../icons/fish.gif";

const ShoppingCartView = () => {
  
  return (
    <div className="shoppingCartBackground">
      <Header />
      <div className="shoppingCartProducts">
          <div className="shoppingCartProductsHeader">
            <div id="productAmount">
              <p id="productAmountText">
                Productos en carrito(Número de productos) (imagen de carrito)
              </p>
            </div>
          </div>

          <div className="shoppingProductsList">
            
            <div className="detailProductShoppingCart">
              <div className="detailProductImg"><img src={fish} alt="cartimg" className="cartPimg"></img></div>
              <div className="detailProductName">Nombre</div>
              <div className="detailProductDescription">Descripcion</div>
              <div className="detailProductPrice">Precio</div>
            </div>
            
          </div>
        </div>
      </div>
  );
};

export default ShoppingCartView;
