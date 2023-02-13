import React, { useContext, useEffect, useRef, useState } from 'react';
import Hero from './Hero';
import './Home.css'
import aboutme from '../../Asserts/image/depositphotos_42748913-stock-photo-about-me.jpg'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaWhatsapp } from "react-icons/fa";

import car from '../../Asserts/image/car.jpg'
import yoga from '../../Asserts/image/yoga-meditation-concept-woman-silhouette-healthy-meditating-pose-back-view-sun-light-rays-56996585.jpg'
import education from '../../Asserts/image/elearning-getty.jpg'
import project from '../../Asserts/image/005-target.png'
import user from '../../Asserts/image/002-medical-mask.png'
import review from '../../Asserts/image/053-success-1.png'
import team from '../../Asserts/image/045-hacker.png'
import developer from '../../Asserts/image/code-1.png'
import designer from '../../Asserts/image/cretictor.png'
import optimized from '../../Asserts/image/optrocket.png'
import react from '../../Asserts/image/React.jpg'
import tailwind from '../../Asserts/image/tailwind-css.jpg'
import mongodb from '../../Asserts/image/mongodb.jpg'
import node from '../../Asserts/image/node.jpg'
import Swiper from 'react-id-swiper';
import SimpleSwiper from '../Slider';
import { CiLocationOn } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { toast, Toaster } from 'react-hot-toast';
import { useForm } from '@formspree/react';
import About from './About';
import Skill from './Skill';
import Project from '../Project/Project';
import Loding from '../../Loding/Loding';
import { AuthProvider } from '../../Context/AuthContext';

const Home = () => {
    const [state, handleSubmit] = useForm("mlevqzpe");
    if (state.succeeded) {
        toast.success('Successfully sent!')
    }

           // context
           const { loading, setLoading,  } = useContext(AuthProvider);
           const [project, setProject] = useState()
       
           useEffect(() => {
               fetch('https://server-three-fawn.vercel.app/project')
                   .then(req => req.json())
                   .then(data => setProject(data?.data))
           },[])
       
           if (project === false) {
               setLoading(true)
           } else {
               setLoading(false)
           }
       
           if(loading){
               return <Loding></Loding>
           }
    
           console.log(project);
       
           const slicesData = project?.slice(0,3)
           console.log(slicesData);


    return (
        <div >
            <Hero></Hero>
            {/* set */}



            {/* about me  */}
            <About></About>

            <div className='container mx-auto'>
                <div className="about-content ">
                    <div className="personal-info">
                        <ul className='md:flex'>
                            <li>
                                <span><label>Birthday:</label> 9-11-199</span>
                            </li>

                            <li>
                                <span><label>City:</label> Jessore, Khunla, Bangladesh</span>
                            </li>
                            <li>
                                <span><label>Interests:</label> Blockchain</span>
                            </li>
                            <li>
                                <span><label>Study:</label> Government Brajalal College, Khulna</span>
                            </li>
                            <li>
                                <span><label>Degree:</label> Master</span>
                            </li>

                            <li>
                                <span><label>Mail:</label> <a href="amitpaul4550@gmail.com">amitkpau2@gmail.com</a></span>
                            </li>
                            <li>
                                <span><label>Phone:</label> <a href="#">+8801941231211</a></span>
                            </li>
                            <li>
                                <span><label>Twitter:</label> <a href="https://twitter.com/AmitPaultl">@AmitPaultl</a></span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* my service */}
            <div className="py-24">
                <h2 className="title text-center text-5xl font-bold py-7 mb-9">
                    My <span className="color">Service</span>
                    <span className="bg-text">Service</span>
                </h2>
                <div className="container mx-auto">
                    <div className=" gap-8  grid  md:grid-cols-3 sm:grid-cols-1">

                        <div className="card w-full shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={developer} alt="Shoes" className=" w-32" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="text-2xl font-extrabold">	Web Development</h2>

                            </div>
                        </div>
                        <div className="card w-full shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={designer} alt="Shoes" className=" w-32" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="text-2xl font-extrabold">Creative design</h2>

                            </div>
                        </div>
                        <div className="card w-full shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={optimized} alt="Shoes" className=" w-32" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="text-2xl font-extrabold">Fast & Optimized</h2>

                            </div>
                        </div>
                        <div className="card w-full shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={project} alt="Shoes" className=" w-32" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="text-2xl font-extrabold">	Pixel Perfect</h2>

                            </div>
                        </div>
                        <div className="card w-full shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={team} alt="Shoes" className=" w-32" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="text-2xl font-extrabold">Awesome Idea</h2>

                            </div>
                        </div>
                        <div className="card w-full shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={review} alt="Shoes" className=" w-32" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="text-2xl font-extrabold">High Quality</h2>

                            </div>
                        </div>


                    </div>

                </div>
            </div>
            {/* my skills */}
            <Skill></Skill>

            {/* my project */}
            <div className="py-5">
                <h2 className="title text-center text-5xl font-bold py-7 mb-9">
                    My <span className="color">Project</span>
                    <span className="bg-text">Project</span>
                </h2>
                <div className="container mx-auto">
                    <div className=" gap-8  grid  md:grid-cols-3 sm:grid-cols-1">

                        
                        {
                            slicesData?.map(project => <Project key={project._id} data={project}></Project>)
                        }


                    </div>
                    <div className="buttom-area">
                        <Link to={'/project'}>View All</Link>
                    </div>
                </div>
            </div>
            {/* blog area */}



            {/* concat area */}

            <div className=' my-24'>
                <h2 className="title text-center text-5xl font-bold py-7 mb-9">
                    Concat <span className="color">Me</span>
                    <span className="bg-text">Concat</span>
                </h2>
                <div className="container mx-auto">





                    <div className="hero-content flex-col lg:flex-row ">
                        <div className="card w-full ">
                            <form onSubmit={handleSubmit}>


                                <div className="contact-from">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-white">Name</span>
                                        </label>
                                        <input type="text" name='name' placeholder="Name" className="input text-inheritt input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-white">Email</span>
                                        </label>
                                        <input type="email" name='email' placeholder="Email" className="input text-inheritt input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-white">Subject</span>
                                        </label>
                                        <input type="text" name='subject' placeholder="subject" className="input text-inheritt input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-white">Message</span>
                                        </label>
                                        <textarea type="text" name='text' placeholder="Message" className="input text-inheritt h-60 input-bordered" />
                                    </div>
                                    <div className="text-center my-5">

                                        <button className="btn btn-color">Submit</button>
                                    </div>
                                </div>

                            </form>
                        </div>
                        <div className='w-1/2 md:ml-16 py-6 text-2xl leading-10'>


                            <p> <strong>Location: </strong> <span className='text-xl'>Jashore Khulna Bangladesh</span></p>
                            <p>  <strong>Phone:</strong>  <span className='text-xl'>+8801941231211</span></p>
                            <p>  <strong>Email:</strong>  <span className='text-xl'>amitpaultl@gmail.com</span></p>
                            <div className="social-icon flex justify-center my-3">

                                <i><a href='https://www.facebook.com/profile.php?id=100006098568214' target={'_blank'}><FaFacebookF></FaFacebookF></a></i>
                                <i><a href='https://www.instagram.com/amitpaul111/' target={'_blank'}><FaInstagram></FaInstagram></a> </i>

                                <i><a href='https://www.linkedin.com/in/amit-paul-3a3693259/' target={'_blank'}> <FaLinkedinIn></FaLinkedinIn></a></i>
                                <i><a href='https://twitter.com/AmitPaultl' target={'_blank'}> <FaTwitter></FaTwitter></a></i>
                                <i><a href='https://web.whatsapp.com/' target={'_blank'}><FaWhatsapp></FaWhatsapp></a> </i>


                            </div>

                        </div>
                    </div>



                </div>
            </div>
            <section className="relative">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1">
                        <div>
                            <div className="mapouter">
                                <div className="gmap_canvas rounded-xl">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d261538.06262279715!2d89.16399421712215!3d22.85985491569819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff73d602120427%3A0x4ebc0662266c0c9a!2sPanjia%20Secondary%20School!5e0!3m2!1sen!2sbd!4v1676211730621!5m2!1sen!2sbd" width='100%' height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                    <a href="https://www.embedgooglemap.net/blog/divi-discount-code-elegant-themes-coupon"></a><br />



                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Toaster />
        </div>
    );
};

export default Home;