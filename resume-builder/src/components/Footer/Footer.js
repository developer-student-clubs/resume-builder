import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin} from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='icon-con'>
                <FaFacebook size={40} className='icon'/>
                <FaLinkedin size={40} className='icon'/>
                <FaTwitter size={40} className='icon'/>
                <FaInstagram size={40} className='icon'/>
            </div>
            <div className='text'>
                <div>
                    <p><b>Resu.me</b></p>
                    <li>Homepage</li>
                    <li>Resume</li>
                    <li>Templates</li>
                    <li>CV Templates</li>
                    <li>Cover Letters</li>
                </div>
                <div>
                <p><b>Learn</b></p>
                    <li>Career</li>
                    <li>Blog</li>
                    <li>How to Write a Resume</li>
                    <li>How to Write CV</li>
                    <li>How to Write a Cover Letter</li>
                </div>
                <div>
                <p><b>Other</b></p>
                    <li>Pricing</li>
                    <li>About Us</li>
                    <li>E-book: How to get a job in 2022</li>
                    <li>Media Kit</li>
                    <li>Help Center</li>
                </div>
                <div>
                <p><b>Legal/Contact</b></p>
                    <li>Terms of Use</li>
                    <li>Privacy Policy</li>
                    <li>Cookie Policy</li>
                    <li>contact@novoresume.com</li>
                </div>
            </div>
        </div>
    );
}

export default Footer;