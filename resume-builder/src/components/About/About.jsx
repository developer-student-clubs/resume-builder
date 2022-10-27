import React from 'react'
import '../About/About.css'
import AboutImg from '../../images/aboutImg.png'
const About = () => {
  return (
    <>
    
    <section className="about" >
        <h1>About Us</h1>
        <div className="aboutusContainer">
            <div className="aboutus">
                <div className="aboutusImage">
                    <img src={AboutImg} alt=""/>
                </div>
                <div className="aboutusContent">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit consequatur id beatae culpa sequi molestiae ea, sunt nulla distinctio quibusdam et sit cumque aut cum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit consequatur id beatae culpa sequi molestiae ea, sunt nulla distinctio quibusdam et sit cumque aut cum.</p>
                    <br/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit consequatur id beatae culpa sequi molestiae ea, sunt nulla distinctio quibusdam et sit cumque aut cum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit consequatur id beatae culpa sequi molestiae ea, sunt nulla distinctio quibusdam et sit cumque aut cum.</p>
                    <br/>
                    <div className="aboutSocial">
                        <ul>
                            <li><i className='bx fb bxl-facebook-square'></i></li>
                            <li><i className='bx ig bxl-instagram-alt' ></i></li>
                            <li><i className='bx tweet bxl-twitter' ></i></li>
                            <li><i className='bx snap bxl-snapchat' ></i></li>
                        </ul>
                    </div>
                    <br/>
            
                </div>
            </div>
        </div>
    </section>
    
    </>
  )
}

export default About