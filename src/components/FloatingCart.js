import React, {Fragment} from 'react';
import carritoIcon from "../icons/carrito-de-compras.png";
import { Link } from "react-router-dom";

const FloatingCart = () => {
  return (
    <Fragment> 
    <Link to="/shoppingCart">
    <div className="floatingCart">
      <div>
      <img src={carritoIcon} alt="carrito"></img>
      </div>
    </div>
    </Link>
    </Fragment>
 
  )
}

export default FloatingCart;

