import React from 'react';
import { useSelector } from 'react-redux';

const Products = () => {
    const ProductsInfo = useSelector((state) => (state));
    console.log(ProductsInfo.isLoading);
    
    return (
        <div>
            <h1>Hello Products</h1>
        </div>
    );
};

export default Products;