import silyLogo from '../../images/budget-bazar.png';
import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header w-full h-20 flex justify-between items-center ' style={{ 'backgroundColor': '#2C3532' }}>
            <div className="logo ml-32">
                <img className='h-14' src={silyLogo} alt="" />
            </div>

            <div className="header-info mr-32 decoration-none">
                <Link to={'/'} >Shop</Link>
                <Link to={'/orders'} >Orders</Link>
                <Link to={'/inventory'} >Inventory</Link>
                <Link to={'/about'} >About</Link>
                <Link to={'/login'}>Login</Link>
            </div>
        </div>
    );
};

export default Header;