import { useForm } from '@formspree/react';
import React from 'react';
import { toast, Toaster } from 'react-hot-toast';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { Typewriter } from 'react-simple-typewriter';
// import Typewriter from 'typewriter-effect/dist/core';
import Amit from '../../Asserts/image/amit.jpg'

// import { useForm, ValidationError } from '@formspree/react';

const Hero = () => {
 
    const [state, handleSubmit] = useForm("mlevqzpe");
    if (state.succeeded) {
        toast.success('Successfully sent!')
      }

    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://geniusdevs.com/themeforest/gfolio/v3-two/assets/images/home-bg.jpg")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content p-0 text-center text-neutral-content">
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
                            loop={true}
                            cursor
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        /></p>
                    <div className="social-icon flex justify-center my-3">

                        <i><a href='https://www.facebook.com/profile.php?id=100006098568214' target={'_blank'}><FaFacebookF></FaFacebookF></a></i>
                        <i><a href='https://www.instagram.com/amitpaul111/' target={'_blank'}><FaInstagram></FaInstagram></a> </i>
                        <i><a href='https://www.linkedin.com/in/amit-paul-3a3693259/' target={'_blank'}> <FaLinkedinIn></FaLinkedinIn></a></i>
                        <i><a href='https://twitter.com/AmitPaultl' target={'_blank'}> <FaTwitter></FaTwitter></a></i>
                        <i><a href='https://web.whatsapp.com/' target={'_blank'}><FaWhatsapp></FaWhatsapp></a> </i>
                        
                    </div>
                    <label htmlFor="my-modal-3" className="btn btn-color">CONTACT ME</label>


                </div>
            </div>



            {/* The button to open modal */}

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={handleSubmit}>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Name" className="input input-bordered text-inheritt" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Email" className="input input-bordered text-inheritt" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Comment or Message</span>
                            </label>
                            <textarea className="input input-bordered text-inheritt" name="text" id="" cols="30" rows="10"></textarea>
                        </div>
                        <div className='my-3 text-center'>

                            <button type="submit" disabled={state.submitting} className="btn btn-color ">SUBMIT</button>
                        </div>
                    </form>
                </div>
            </div>




            <Toaster />

        </div>
    );
};

export default Hero;