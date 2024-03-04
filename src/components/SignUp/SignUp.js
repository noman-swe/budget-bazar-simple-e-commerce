import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import googleLogo from '../../images/kisspng-google-logo-5b02bbe1d5c6e0.2384399715269058258756-removebg-preview.png';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';

const SignUp = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    // useCreateUserWithEmailAndPassword
    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);

    const [signInWithGoogle] = useSignInWithGoogle(auth);

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
        console.log(user);
    }

    // sign in with email and password
    const handleCreateUser = event => {
        event.preventDefault();

        if (password !== confirmPassword) {
            setError("Password didn't match");
            return;
        }

        createUserWithEmailAndPassword(email, password);
    }

    // sign in with google account
    const handleSIgnInWithGoogle = () => {
        signInWithGoogle();
    }

    return (


        <div className='w-full my-12'>
            <div className='wrapper md:w-3/6 w-96 mx-auto border pb-32 '>

                <div className="content">
                    <div className="login-title my-3">
                        <h2 className='text-4xl text-center'>Register</h2>
                    </div>
                    <form onSubmit={handleCreateUser} className='md:w-96 w-80 md:mx-auto '>

                        <div className="input-group mb-5 ml-7 md:ml-0">
                            <label className='block mb-1 pl-1'>Email</label>
                            <input onBlur={handleEmailBlur} type="email" name="email" className='md:w-96 w-80 h-11  pl-5 rounded bg-slate-300' id="email" placeholder='Email' />
                        </div>
                        <div className="input-group mb-5 ml-7 md:ml-0">
                            <label className='block mb-1 pl-1'>Password</label>
                            <input onBlur={handlePasswordBlur} type="password" name="password" className='md:w-96 w-80 h-11 pl-5 rounded bg-slate-300' id="password" placeholder='Password' />
                        </div>
                        <div className="input-group mb-5 ml-7 md:ml-0">
                            <label className='block mb-1 pl-1'>Confirm Password</label>
                            <input onBlur={handleConfirmPasswordBlur} type="password" name="confirm-password" className='md:w-96 w-80 h-11 pl-5 rounded bg-slate-300' id="password" placeholder='Confirm Password' />
                        </div>

                        <p className='text-red-600'>{error?.message}</p>

                        <div className="input-group  ml-7 md:ml-0">
                            <input type="submit" className="text-xl bg-slate-300 md:w-96 w-80 xs:w-24 h-11 rounded cursor-pointer mt-3" value="Login" required />
                        </div>
                    </form>


                    <div className="social-login">
                        <div className='md:w-96 w-80 md:mx-auto'>
                            <div className="input-group mb-5 mt-5 ml-7 md:ml-0">
                                <span className='text-center inline-block md:flex w-80 mx-auto'><p>New to Budget Bazar ?</p> <Link className=' text-indigo-600' to={'/signup'}>Create New Account</Link></span>
                            </div>
                        </div>

                        <div className="md:w-96 md:mx-auto w-80 mx-auto mt-5 flex justify-center items-center md:pl-8 pl-12">
                            <div className='flex-grow border-t border-gray-400 mr-7 md:mr-5'></div>
                            <p>or</p>
                            <div className='flex-grow border-t border-gray-400 mr-7 md:ml-5'></div>
                        </div>

                        <div className="md:w-96 md:mx-auto w-80 mt-5">
                            <button onClick={handleSIgnInWithGoogle} className="h-11 md:w-96 w-80 md:mx-auto mx-7 bg-indigo-200 rounded cursor-pointer flex justify-center items-center">
                                <img className='w-10 mr-2' src={googleLogo} alt="" />
                                Continue With Google
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>


    );
};

export default SignUp;