import React from 'react';
import useProducts from '../../hooks/useProducts';
import useCart from '../../hooks/useCart';
import { useNavigate } from 'react-router-dom';
import { removeFormDb } from '../../utilities/localStorageAdd';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';

const Orders = () => {
    const [products] = useProducts();
    const [cart, setCart] = useCart(products);

    const navigate = useNavigate();

    const handleRemoveProduct = clickedProduct => {
        const rest = cart.filter(product => product.id !== clickedProduct.id);
        setCart(rest); //je guli match hoy nai oi guli rekhe dicchi rest e, baki guli apna apni e baad jbe. then rest k pathaya dicchi cart e.
        removeFormDb(clickedProduct.id);
    }
    return (
        <div className='orders-container block lg:flex md:justify-between md:mx-32 md:my-28 my-12 '>
            <div className="review-items-container md:w-7/12 mx-auto">
                {
                    cart.map(product => <ReviewItem
                        product={product}
                        key={product.id}
                        handleRemoveProduct={handleRemoveProduct}
                    >
                    </ReviewItem>)
                }
            </div>
            <div className="cart-container md:w-96 w-72 mx-auto py-12" style={{ 'backgroundColor': '#EBD8D1' }}>
                <div className="px-2">
                    <Cart cart={cart}>
                        <button className='' onClick={() => navigate('/shipment')}>Proceed Checkout</button>
                    </Cart>
                </div>
            </div>
        </div>
    );
};

export default Orders;