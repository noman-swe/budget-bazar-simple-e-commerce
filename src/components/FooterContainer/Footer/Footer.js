import React from 'react';
import footerLogo from '../../../images/budget-bazar.png';
import './Footer.css';

const Footer = () => {
    const date = new Date();
    let year = date.getFullYear();

    return (
        <footer className='footer bg-black'>
            <div className="wrapper w-full md:px-32 px-4 md:flex md:justify-between" >
                <img src={footerLogo} alt="" className='md:mt-7 mt-0' style={{ height: '30px' }} />
                
                <p className='copyright-text text-gray-200 md:mt-5 mt-0'> E-Budget Bazar <span className=' text-gray-400 block'>Copyright © {year}</span></p>
            </div>
        </footer>
    );
};

export default Footer;