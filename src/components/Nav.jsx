import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/components/Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
        <div className='header'>
            <nav>
                <p className='logo'>Logo</p>
                <div className={`burger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className={`nav-menu ${isOpen ? 'open' : ''}`}>
                    <ul>
                        <li className={location.pathname === '/' ? 'active' : ''}>
                            <Link to="/" onClick={toggleMenu}>Home</Link>
                        </li>
                        <li className={location.pathname === '/football-americain' ? 'active' : ''}>
                            <Link to="/football-americain" onClick={toggleMenu}>Football Américain</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
        </>
    );
}

export default Navbar;
