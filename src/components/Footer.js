import React from 'react';
import './../styles/footer.css';

import logo from './../assets/logo.svg';
import facebookIcon from './../assets/icon-facebook.svg';
import twitterIcon from './../assets/icon-twitter.svg';
import pinterestIcon from './../assets/icon-pinterest.svg';
import instagramIcon from './../assets/icon-instagram.svg';


export const Footer = () => {
    return (
        <footer>
            <div>
                <img
                    className="loopstudios_logo_footer" 
                    name="loopstudios_logo" 
                    src={ logo } 
                    alt="Loopstudios logo" />

                <ul className="links">
                    <li><a>About</a></li>
                    <li><a>Careers</a></li>
                    <li><a>Events</a></li>
                    <li><a>Products</a></li>
                    <li><a>Support</a></li>
                </ul>
            </div>

            <div>
                <div className="social_media">
                    <ul className="links">
                        <li><a><img src={ facebookIcon } alt="Facebook" /></a></li>
                        <li><a><img src={ twitterIcon } alt="Twitter" /></a></li>
                        <li><a><img src={ pinterestIcon } alt="Pinterest" /></a></li>
                        <li><a><img src={ instagramIcon } alt="Instagram" /></a></li>
                    </ul>
                </div>
                <p>© 2021 Loopstudios. All rights reserved.</p>
            
                <div className="attribution">
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
                Coded by <a href="#">RafaGari</a>.
                </div>
            </div>
        </footer>
    )
}
