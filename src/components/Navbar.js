import React, { useState, Fragment } from 'react'

import { Link } from 'react-router-dom';

import '../styles/navbar.css';

export default function Navbar() {
    
    const [isMobile, setIsMobile] = useState(false);
    return (
            <div>
                <nav className='navbar'>
                        <ul className= {isMobile ? "nav-links-mobile" : "nav-links"}
                        onClick={() => setIsMobile (false)}
                        >
                            <li className='first'><Link className='page' to="/">Home</Link></li>
                            <li><Link className='page' to="/about">About</Link></li>
                            <li><Link className='page' to="/whitepaper">Whitepaper</Link></li>
                        </ul>
                    <button className='mobile-menu-icon'
                    onClick={() => setIsMobile(!isMobile)}
                    >
                        {isMobile ? ( 
                            <i className='fas fa-times'></i> 
                            ) : ( 
                            <i className='fas fa-bars'></i> 
                            )}
                    </button>
                </nav>
        </div>
    )
}
