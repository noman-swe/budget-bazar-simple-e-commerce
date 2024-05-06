import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb } from '../../utilities/localStorageAdd';
import useCart from '../../hooks/useCart';
// import useProducts from '../../hooks/useProducts';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';

const Shop = () => {
    // const [products] = useProducts();
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useCart(products);
    const [pageCount, setPageCount] = useState(0); //value 0 dilam coz number input jabe;
    const [page, setPage] = useState(0); //for button's onclick whick will give output of the selected page no and change the color
    const [size, setSize] = useState(10);

    // load All products from API by filtering via query
    useEffect(() => {
        const url = `http://localhost:5000/product?page=${page}&size=${size}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [page, size]); 

    // load product count API data
    useEffect(() => {
        const url = 'http://localhost:5000/productCount';
        fetch(url)
            .then(res => res.json())
            .then(data => {
                const count = data.count; //total page
                const pages = Math.ceil(count / 10);//total page/10 = 7
                setPageCount(pages);
            })
    }, [])

    const handleAddToCart = clickedProduct => {
        let newCart = [];
        const exists = cart.find(product => product._id === clickedProduct._id);
        if (!exists) {
            clickedProduct.quantity = 1;
            newCart = [...cart, clickedProduct];
        } else {
            const rest = cart.filter(product => product._id !== clickedProduct._id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }

        setCart(newCart);
        addToDb(clickedProduct._id);
        notify();
    }

    const notify = () => toast("Product added to Orders.");

    return (
        <div className='shop-container '>
            <div className="product-container grid grid-cols-3 justify-evenly p-5 ml-32 gap-32 mx-auto" style={{ 'margin': '100px' }}>

                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }

                <div className="pagination " style={{ width: "600px" }}> <span className='border p-1 border-purple-400'>Page no:</span>
                    {
                        [...Array(pageCount).keys()].map(num => <button onClick={() => { setPage(num) }} className={`border border-purple-400 p-1 ms-2 ${page === num ? 'selected' : ''} `}> {num + 1}</button>) // num = 7; num + 1 dilam coz 0 index ta avoid korte;
                    }


                    <span className='ms-4 border p-1 border-purple-800'>Size : {size} </span>
                    <select onChange={(e) => setSize(e.target.value)} defaultValue={'10'} className='ms-4 border p-1 border-purple-700'>
                        <option value="5">5</option>
                        <option  value="10">10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                    </select>
                </div>

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
            <ToastContainer />
        </div>
    );
};

export default Shop;