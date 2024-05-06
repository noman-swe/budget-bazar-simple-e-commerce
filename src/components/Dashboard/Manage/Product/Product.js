import React from 'react';
import '../../../Product/Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Product = ({ product, handleDelete }) => {
    const { name, category, img, price, seller, ratings, stock, ratingsCount, shipping, quantity } = product;
    return (
        <div className='product-admin product border w-80 rounded-lg relative' style={{ 'height': '465px' }}>
            <div className="product-wrapper px-3 pt-3 ">
                <img className='w-25 rounded-lg mx-auto my-1' src={img} alt="" />
                <div className="info">
                    <h3 className='font-semibold'>
                        {/* {product.name.length > (product.name < 25) ? product.name.slice(0, 20) + '...' : product.name} */}
                        Name : {name}
                    </h3>
                    <hr />
                </div>
            </div>

            <div className='ps-2 flex py-2'>

                <div className='left flex flex-col w-1/3 '>
                    <small>Price: ${price}</small>
                    <small>Seller: {seller}</small>
                    <small>Ratings: {ratings}</small>
                    <small>R.count: {ratingsCount}</small>
                </div>
                <div className='line my-2'></div>
                <div className='right ps-2 flex flex-col w-2/3'>
                    <small>Category: {category}</small>
                    <small>Stock: {stock}</small>
                    <small>Quantity: {quantity}</small>
                    <small>Shippings: {shipping}</small>
                </div>
            </div>
            {/*  */}

            <span className='absolute bottom-0 text-base duration-500 flex justify-between w-full text-center text-white '>
                <button className='w-1/2 bg-green-500 py-2 coustom-update' > <Link to={`/update/${product._id}`}>
                    Update
                    <FontAwesomeIcon className='pl-2' icon={faPenToSquare}>Update</FontAwesomeIcon>
                </Link>
                </button>
                
                <button className='w-1/2 bg-red-500 py-2 coustom-delete' onClick={() => handleDelete(product._id)}> Delete
                    <FontAwesomeIcon className='pl-2' icon={faXmark}>Delete</FontAwesomeIcon>
                </button>
            </span>



        </div>
    );
};

export default Product;