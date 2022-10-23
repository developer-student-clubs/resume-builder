 import image from "../../images/signup.png"
 import google from "../../images/google.png"
 import "./signup.css"
 
 const Signup =()=>{
    return(
        <div className="container">
            <br />
            <div className="left">
                <img src={image} alt="Loading" width="300px" height="400px"/>
            </div>
            <div className="right">
                <div className="s-title">
                    <button className="btn">Sign In</button>
                    <button className="btn-green">Register</button>
                </div>
                <div className="details">
                    <div className="name">
                        <input type="text" placeholder="Given Name"  className="input"/>
                        <input type="text" placeholder="Family Name" className="input"/>
                    </div>
                    <div className="email">
                        <input type="email" placeholder="Email" className="input" />
                    </div>
                </div>
                <div className="checkbox">
                <input type="checkbox" /> <span>I consent to the Terms & Privacy Policy</span>
                </div>
                
                <div className="sign">
                    <button className="reg">Register Now</button><p></p>
                    <p>Or sign Up with:</p>
                    <button className="google"><img src={google} alt="Loading" width="22px" height="22px" gap="3px"/><span className="hid">-</span> Google</button>
                    <p className="short-text">A password can be set after you sign up if you prefer. <br />Meanwhile, your information is secure and private</p>
                </div>
            </div>
        </div>
    )
}

export default Signup;