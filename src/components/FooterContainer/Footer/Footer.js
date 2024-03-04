import React from 'react';
import footerLogo from '../../../images/budget-bazar.png';
// import './Footer.css';

const Footer = () => {
    const date = new Date();
    let year = date.getFullYear();

    return (
        <footer className='bg-black bottom-0 mb-0'>
            <div className="wrapper w-full md:px-32 px-4 py-3 flex justify-between items-center">
                <img src={footerLogo} alt="" className='md:mt-7 mt-0' style={{ height: '30px' }} />

                <p className='copyright-text text-gray-200 text-sm md:mt-5 mt-0'> E-Budget Bazar <span className='text-gray-400 block'>Copyright © {year}</span></p>
            </div>
        </footer>
    );
};

export default Footer;