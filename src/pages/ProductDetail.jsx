import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProductDetailComponent } from "../components/products/ProductDetailComponent";
import AXIOS from '../environment/AXIOS_CONFIG';
import { RESOURCE_URL } from '../environment/RESOURCE_URL';

export const ProductDetail = () => {
    const [product, setProduct] = useState([]);
    const { id, type } = useParams();
    console.log(type); 

    const [variants, setVariants] = useState([]);

    const getSmartphonesById = () => {
        AXIOS.get(RESOURCE_URL.getSmartphonesById(id)).then(res => setProduct(res.data));
    }

    
    const getComputersById = () => {
        AXIOS.get(RESOURCE_URL.getComputersById(id)).then(res => setProduct(res.data));
    }

    
    const getTvsById = () => {
        AXIOS.get(RESOURCE_URL.getTvsById(id)).then(res => setProduct(res.data));
    }

    
    const getGadgetsById = () => {
        AXIOS.get(RESOURCE_URL.getGadgetsById(id)).then(res => setProduct(res.data));
    }

    useEffect(() => {
        if(type === 'smartphones'){
            getSmartphonesById(); 
            setVariants(['modelo', 'almacenamiento', 'ram', 'bateria', 'camaras', 'sistema_operativo', 'procesador', 'tamanio']);
        }else if(type === 'computers'){
            getComputersById(); 
            setVariants(['modelo', 'procesador', 'ram', 'sistema_operativo', 'tamanio', 'tipo_disco']);
        }else if(type === 'gadgets'){
            getGadgetsById();
        }else{
            getTvsById(); 
            setVariants([ 'smartTV', 'tamanio']);
        }
    }, []);

    return (
        <ProductDetailComponent product={product} variants={variants}/>
    );
}
