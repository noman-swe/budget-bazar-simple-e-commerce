import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb } from '../../utilities/localStorageAdd';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { Link } from 'react-router-dom';

const Shop = () => {
    const [products] = useProducts();
    const [cart, setCart] = useCart(products);

    const handleAddToCart = clickedProduct => {
        let newCart = [];
        const exists = cart.find(product => product.id === clickedProduct.id);
        if (!exists) {
            clickedProduct.quantity = 1;
            newCart = [...cart, clickedProduct];
        } else {
            const rest = cart.filter(product => product.id !== clickedProduct.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }

        setCart(newCart);
        addToDb(clickedProduct.id);
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
            <div className="order-container ml-10" style={{ 'backgroundColor': '#EBD8D1' }}>
                {
                    <Cart cart={cart}>
                        
                        <Link to={'/orders'}>
                            <button>Review Order</button>
                        </Link>
                    </Cart>
                }
            </div>
        </div>
    );
};

export default Shop;