import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Shipment.css';

const Shipment = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [success, setSuccess] = useState('');
    const [confirm, setConfirm] = useState(false);

    const navigate = useNavigate();

    const handleNameBlur = event => {
        setName(event.target.value);
    }
    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }
    const handleAddressBlur = event => {
        setAddress(event.target.value);
    }
    const handlePhoneBlur = event => {
        setPhone(event.target.value);
    }

    const handleCreateUser = event => {
        event.preventDefault();
        setSuccess(alert("Your product is successfully added for shipment"));
        navigate('/orders');
    }
    return (
        <div className='form-container border rounded-lg box-border mx-auto mt-20 mb-20 flex justify-center'>
            <div className="wrapper mb-11">
                <h2 className='text-4xl text-center mt-7 text-tomato font-semibold mb-7'>Shipment</h2>

                <form onSubmit={handleCreateUser}>

                    <div className=" input-group mb-5">
                        <label className='block text-xl ml-1 ' htmlFor="name">Name</label>
                        <input onBlur={handleNameBlur} type="text" className=" text-2xl h-12 border rounded text-slate-800 bg-slate-100" name='name' id='name' autoComplete='on' required />
                    </div>
                    <div className=" input-group mb-5">
                        <label className='block text-xl ml-1 ' htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" className=" text-2xl h-12 border rounded text-slate-800 bg-slate-100" name='email' id='email' autoComplete='on' required />
                    </div>
                    <div className="input-group mb-5">
                        <label className='block text-xl ml-1 ' htmlFor="address">Address</label>
                        <input onBlur={handleAddressBlur} type="text" className=" text-2xl h-12 border rounded text-slate-800 bg-slate-100" name='address' id='address' autoComplete='on' required />
                    </div>
                    <div className="input-group mb-5">
                        <label className='block text-xl ml-1 ' htmlFor="phone">Your Phone</label>
                        <input onBlur={handlePhoneBlur} type="text" className=" text-2xl h-12 border rounded text-slate-800 bg-slate-100 duration-500" name='phone' id='phone' autoComplete='on' required />
                    </div>

                    
                    <input type="submit" className="form-submit text-xl border rounded-md btn-bg-color cursor-pointer mt-5 duration-500" value="Order Now" required />

                </form>


            </div>
        </div>
    );
};

export default Shipment;