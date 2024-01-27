import silyLogo from '../../images/budget-bazar.png';
import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import CoustomLink from '../CoustomLink/CoustomLink';

const Header = () => {
    return (
        <div className='header w-full h-20 flex justify-between items-center ' style={{ 'backgroundColor': '#2C3532' }}>
            <div className="logo ml-32">
                <img className='h-14' src={silyLogo} alt="" />
            </div>

            <div className="header-info mr-32 decoration-none flex">
                <CoustomLink to={'/'} >Shop</CoustomLink>
                <CoustomLink to={'/orders'} >Orders</CoustomLink>
                <CoustomLink to={'/inventory'} >Inventory</CoustomLink>
                <CoustomLink to={'/about'} >About</CoustomLink>
                <CoustomLink to={'/login'}>Login</CoustomLink>
            </div>
        </div>
    );
};

export default Header;