import { faArrowRight, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Cart = (props) => {
    const { cart } = props;

    const [user] = useAuthState(auth);

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
        <div className='cart mt-2 md:sticky md:top-0'>
            <div className="px-2">
                <div className="mx-auto">
                    <div className='mb-5'>
                        {
                            // user email has sliced before @ and has showed:  
                            user?.uid && <p className='text-center  mb-3'><small className='bg-gray-200 px-2 rounded-lg user-name-show-shadow'>Hello! <span className=' text-tomato'>{(user?.email).substring(0, user?.email.indexOf('@'))}</span></small></p>
                        }
                    </div>
                    <h3 className='text-2xl mb-5 text-center underline'>Order Summary </h3>

                    <div className="order-info leading-8 mb-12">
                        <p className='text-lg '>Selected Items: {quantity}</p>
                        <p>Total Price: ${total}</p>
                        <p>Total Shipping Charge: ${shipping}</p>
                        <p>Tax: {tax}</p>
                        <h2 className='text-xl'>Grand Total: {grandTotal}</h2>
                    </div>

                    <div className="mx-auto cart-buttons mb-4">
                        <button className='w-full btn bg-red-400 py-1 mb-3 flex justify-center items-center'>
                            Clear Cart
                            <FontAwesomeIcon className='pl-2' icon={faTrashCan}></FontAwesomeIcon>
                        </button>

                        <button className='w-full btn bg-orange-400 py-1 flex justify-center items-center'>
                            {props.children}
                            <FontAwesomeIcon className='pl-2' icon={faArrowRight} > </FontAwesomeIcon>
                        </button>
                    </div>
                </div>


            </div>

        </div>
    );
};

export default Cart;