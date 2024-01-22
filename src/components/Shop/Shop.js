import React from 'react';
import './Shop.css';

const Shop = () => {
    return (
        <div className='shop-container '>
            <div className="product-container grid grid-cols-3 gap-1 justify-evenly border p-5 ml-32 my-20">
                <h3 className='text-4xl'>This is Product.</h3>
                <h3 className='text-4xl'>This is Product.</h3>
                <h3 className='text-4xl'>This is Product.</h3>
            </div>
            <div className="order-container mt-8">
                <h3>Order Summary</h3>
            </div>
        </div>
    );
};

export default Shop;