import React, { useCallback, useState } from 'react';
import { Products } from './products';

const App = () => {

    const [contentType, setContentType] = useState('')
    console.log({contentType});

    const SwitchContentType = useCallback(() => {
        switch (contentType){
            case 'Products':
                return (
                    <>
                    <h1>商品一覧</h1>
                    < Products />
                    </>
                );
            case 'Stock':
                return (
                    <>
                    <h1>在庫一覧</h1>
                    </>
                );
            default:
                return (
                    <>
                    <h1>TOP</h1>
                    </>
                );
        };
    }, [contentType]);

    return (
        <>
            <h1>Jewelstock</h1>
            <button onClick={ () => {setContentType('')} }>TOP</button>
            <button onClick={ () => {setContentType('Products')} }>商品一覧</button>
            <button onClick={ () => {setContentType('Stock')} }>在庫管理</button>
            <SwitchContentType></SwitchContentType>
        </>
    );
};

export default App;
