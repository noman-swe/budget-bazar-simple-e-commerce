import silyLogo from '../../images/budget-bazar.png';
import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header w-full h-20 flex justify-between items-center bg-slate-200'>
            <div className="logo ml-32">
                <img className='h-14' src={silyLogo} alt="" />
            </div>

            <div className="header-info mr-32 decoration-none">
                <Link to={'/'} >Order</Link>
                <Link to={'/shop'} >Order Review</Link>
                <Link to={'/product'} >Manage Inventory</Link>
                <Link to={'/login'}>Login</Link>
            </div>
        </div>
    );
};

export default Header;