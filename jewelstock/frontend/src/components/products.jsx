import React from 'react';
import { useContext, useCallback } from 'react';
import { useProductList } from '../hooks/useProductList';

// components
import { Modal } from './Modal';

// global context
import { ModalContext } from './providers/ModalProvider';


export const Products = () => {
    const { modal, setModal } = useContext(ModalContext);
    const { products, activeProduct } = useProductList();

    const linebreaksbr = (string) => {
        // React.Fragment は <></> と同じであるが、今回はkeyを指定する必要があるため、React.Fragmentとする 
            return string.split('\n').map((item, index) => (
                <React.Fragment key={index}>
                    {item}
                    {index !== string.split('\n').length - 1 && <br />}
                </React.Fragment>
        )); 
    };

    const productList = useCallback(() => {
        return products.map((product) => (
            <div className="border" key={product.product_code}>
            <div>{product.product_code}{product.name}</div>
            <div>{ linebreaksbr(product.description) }</div>
            </div>
        ));
    }, [products]);

    const openModal = useCallback(() => setModal({isActive:true}), [modal]);
    const closeModal = useCallback(() => setModal({isActive:false}), [modal]);


    return (
        <>
            <button onClick={ openModal }>新規作成</button>

            {/* 商品一覧 */}
            { productList() }

            {/* 新規作成モーダル */}
            { modal.isActive ? <Modal activeProduct={ activeProduct } closeModal={ closeModal }></Modal> : <></> }
            
        </>
    );
};
