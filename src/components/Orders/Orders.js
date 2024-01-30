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
        <div className='orders-container flex justify-between mx-32 my-28'>
            <div className="review-items-container w-7/12">
                {
                    cart.map(product => <ReviewItem
                        product={product}
                        key={product.id}
                        handleRemoveProduct={handleRemoveProduct}
                    >
                    </ReviewItem>)
                }
            </div>
            <div className="cart-container w-96 py-12" style={{ 'backgroundColor': '#EBD8D1' }}>
                <div className="px-2">
                    <Cart cart={cart}>
                        <button className='' onClick={() => navigate('/inventory')}>Proceed Checkout</button>
                    </Cart>
                </div>
            </div>
        </div>
    );
};

export default Orders;