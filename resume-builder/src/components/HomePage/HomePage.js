import React from 'react'
import banner from '../../images/owldalf.png'
import {Link} from 'react-router-dom'
import './HomePage.css'
import AuthLink from "../AuthLink/AuthLink";

const HomePage = () => {
    return (
        <div className='HomePage'>
            <img src={banner} alt="bg" className='home-banner'/>
            <div className='home-content'>
                <p className='title'>"You shall not pass" without authentication</p>
                <span className='subtitle'>Unless you defeat Owldalf by</span>
            </div>
            <div className='btns-container'>
                <AuthLink initialMode={"signUp"} trigger={<button className="btn-signup">
                    Signing up for free
                </button>}></AuthLink>
                <AuthLink initialMode={"signIn"} trigger={<button className="btn-signin">
                    Signing in
                </button>}></AuthLink>
            </div>
        </div>
    )
}

export default HomePage
