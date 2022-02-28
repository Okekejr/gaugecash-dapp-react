import React from 'react';
import Navbar from '../components/Navbar';

// CSS import //
import '../styles/global.css';

export default function Layout({ children }) {
    return (
        <div className='layout'>
            <Navbar />
            <div className='content'>
                { children }
            </div>
        </div>
    )
}
