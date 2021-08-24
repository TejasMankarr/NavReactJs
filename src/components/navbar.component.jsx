import React from 'react'
import {FaFacebookSquare,FaInstagramSquare,FaGitSquare} from 'react-icons/fa'
export const Navbar = () => {
    return (
        <>
            <nav className='main-nav'>
                <div className='logo'>
                    <h2>
                        <span>T</span>ejas
                        <span>M</span>ankar
                    </h2>
                </div>
                <div className='menu-link'>
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Services</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>
                </div>
                <div className='social-media'>
                    <ul className='social-media-desktop'>
                        <li><a href='#'><FaFacebookSquare className='facebook'/></a></li>
                        <li><a href='#'><FaInstagramSquare className='instagram'/></a></li>
                        <li><a href='#'><FaGitSquare className='github'/></a></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}
