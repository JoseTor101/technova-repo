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

  function conversion(precio){
    return new Intl.NumberFormat("es-ES", {
      style: "currency",
      currency: "COP",
    }).format(precio);
  }

  function deleteElement(id){
    let valor = JSON.parse(window.localStorage.getItem('item'));
    let idElement = valor.filter(elemento => elemento.id !== id);
    window.localStorage.setItem('item', JSON.stringify(idElement));
    window.location.reload();
  }

    
  
  return (
    <div>
      {item.item.map (producto => (<div className="itemCart">
        <div className="itemImgCart">
          <img className="imgCart" src={producto.img} alt="item-img"></img>
        </div>
        <div className="itemFeactures">
          <div className="itemName">
            <p>{producto.nombre}</p>
          </div>
          <div className="itemPrice">
            <p>Precio: $ {conversion(producto.precio)}</p>
          </div>
          <div className="itemAmount">
            <p>
              Cantidad <button onClick={() => setSuma(suma + 1)}>+</button>{" "}
              {suma} <button onClick={restar}>-</button>
            </p>
            <div className="cartDelete" onClick={() => deleteElement(producto.id)} >
              <img src="https://cdn-icons-png.flaticon.com/512/1017/1017530.png" alt="trashIcon"></img>
            </div>
          </div>
        </div>
      </div>))}
    </div>
  );
};

export default CartProducts;
