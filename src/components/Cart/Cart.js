import { faArrowRight, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
        <div className='cart  mt-4  sticky top-0'>
            <div className="wrapper pl-2">
                <h3 className='text-2xl mb-10 text-center underline'>Order Summary</h3>
                <div className="order-info leading-8 mb-12">
                    <p className='text-lg '>Selected Items: {quantity}</p>
                    <p>Total Price: ${total}</p>
                    <p>Total Shipping Charge: ${shipping}</p>
                    <p>Tax: {tax}</p>
                    <h2 className='text-xl'>Grand Total: {grandTotal}</h2>
                </div>
            </div>
            <div className="mx-auto">
                <button className='btn-clear-cart py-1 w-full bg-yellow-400 hover:bg-yellow-600 hover:text-white duration-500'>
                    Clear Cart
                    <FontAwesomeIcon className='pl-2' icon={faTrashCan} />
                </button> <br />
                <button className='mt-5 border w-full py-1 bg-orange-400 hover:bg-orange-600 hover:text-white duration-500'>
                    Review Order
                    <FontAwesomeIcon className='pl-2' icon={faArrowRight} />
                </button>
            </div>
        </div>
    );
};

export default Cart;