import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import googleLogo from '../../images/kisspng-google-logo-5b02bbe1d5c6e0.2384399715269058258756-removebg-preview.png';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

const SignUp = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    // useCreateUserWithEmailAndPassword
    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);

    const navigate = useNavigate();

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }
    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value);
    }

    if (user) {
        navigate('/shop');
    }

    const handleCreateUser = event => {
        event.preventDefault();

        if (password !== confirmPassword) {
            setError("Password didn't match");
            return;
        }

        createUserWithEmailAndPassword(email, password);
    }

    return (
        <div className='form-container border rounded-lg box-border mx-auto mt-20 mb-20 flex justify-center'>
            <div className="wrapper mb-11">
                <h2 className='text-4xl text-center mt-7 text-tomato font-semibold mb-7'>Sign Up</h2>

                <form onSubmit={handleCreateUser}>
                    
                    <div className=" input-group mb-5">
                        <label className='block text-xl ml-1 ' htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" className=" text-2xl h-12 border rounded text-slate-800 bg-slate-100" name='email' id='email' autoComplete='on' required />
                    </div>
                    <div className="input-group mb-5">
                        <label className='block text-xl ml-1 ' htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" className=" text-2xl h-12 border rounded text-slate-800 bg-slate-100" name='password' id='password' autoComplete='on' required />
                    </div>
                    <div className="input-group mb-5">
                        <label className='block text-xl ml-1 ' htmlFor="confirm-password">Confirm Password</label>
                        <input onBlur={handleConfirmPasswordBlur} type="password" className=" text-2xl h-12 border rounded text-slate-800 bg-slate-100 duration-500" name='confirm-password' id='confirm-password' autoComplete='on' required />
                    </div>

                    {/* error show */}
                    <p className='text-red-600'> {error} </p>

                    {/* submit button */}
                    <input type="submit" className="form-submit text-xl border rounded-md btn-bg-color cursor-pointer mt-5 duration-500" value="Sign Up" required />
                    
                </form>

                <div className="link-signup mt-2">
                    <p className='text-center'>Already have an account? <Link className=' text-tomato' to={'/login'}>Login Here</Link></p>
                </div>

                <div className="alternative-signin mt-7 flex justify-center items-center">
                    <div className='flex-grow border-t border-gray-400  mr-5'></div>
                    <p>or</p>
                    <div className='flex-grow border-t border-gray-400 ml-5'></div>
                </div>

                <button className="form-submit text-xl border rounded-md btn-bg-color cursor-pointer mt-5 flex justify-center items-center duration-500">
                    <img className='w-10 mr-2' src={googleLogo} alt="" />
                    Continue With Google
                </button>

            </div>
        </div>
    );
};

export default SignUp;