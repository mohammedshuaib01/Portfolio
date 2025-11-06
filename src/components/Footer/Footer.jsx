import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className='footer'>
            <div className='footer-container'>

                <div className='footer-section'>
                    <h2 className='footer-title'>SHUAIB.</h2>
                    <p>
                        Passionate Web Developer crafting modern and responsive websites.
                        Focused on clean code, creativity, and performance-driven solutions.
                    </p>
                </div>



                <div className='footer-section'>
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#">About Me</a></li>
                        <li><a href="#">Skills</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>

                <div className='footer-section'>
                    <h3>Services</h3>
                    <ul>
                        <li><a href="#">Web Development</a></li>
                        <li><a href="#">E-Commerce</a></li>
                        <li><a href="#">IOT</a></li>
                    </ul>
                </div>

            </div>

            <div className='footer-copyright'>
                <p>© {new Date().getFullYear()} Mohammed Shuaib. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
