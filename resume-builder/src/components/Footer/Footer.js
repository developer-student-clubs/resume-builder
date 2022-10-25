import React from 'react';
import {
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaLinkedin,
    FaCaretRight
} from 'react-icons/fa';
import footerSections from '../../constants/footer';
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
                {
                    footerSections.map((section) => 
                    <div>
                        <p>{section.header}</p>
                        {
                            section.links.map((link) => 
                            // <a href={link.url} target="_blank" rel="noreferrer">
                            <li>
                                {link.title} 
                                <FaCaretRight fontWeight={100} size={20} className='arrow'/>
                            </li>
                            // </a>
                        )
                        }
                    </div>
                    )
                }
            </div>
        </div>
    );
}

export default Footer;