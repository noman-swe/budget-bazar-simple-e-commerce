import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { Link, useNavigate } from 'react-router-dom';

const SocialLogIn = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();

    let errorElement;
    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }


    if (user ) {
        navigate('/home');
    }
    return (
        <div className="social-login">
            {errorElement}
            <div className='md:w-96 w-80 md:mx-auto'>
                <div className="input-group mb-5 mt-5 ml-7 md:ml-0">
                    <span className='text-center inline-block md:flex w-80 mx-auto'><p>New to Budget Bazar ?</p> <Link className=' text-indigo-600' to={'/signup'}>Create New Account</Link></span>
                </div>
            </div>

            <div className="mt-5 flex justify-center items-center w-80 md:w-96 mx-auto">
                <div className='flex-grow border-t border-gray-400  mr-5'></div>
                <p>or</p>
                <div className='flex-grow border-t border-gray-400 ml-5'></div>
            </div>

            <button onClick={() => signInWithGoogle()} className=" w-80 md:w-96 mx-auto h-11 bg-indigo-200 md:text-xl border rounded cursor-pointer mt-5 flex justify-center items-center">
                {/* <img className='w-10 mr-2' src={googleLogo} alt="" /> */}
                Continue With Google
            </button>

        </div>
    );
};

export default SocialLogIn;