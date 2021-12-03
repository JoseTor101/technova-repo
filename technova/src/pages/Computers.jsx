import React, { useState, useEffect } from "react";
import { ProductsComponent } from '../components/ProductsComponent';
import AXIOS from '../environment/AXIOS_CONFIG';
import { RESOURCE_URL } from '../environment/RESOURCE_URL';

export const Computers = () => {
    const [computers, setComputers] = useState([]);

    const getComputersCategory = () => {
        AXIOS.get(RESOURCE_URL.getComputersCategory).then(res => setComputers(res.data));
    }

    useEffect(() => getComputersCategory(), []);

    return (
        <ProductsComponent products={computers} title='Computadores'/>
    );
}