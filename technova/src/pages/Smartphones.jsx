import React, { useState, useEffect } from "react";
import { ProductsComponent } from '../components/ProductsComponent';
import AXIOS from '../environment/AXIOS_CONFIG';
import { RESOURCE_URL } from '../environment/RESOURCE_URL';

export const Smartphones = () => {
    const [smartphones, setSmartphones] = useState([]);

    const getSmartphonesCategory = () => {
        AXIOS.get(RESOURCE_URL.getSmartphonesCategory).then(res => setSmartphones(res.data));
    }

    useEffect(() => getSmartphonesCategory(), []);

    return (
        <ProductsComponent products={smartphones} title='Smartphones'/>
    );
}