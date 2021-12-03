import React, { useState, useEffect } from "react";
import { ProductsComponent } from '../components/ProductsComponent';
import ShoppingCartView from "../components/ShoppingCartView";
import AXIOS from '../environment/AXIOS_CONFIG';

export const ShoppingCart = () => {
    
    return (
        <ShoppingCartView/>
    );
}
