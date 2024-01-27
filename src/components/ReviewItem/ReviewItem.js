import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ReviewItem = ({ product, handleRemoveProduct }) => {

    const { img, name, price, shipping, quantity } = product;

    return (
        <div className='review-order m-4 flex items-center border py-3 px-4'>
            <div className='mr-12'>
                <img className='w-24 h-18' src={img} alt="img" />
            </div>

            <div className="review-item-info w-full flex  justify-between items-center">

                <div className="review-details">
                    <p className='product-name text-2xl' title={name}> {name?.length > 20 ? name.slice(0, 20) + '...' : name} </p>
                    <p>Price: {price}</p>
                    <p><small>Shipping Charge : ${shipping}</small></p>
                    <p><small>Quantity : {quantity}</small></p>
                </div>

                <div className="btn-del mr-0">
                    <button className='delete-button text-3xl text-red-600 bg-red-300 hover:bg-red-400 w-12 h-12' style={{ 'borderRadius': '50%' }} onClick={() => handleRemoveProduct(product)}>
                        <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;