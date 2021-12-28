import React, { useState, useEffect } from "react";
import { ProductsComponent } from '../components/ProductsComponent';
import "boxicons";
import Carrito from "../components/Carrito/Carrito";
import AXIOS from '../environment/AXIOS_CONFIG';

export const ShoppingCart = () => {
    
    return (
        <Carrito/>
    );
}
