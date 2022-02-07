import React from 'react';

const CartProducts = (item) => {
    console.log(item);
    var total = new Intl.NumberFormat('es-ES',{style: 'currency', currency: 'COP'}).format(item.precio);

  return <div>
      <div className="itemCart">
          <div className="itemImgCart"><img className="imgCart" src={item.img} alt="item-img"></img></div>
            <div className="itemFeactures">
              <div className="itemName"><p>{item.nombre}</p></div>
              <div className="itemPrice"><p>Precio: $ {total}</p></div>
              <div className="itemAmount"><p>Cantidad <button>+</button> 0 <button>-</button></p></div>
            </div>
        </div>
  </div>;
};

export default CartProducts;
