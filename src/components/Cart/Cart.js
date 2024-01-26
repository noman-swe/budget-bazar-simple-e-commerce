import React from 'react';

const Cart = (props) => {
    const { cart } = props;
    return (
        <div className='cart pl-2 mt-4 leading-8 sticky top-0'>
            <h3 className='text-2xl mb-5'>Order Summary</h3>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: </p>
            <p>Total Shipping Charge: </p>
            <p>Tax: </p>
            <h2 className='text-xl'>Grand Total: </h2>
        </div>
    );
};

export default Cart;