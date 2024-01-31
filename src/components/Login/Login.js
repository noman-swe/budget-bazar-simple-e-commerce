import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import googleLogo from '../../images/kisspng-google-logo-5b02bbe1d5c6e0.2384399715269058258756-removebg-preview.png';
import './Login.css';
import { useAuthState, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user] = useAuthState(auth);

    const [signInWithEmailAndPassword, loader, error] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const location = useLocation();

    // for google sign in
    const [signInWithGoogle] = useSignInWithGoogle(auth);

    let from = location?.state?.from?.pathname || '/';

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }

    if (user) {
        navigate(from, { replace: true });
    }

    const handleCreateUser = event => {
        event.preventDefault();

        signInWithEmailAndPassword(email, password);
    }

    const handleSIgnInWithGoogle = () => {
        signInWithGoogle();
    }

    return (
        <div className='form-container border rounded-lg box-border mx-auto mt-20 mb-20 flex justify-center'>
            <div className="wrapper mb-11">
                <h2 className='text-4xl text-center mt-7 text-tomato font-semibold mb-7'>Login</h2>

                <form onSubmit={handleCreateUser}>
                    <div className=" input-group mb-5">
                        <label className='block text-xl ml-1 ' htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" className=" text-2xl h-12 border rounded text-slate-800 bg-slate-100" name='email' id='email' autoComplete='on' required />
                    </div>
                    <div className="input-group mb-5">
                        <label className='block text-xl ml-1 ' htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" className=" text-2xl h-12 border rounded text-slate-800 bg-slate-100" name='password' id='password' autoComplete='on' required />
                    </div>

                    <p className='text-red-600'>{error?.message}</p>

                    <input type="submit" className="form-submit text-xl border rounded-md btn-bg-color cursor-pointer mt-5 duration-500" value="Login" required />
                </form>

                <div className="link-signup mt-2">
                    <p className='text-center'>New to Budget Bazar ? <Link className=' text-tomato' to={'/signup'}>Create New Account</Link></p>
                </div>

                <div className="alternative-signin mt-7 flex justify-center items-center">
                    <div className='flex-grow border-t border-gray-400  mr-5'></div>
                    <p>or</p>
                    <div className='flex-grow border-t border-gray-400 ml-5'></div>
                </div>

                <button onClick={handleSIgnInWithGoogle} className="form-submit text-xl border rounded-md btn-bg-color cursor-pointer mt-5 flex justify-center items-center duration-500">
                    <img className='w-10 mr-2' src={googleLogo} alt="" />
                    Continue With Google
                </button>

            </div>
        </div>
    );
};

export default Login;