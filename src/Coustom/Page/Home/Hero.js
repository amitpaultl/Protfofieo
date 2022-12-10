import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { Typewriter } from 'react-simple-typewriter';
// import Typewriter from 'typewriter-effect/dist/core';
import Amit from '../../Asserts/image/amit.jpg'

const Hero = () => {
    // new Typewriter('#typewriter', {
    //     strings: ['Hello', 'World'],
    //     autoStart: true,
    // });

    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://geniusdevs.com/themeforest/gfolio/v3-two/assets/images/home-bg.jpg")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">

                    <div className="avatar">
                        <div className=" w-36 mb-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={Amit} />
                        </div>
                    </div>
                    <h1 className="mb-5 text-5xl  font-bold">Amit Kumar Paul</h1>
                    <p className='text-xl font-semibold'> I'm a 
                    <Typewriter
                        words={[' Web developer', ' Web designer', ' Public spanker']}
                        loop= {true}
                        cursor
                        cursorStyle='_'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    /></p>
                    <div className="social-icon flex justify-center my-3">

                        <i><a href='https://www.facebook.com/profile.php?id=100006098568214' target={'_blank'}><FaFacebookF></FaFacebookF></a></i>
                        <i><a href='#' target={'_blank'}><FaInstagram></FaInstagram></a> </i>
                        <i><a href='#' target={'_blank'}> <FaLinkedinIn></FaLinkedinIn></a></i>
                        <i><a href='#' target={'_blank'}> <FaTwitter></FaTwitter></a></i>
                        <i><a href='#' target={'_blank'}><FaWhatsapp></FaWhatsapp></a> </i>

                    </div>
                    <button className="btn btn-color">CONTACT ME</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;