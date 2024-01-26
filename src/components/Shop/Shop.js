import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb } from '../../utilities/localStorageAdd';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const handleAddToCart = clickedId => {
        let newCart = [];
        newCart = [...cart, clickedId];
        addToDb(clickedId);
        setCart(newCart);
    }

    return (
        <div className='shop-container '>
            <div className="product-container grid grid-cols-3 justify-evenly p-5 ml-32 gap-32 " style={{ 'margin': '100px' }}>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="order-container bg-orange-100 ml-10" style={{ 'backgroundColor': '#f7c5c7' }}>
                <Cart cart={cart}>  </Cart>
            </div>
        </div>
    );
};

export default Shop;