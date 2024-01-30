import silyLogo from '../../images/budget-bazar.png';
import React from 'react';
import './Header.css';
import { Link, useNavigate } from 'react-router-dom';
import CoustomLink from '../CoustomLink/CoustomLink';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Header = () => {

    const [user] = useAuthState(auth);
    const [signOut] = useSignOut(auth);
    const navigate = useNavigate();

    const handleSignOut = () => {
        signOut();
        navigate('/login');
    }

    return (
        <div className='header w-full h-20 flex justify-between items-center ' style={{ 'backgroundColor': '#2C3532' }}>
            <div className="logo ml-32">
                <img className='h-14' src={silyLogo} alt="" />
            </div>

            <div className="header-info mr-32 decoration-none text-lg flex">
                <CoustomLink to={'/'} >Shop</CoustomLink>
                <CoustomLink to={'/orders'} >Orders</CoustomLink>
                <CoustomLink to={'/inventory'} >Inventory</CoustomLink>
                <CoustomLink to={'/about'} >About</CoustomLink>
                {
                    user?.uid
                        ?
                        <button onClick={handleSignOut} className='text-white bg-nav-link-hover hover-text-color duration-500 p-1 rounded-xl px-2' >SignOut</button>
                        :
                        <CoustomLink to={'/login'}>Login</CoustomLink>
                }

                
            </div>

        </div>
    );
};

export default Header;