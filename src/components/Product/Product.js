import React from 'react';

const Product = (props) => {
    // console.log(props.product);
    const { img, name, price, seller, ratings } = props.product;
    return (
        <div className='product border  rounded-lg relative' style={{ 'height': '500px' }}>

            <div className="product-wrapper px-5 pt-5 ">
                <img className='w-25 rounded-lg' src={img} alt="" />
                <div className="info">
                    <h3>{name.length > (name < 25) ? name.slice(0, 25) : name}</h3>
                    <p>Price: {price}</p>
                    <small>{seller}</small>
                    <p>{ratings}</p>
                    <br />
                </div>
            </div>
            <button className='btn-cart p-2 bg-purple-300 w-full absolute bottom-0' style={{ 'borderRadius': '0px 0px 8px 8px' }}>Add To Cart</button>
        </div>
    );
};

export default Product;