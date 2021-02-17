import React, { useRef } from 'react';
import './../styles/header.css';

import logo from './../assets/logo.svg';
import hamburgerIcon from './../assets/icon-hamburger.svg';
import closeIcon from './../assets/icon-close.svg';


export const Header = () => {

    const menuLinks = useRef(null);
    const logo_iconGroup = useRef(null)


    const handleClick = () => {
        menuLinks.current.classList.toggle('hide');
        logo_iconGroup.current.classList.toggle('hide');
    }

    const handleCloseClick = () => {
        menuLinks.current.classList.toggle('hide');
        logo_iconGroup.current.classList.toggle('hide');
    }

    return (
        <header>
                <div className="logo_nav">
                    <div>
                        <img src={logo} alt="Loopstudios Logo"/>
                    </div>

                    <nav>
                        <img
                            className="dropdown_icons"
                            src={ hamburgerIcon } 
                            alt="Menu icon"
                            onClick={ handleClick }
                            />
                        <ul 
                            className="links links_header hide"
                            ref={ menuLinks }>
                            <div
                                className="dropdown_icons top_dropdown"
                                ref={ logo_iconGroup } 
                                >
                                <img src={ logo }  alt="Loopstudios logo" />
                                <div>
                                    <img 
                                        className="icons"
                                        src={ closeIcon } 
                                        alt="close" 
                                        onClick={ handleCloseClick }
                                        />
                                </div>
                            </div>
                            <div className="links_dropdown">
                                <li><a href="#">About</a></li>
                                <li><a href="#">Careers</a></li>
                                <li><a href="#">Events</a></li>
                                <li><a href="#">Products</a></li>
                                <li><a href="#">Support</a></li>
                            </div>
                        </ul>
                    </nav>
                </div>
            
        
            <h1>Immersive
                experiences 
                that 
                deliver</h1>
        </header>
    )
}
