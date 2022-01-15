import React, { useState, useEffect } from "react";
import { ProductsComponent } from '../components/products/ProductsComponent';
import ShoppingCartView from "../components/carrito/ShoppingCartView";
import AXIOS from '../environment/AXIOS_CONFIG';

export const ShoppingCart = () => {
    
    return (
        <ShoppingCartView/>
    );
}
