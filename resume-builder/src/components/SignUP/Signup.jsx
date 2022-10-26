import image from "../../images/signup.png"
import google from "../../images/google.png"
import classes from "./Signup.module.css"
import {Link} from 'react-router-dom'
import React from "react";

const Signup = ({onModeChange}) => {
    return <div className="container flex rounded-8px p-0 no-max-width bg-white height-fit-content">
        <img src={image} alt="Loading" className={`no-stretch full-height block ${classes.sideImageContainer}`}/>
        <div className="flex flex-center flex-column gap-16px p-16px flex-none">
            <div className="flex full-width p-4px bg-translucent-gray rounded-max">
                <button className="btn flex-1 rounded-max" onClick={() => onModeChange("signUp")}>Register</button>
                <button className="btn btn-green flex-1 rounded-max" onClick={() => onModeChange("signIn")}>Sign In</button>
            </div>
            <form className="full-width flex-column gap-16px">
                <div className="details gap-8px full-width">
                    <div className="flex full-width gap-8px">
                        <input type="text" placeholder="Given Name" className="p-8px bg-translucent-gray rounded-8px border-0"/>
                        <input type="text" placeholder="Family Name" className="p-8px bg-translucent-gray rounded-8px border-0"/>
                    </div>
                    <div className="email full-width">
                        <input type="email" placeholder="Email" className="p-8px full-width bg-translucent-gray rounded-8px border-0"/>
                    </div>
                </div>
                <div className="checkbox ">
                    <input type="checkbox"/> <span>I consent to the Terms & Privacy Policy</span>
                </div>
                <div className="sign flex-column gap-8px">
                    <button className="btn-green p-8px rounded-max full-width">Register Now</button>
                    <span>Or sign up with:</span>
                    <button className="btn-green p-8px rounded-max full-width flex-center"><img src={google} alt="Loading" width="22px" height="22px"/><span className="hid">-</span> Google
                    </button>
                    <p className="full-width font-small text-center m-0">A password can be set after you sign up if you prefer. <br/>Meanwhile,
                        your information is secure and private</p>
                </div>
            </form>
        </div>
    </div>;
}

export default Signup;