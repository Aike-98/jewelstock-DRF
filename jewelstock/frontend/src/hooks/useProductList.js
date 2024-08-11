import { useState, useEffect } from "react";
import axios from 'axios';

export const useProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios
            .get('api/products/')
            .then((res) => setProducts(res.data))
            .catch((err) => console.log(err));
        console.log('refresh');
    }, []);

    return { products };
}