import logo from '../../images/budget-bazar.png';
import React, { useEffect, useState } from 'react';
import './Header.css';
import { Link, useNavigate } from 'react-router-dom';
import CoustomLink from '../CoustomLink/CoustomLink';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';

const Header = () => {

    const [user] = useAuthState(auth);
    const [signOut] = useSignOut(auth);
    const navigate = useNavigate();

    const handleSignOut = () => {
        signOut();
        navigate('/login');
    }

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    // const [isSticky, setSticky] = useState(false);
    const [toggleIconX, setToggleIconX] = useState(false);

    const handleToggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        setToggleIconX(!toggleIconX);
    }

    return (
        <header className="w-full">
            <nav
                className={`py-4 md:px-12 px-4 `} style={{ 'backgroundColor': '#2C3532' }}
            >
                <div className="flex items-center justify-between">
                    <div className="text-white font-bold text-lg cursor-pointer">
                        <Link to={'/'}>
                            <img src={logo} alt="" className="h-10 md:w-full w-24" />
                        </Link>
                    </div>

                    {/* for larger device */}
                    <div className="lg:flex items-center gap-3 hidden text-body">
                        <CoustomLink to={'/'} className="block text-gray-400 hover:text-white py-2 px-4 cursor-pointer"> Shop </CoustomLink>
                        <CoustomLink to={'/orders'} className="block text-gray-400 hover:text-white py-2 px-4 cursor-pointer"> Orders</CoustomLink>
                        <CoustomLink to={'/inventory'} className="block text-gray-400 hover:text-white py-2 px-4 cursor-pointer">Inventory</CoustomLink>
                        <CoustomLink to={'/about'} className="block text-gray-400 hover:text-white py-2 px-4 cursor-pointer">About</CoustomLink>


                    </div>

                    {/* contact me btn */}
                    <div className="lg:block hidden">
                        <button className="btnOutline">
                            {
                                user?.uid
                                    ?
                                    <button onClick={handleSignOut} className='outLine' >SignOut</button>
                                    :
                                    <CoustomLink to={'/login'} className="block text-gray-400 hover:text-white py-2 px-4 cursor-pointer">Login</CoustomLink>
                            }
                        </button>
                    </div>

                    {/* btn for small devices */}
                    <button onClick={handleToggleMenu} className="lg:hidden text-body text-3xl">
                        {toggleIconX ? <FontAwesomeIcon icon={faX} /> : <FontAwesomeIcon icon={faBars} />}

                    </button>
                </div>

                {/* Mobile menu */}
                {isMenuOpen && (
                    <div className="mt-4 bg-body p-4 rounded-lg text-black">
                        <CoustomLink to={'/'} className="block text-gray-400 hover:text-white py-2 px-4 cursor-pointer"> Shop </CoustomLink>
                        <CoustomLink to={'/orders'} className="block text-gray-400 hover:text-white py-2 px-4 cursor-pointer"> Orders</CoustomLink>
                        <CoustomLink to={'/inventory'} className="block text-gray-400 hover:text-white py-2 px-4 cursor-pointer">Inventory</CoustomLink>
                        <CoustomLink to={'/about'} className="block text-gray-400 hover:text-white py-2 px-4 cursor-pointer">About</CoustomLink>
                        <CoustomLink to={'/about'} className="block text-gray-400 hover:text-white py-2 px-4 cursor-pointer">About</CoustomLink>

                        <button className="btnOutline">
                            {
                                user?.uid
                                    ?
                                    <button onClick={handleSignOut} className='outLine'>SignOut</button>
                                    :
                                    <CoustomLink to={'/login'} className="block text-gray-400 hover:text-white py-2 px-4 cursor-pointer">Login</CoustomLink>
                            }
                        </button>

                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;