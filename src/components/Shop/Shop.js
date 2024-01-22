import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    return (
        <div className='shop-container '>
            <div className="product-container grid grid-cols-3 justify-evenly p-5 ml-32 my-20 gap-16 ">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                    ></Product>)
                }
            </div>
            <div className="order-container  bg-purple-50">
                <h3 className='mt-8 ml-3'>Order Summary</h3>
            </div>
        </div>
    );
};

export default Shop;