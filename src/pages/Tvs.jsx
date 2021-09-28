import React, { useState, useEffect } from "react";
import { ProductsComponent } from '../components/ProductsComponent';
import AXIOS from '../environment/AXIOS_CONFIG';
import { RESOURCE_URL } from '../environment/RESOURCE_URL';

export const Tvs = () => {
    const [tvs, setTvs] = useState([]);

    const getTvsCategory = () => {
        AXIOS.get(RESOURCE_URL.getTvsCategory).then(res => setTvs(res.data));
    }

    useEffect(() => getTvsCategory(), []);

    return (
        <ProductsComponent products={tvs} title='Televisores'/>
    );
}