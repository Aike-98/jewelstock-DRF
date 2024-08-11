import React, { useState } from 'react';
import { Products } from './products';

const App = () => {

    const [contentType, setContentType] = useState('')
    console.log({contentType});

    switch (contentType) {
        case 'product':
            return (
                <>
                    <h1>Hello World</h1>
                    <button onClick={ () => {setContentType('product')} }>show products</button>
                    <Products></Products>
                </>
            );
        default:
            return (
                <>
                    <h1>Hello World</h1>
                    <button onClick={ () => {setContentType('product')} }>show products</button>
                </>
            );
    };
};

export default App;
