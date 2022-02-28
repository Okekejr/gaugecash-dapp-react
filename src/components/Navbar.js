import React, { useState, Fragment } from 'react'

import { Link } from 'react-router-dom';
import linkedin from '../static/linkedin.svg';
import logoImage from '../static/Group.svg';
import github from '../static/github.svg';
import medium from '../static/medium.svg';
import twitter from '../static/twitter.svg';
import telegram from '../static/telegram.svg';
import youtube from '../static/Youtube.svg';

import '../styles/navbar.css';

export default function Navbar() {
    
    const [isMobile, setIsMobile] = useState(false);
    return (
            <div>
                <nav className='navbar'>
                    <a href="/" className='logo'><img className='logoImage' src={logoImage} alt="Companylogo" /></a>
                        <ul className= {isMobile ? "nav-links-mobile" : "nav-links"}
                        onClick={() => setIsMobile (false)}
                        >
                            <li className='first'><Link className='page' to="/">Home</Link></li>
                            <li><Link className='page' to="/about">About</Link></li>
                            <li><Link className='page' to="/whitepaper">Whitepaper</Link></li>
                        </ul>
                        <div>
                            <a href="https://www.linkedin.com/company/gaugecash/" rel="noopener noreferrer" target="_blank"><img class="footerIcon" src={linkedin} alt='linkedin icon'/></a>
                            <a href="https://github.com/gaugecash" rel="noopener noreferrer" target="_blank"><img class="footerIcon" src={github} alt='github icon' /></a>
                            <a href="https://gaugecash.medium.com/" rel="noopener noreferrer" target="_blank"><img class="footerIcon" src={medium} alt='medium icon' /></a>
                            <a href="https://twitter.com/GaugeCash" rel="noopener noreferrer" target="_blank"><img class="footerIcon" src={twitter} alt='twitter icon' /></a>
                            <a href="https://t.me/gaugecashchat" rel="noopener noreferrer" target="_blank"><img class="footerIcon" src={telegram} alt='telegram icon' /></a>
                            <a href="https://www.youtube.com/channel/UCt8bDtc_D3R6NZwEmNWkKLg" rel="noopener noreferrer" target="_blank"><img class="footerIcon" src={youtube} alt='youtube icon' /></a>
                        </div>
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
