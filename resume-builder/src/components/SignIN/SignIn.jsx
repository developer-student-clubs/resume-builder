import React from 'react'
import sideImage from '../../images/signin.png'
import {Link} from 'react-router-dom'
import './signin.css'
import classes from "../SignUP/Signup.module.css";

const SignIn = ({onModeChange}) => {
    return (
        <div className="container flex rounded-8px p-0 no-max-width bg-white height-fit-content">
            <img src={sideImage} alt="Loading" className={`no-stretch full-height block ${classes.sideImageContainer}`}/>
            <div className="flex flex-center flex-column gap-16px p-16px flex-none" >
                <div className="flex full-width p-4px bg-translucent-gray rounded-max">
                    <button className="btn btn-green flex-1 rounded-max" onClick={() => onModeChange("signUp")}>Register</button>
                    <button className="btn flex-1 rounded-max" onClick={() => onModeChange("signIn")}>Sign In</button>
                </div>

                <input className='input' type="email" placeholder="Email"/>
                <input className='input' type="password" placeholder="Password"/>
                <a href="#" style={{color: 'blue', textDecoration: 'none'}}>Request password change</a>
                <button className='submit'>Submit</button>
            </div>
        </div>
    )
}

export default SignIn;
