import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';


const Shipment = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [success, setSuccess] = useState('');
    const [confirm, setConfirm] = useState(false);

    const navigate = useNavigate();
    const [user] = useAuthState(auth);

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
        console.log(user);
    }



    return (

        <div className='w-full my-12'>
            <div className='wrapper md:w-3/6 w-80 mx-auto border pb-12 '>

                <div className="content">
                    <div className="shipment-title my-3">
                        <h2 className='text-4xl text-center'>Shipment</h2>
                    </div>
                    <form onSubmit={handleCreateUser} className='md:w-96 md:mx-auto '>

                        <div className="input-group mb-5 ml-7 md:ml-0">
                            <label className='block mb-1 pl-1'>Name</label>
                            <input onBlur={handleNameBlur} type="email" name="email" className='md:w-96 w-64 h-11 text-black  rounded bg-slate-300' disabled id="name" value={`${user?.displayName}`} />
                        </div>
                        <div className="input-group mb-5 ml-7 md:ml-0">
                            <label className='block mb-1 pl-1'>Email</label>
                            <input onBlur={handleEmailBlur} type="email" name="email" className='md:w-96 w-64 h-11 rounded bg-slate-300' disabled id="email" value={`${user?.email}`} />
                        </div>

                        <div className="input-group mb-5 ml-7 md:ml-0">
                            <label className='block mb-1 pl-1'>Phone</label>
                            <input onBlur={handlePhoneBlur} type="text" name="phone" className='md:w-96 w-64 h-11  rounded bg-slate-300' id="phone" placeholder='Phone' />
                        </div>

                        <div className="input-group mb-5 ml-7 md:ml-0">
                            <label className='block mb-1 pl-1'>Address</label>
                            <input onBlur={handleAddressBlur} type="text" name="address" className='md:w-96 w-64 h-11  rounded bg-slate-300' id="address" placeholder='Address' />
                        </div>

                        <div className="input-group  ml-7 md:ml-0">
                            <input type="submit" className="text-xl bg-slate-300 md:w-96 w-64 xs:w-24 h-11 rounded cursor-pointer mt-3" value="Shipment" required />
                        </div>
                    </form>

                </div>
            </div>
        </div>


    );
};

export default Shipment;