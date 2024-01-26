import React from 'react';

const Cart = (props) => {
    const { cart } = props;

    // show products calculation simple
    let total = 0;
    let quantity = 0;
    let shipping = 0;

    for (const product of cart) {
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping * product.quantity;

    }
    const tax = parseFloat(total * 0.1).toFixed(2);
    const grandTotal = total + shipping + parseFloat(tax);
    return (
        <div className='cart pl-2 mt-4 leading-8 sticky top-0'>
            <h3 className='text-2xl mb-5'>Order Summary</h3>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping Charge: ${shipping}</p>
            <p>Tax: {tax}</p>
            <h2 className='text-xl'>Grand Total: {grandTotal}</h2>
        </div>
    );
};

export default Cart;