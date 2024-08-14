import { useState, useCallback } from "react";
import axios from 'axios';
import { useFetch } from "./useFetch";

export const useProductList = () => {

    // Productのstate
    const [products, setProducts] = useState([]);
    
    // 新規作成・編集時のstate
    const [activeProduct, setActiveProduct] = useState({
        product_code : '',
        name: "",
        category: "",
        description: "",
        weight: "",
        size: "",
        price: "",
    });

    const url = '/api/products';


    const {data, error} = useFetch(url);
    error? console.log(error): console.log('get products');
    setProducts(data);
    return { products, activeProduct };

};