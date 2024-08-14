import { useState, useEffect } from "react";
import axios from 'axios';

export const useFetch = (url) =>{
    const [data, setData] = useState([]);
    const [error, setError] = useState([]);
    useEffect(() => {
        axios
        .get(url)
        .then((res) => setData(res.data))
        .catch((err) => setError(err));
    }, []);
    return {data , error};
}