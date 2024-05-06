import React from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
// import { useParams } from 'react-router-dom';

const Add = () => {
    const { register, handleSubmit } = useForm();
    const notify = () => toast("Successfully added!");
    const onSubmit = data => {
        console.log(data);


        // send to the backend and then backend will send to the db
        const url = `http://localhost:5000/products/`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(data => {
                notify();
            })
    };

    const number = "Numbers Only.";
    return (
        <div>
            <h2 className='text-center text-4xl mt-2'>Add Products</h2>
            {/* forms to create data */}
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col border w-2/5 mx-auto my-3 px-12 py-8'>
                <input placeholder='Name' className='add-product-input' {...register("name")} />

                <input placeholder={`Category`} className='add-product-input' {...register("category")} />
                <input placeholder='Seller' className='add-product-input' {...register("seller")} />
                <input type='number' placeholder={`Price: ${number}`} className='add-product-input' {...register("price")} />
                <input type='number' placeholder={`Stock: ${number}`} className='add-product-input'  {...register("stock")} />
                <input type='number' placeholder={`Ratings: ${number}`} className='add-product-input' {...register("ratings")} />
                <input type='number' placeholder={`RatingsCount: ${number}`} className='add-product-input' {...register("ratingsCount")} />
                <input type='number' placeholder={`Shipping: ${number}`} className='add-product-input' {...register("shipping")} />
                <input type='number' placeholder={`Quantity: ${number}`} className='add-product-input' {...register("quantity")} />

                <input type='text' placeholder='Image' className='add-product-input' {...register("img")} />
                <input type="submit" className='bg-gray-300 add-product-input ' value={'Add Product'} />
            </form>

            <ToastContainer
                position="top-center"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
        </div>
    );
};

export default Add;