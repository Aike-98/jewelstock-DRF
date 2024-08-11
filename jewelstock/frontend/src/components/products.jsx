import React from 'react';
import { useProductList } from '../hooks/useProductList';

export const Products = () => {
    const { products } = useProductList();

    // 改行をする
    const linebreaksbr = (string) => {
        // React.Fragment は <></> と同じであるが、今回はkeyを指定する必要があるため、React.Fragmentとする 
            return string.split('\n').map((item, index) => (
                <React.Fragment key={index}>
                    {item}
                    {index !== string.split('\n').length - 1 && <br />}
                </React.Fragment>
        )); 
    };

    return products.map((product) => (
        <div className="border" key={product.product_code}>
        <div>{product.product_code}{product.name}</div>
        <div>{ linebreaksbr(product.description) }</div>
        </div>
    ));
};
