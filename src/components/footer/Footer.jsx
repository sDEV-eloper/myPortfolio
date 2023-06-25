import React from 'react'
import './footer.scss'
// import Section from '../shared/section/section'
import Logo from '../../images/logo2.png'
import Github from '../../images/github.png'
import LinkedIn from '../../images/linkedin.png'
import { scrollToSection } from '../utils/helper'

const Footer = () => {
    return (
        <div
            // background="light"
            className="footer"
        >
            <div className="footer-content-wrapper">

                <div className="footer-logo">
                    <img
                        src={Logo}
                        alt="suraj portfolio"
                        className='logo'
                    />
                </div>
                <ul className="footer-menu-items">
                       <li
                        className="footer-menu-item"
                        onClick={() => scrollToSection("home")}
                    >
                        Home
                    </li>
                    <li
                        className="footer-menu-item"
                        onClick={() => scrollToSection("skills")}
                    >
                        Skills
                    </li>
                    <li
                        className="footer-menu-item"
                        onClick={() => scrollToSection("portfolio")}
                    >
                        Portfolio
                    </li>
                    <li
                        className="footer-menu-item"
                        onClick={() => scrollToSection("contact")}
                    >
                        Contact me
                    </li>
                </ul>
                <div className="social-icons">
                
             
                    <div className="social-icon">
                        <a href="https://www.linkedin.com/in/surajsingh09/" target='blank'>
                        <img src={LinkedIn} alt="" /><span>LinkedIn</span>
                        </a>
                    </div>
                    <div className="social-icon">
                        <a href="https://github.com/sDEV-eloper" target='blank'>
                        <img src={Github} alt="" /><span>Github</span>
                        </a>
                    </div>
                
                
                </div>
                <div className="bottom-bar">
                    <div className="copyright-text">
                        Copyright &#169;  Suraj Singh | Phn: +91 9528394139 | Mail: thisissurajdev@gmail.com | All Rights Reserved
                    </div>
                </div>
            </div>
            </div>
    
    );
};

export default Footer;

