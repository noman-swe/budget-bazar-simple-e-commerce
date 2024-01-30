import React from 'react';
import { Link } from 'react-router-dom';
import googleLogo from '../../images/kisspng-google-logo-5b02bbe1d5c6e0.2384399715269058258756-removebg-preview.png';

const SignUp = () => {
    return (
        <div className='form-container border rounded-lg box-border mx-auto mt-20 mb-20 flex justify-center'>
            <div className="wrapper mb-11">
                <h2 className='text-4xl text-center mt-7 text-tomato font-semibold mb-7'>Sign Up</h2>

                <form >
                    <div className=" input-group mb-5">
                        <label className='block text-xl ml-1 ' htmlFor="name">Name</label>
                        <input type="text" class=" text-2xl h-12 border rounded text-slate-800 bg-slate-100" name='name' id='name' autoComplete='on' required />
                    </div>
                    <div className=" input-group mb-5">
                        <label className='block text-xl ml-1 ' htmlFor="email">Email</label>
                        <input type="email" class=" text-2xl h-12 border rounded text-slate-800 bg-slate-100" name='email' id='email' autoComplete='on' required />
                    </div>
                    <div className="input-group mb-5">
                        <label className='block text-xl ml-1 ' htmlFor="password">Password</label>
                        <input type="password" class=" text-2xl h-12 border rounded text-slate-800 bg-slate-100" name='password' id='password' autoComplete='on' required />
                    </div>
                    <div className="input-group mb-5">
                        <label className='block text-xl ml-1 ' htmlFor="confirm-password">Confirm Password</label>
                        <input type="password" class=" text-2xl h-12 border rounded text-slate-800 bg-slate-100 duration-500" name='confirm-password' id='confirm-password' autoComplete='on' required />
                    </div>

                    {/* submit button */}
                    <input type="submit" class="form-submit text-xl border rounded-md btn-bg-color cursor-pointer mt-5 duration-500" value="Sign Up" required />
                </form>

                <div className="link-signup mt-2">
                    <p className='text-center'>Already have an account? <Link className=' text-tomato' to={'/login'}>Login Here</Link></p>
                </div>

                <div className="alternative-signin mt-7 flex justify-center items-center">
                    <div className='flex-grow border-t border-gray-400  mr-5'></div>
                    <p>or</p>
                    <div className='flex-grow border-t border-gray-400 ml-5'></div>
                </div>

                <button class="form-submit text-xl border rounded-md btn-bg-color cursor-pointer mt-5 flex justify-center items-center duration-500">
                    <img className='w-10 mr-2' src={googleLogo} alt="" />
                    Continue With Google
                </button>

            </div>
        </div>
    );
};

export default SignUp;