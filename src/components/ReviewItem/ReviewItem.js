import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ReviewItem = ({ product, handleRemoveProduct }) => {

    const { img, name, price, shipping, quantity } = product;

    return (
        <div className='review-order m-4 w-52 md:w-full rounded mx-auto md:flex md:items-center border py-3 px-4'>
            <div className='md:mr-12'>
                <img className='md:w-24 w-12 h-18' src={img} alt="img" />
            </div>

            <div className="review-item-info w-full block md:flex md:justify-between md:items-center">

                <div className="review-details">
                    <p className='product-name xl md:text-2xl' title={name}> {name?.length > 20 ? name.slice(0, 15) + '...' : name} </p>
                    <p>Price: {price}</p>
                    <p><small>Shipping Charge : ${shipping}</small></p>
                    <p><small>Quantity : {quantity}</small></p>
                </div>

                <div className="btn-del mr-0 md:mt-0 mt-3">
                    <button className='delete-button text-3xl text-red-600 bg-red-300 hover:bg-red-400 w-12 h-12' style={{ 'borderRadius': '50%' }} onClick={() => handleRemoveProduct(product)}>
                        <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;