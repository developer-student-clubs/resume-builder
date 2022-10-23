import React from 'react'
import sideimage from '../../images/signin.png'
import {Link} from 'react-router-dom'
import './signin.css'
const Signin = () => {
    return (
        <div className="signin-container">
            <img src={sideimage} className='signin-img' alt="sigin" />
            <div className="signin-right">
                <div className="signin-title">
                    <Link to='/signup'><button className="btn">Register</button></Link>
                    <button className="btn-green">Sign In</button>
                </div>

                <input className='input' type="email" placeholder="Email" />
                <input className='input' type="password" placeholder="Password" />
                <a href="#" style={{color:'blue',textDecoration:'none'}}>Request password change</a>
                <button className='submit'>Submit</button>

            </div>
        </div>
    )
}

export default Signin
