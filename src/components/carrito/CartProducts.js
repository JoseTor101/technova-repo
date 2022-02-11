import React, { useState } from "react";

const CartProducts = (item) => {
  const [suma, setSuma] = useState(0);

  function restar() {
    if (suma === 0) {
    } else {
      setSuma(suma - 1);
    }
  }
  console.log(item);

  var total = new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "COP",
  }).format(item.precio);

  function clearCart(){
    window.localStorage.clear('item');
    alert('productos eliminados')
  }

    
  
  return (
    <div>
      <div className="itemCart">
        <div className="itemImgCart">
          <img className="imgCart" src={item.img} alt="item-img"></img>
        </div>
        <div className="itemFeactures">
          <div className="itemName">
            <p>{item.nombre}</p>
          </div>
          <div className="itemPrice">
            <p>Precio: $ {total}</p>
          </div>
          <div className="itemAmount">
            <p>
              Cantidad <button onClick={() => setSuma(suma + 1)}>+</button>{" "}
              {suma} <button onClick={restar}>-</button>
            </p>
            <div className="cartDelete" onClick={() => clearCart()} >
              <img src="https://cdn-icons-png.flaticon.com/512/1017/1017530.png" alt="trashIcon"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProducts;
