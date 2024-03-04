import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = (props) => {
    const { product, handleAddToCart } = props;
    const { img, name, price, seller, ratings } = product;
    return (
        <div className='product border w-80 rounded-lg relative' style={{ 'height': '470px' }}>

            <div className="product-wrapper px-3 pt-3 ">
                <img className='w-25 rounded-lg' src={img} alt=""/>
                <div className="info text-lg">
                    <h3 className='font-normal'>
                        {/* {name.length > (name < 25) ? name.slice(0, 20) + '...' : name} */}
                        {name}
                    </h3>
                    <p className='mb-3'>Price: ${price}</p>
                    <small>Seller: {seller}</small> <br />
                    <small>Ratings: {ratings}</small>
                    <br />
                </div>
            </div>
            <button onClick={() => handleAddToCart(product)} className='btn-cart p-2 w-full absolute bottom-0 text-base flex justify-center items-center duration-500' >Add To Cart
                <FontAwesomeIcon className='pl-2' icon={faCartPlus}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;