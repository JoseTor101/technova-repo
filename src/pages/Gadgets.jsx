import React, { useState, useEffect } from "react";
import { ProductsComponent } from '../components/ProductsComponent';
import AXIOS from '../environment/AXIOS_CONFIG';
import { RESOURCE_URL } from '../environment/RESOURCE_URL';

export const Gadgets = () => {
    const [gadgets, setGadgets] = useState([]);

    const getGadgetsCategory = () => {
        AXIOS.get(RESOURCE_URL.getGadgetsCategory).then(res => setGadgets(res.data));
    }

    useEffect(() => getGadgetsCategory(), []);

    return (
        <ProductsComponent products={gadgets} title='Gadgets'/>
    );
}