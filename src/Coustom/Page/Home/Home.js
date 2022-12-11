import React, { useRef } from 'react';
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

const Home = () => {
    const [state, handleSubmit] = useForm("mlevqzpe");
    if (state.succeeded) {
        toast.success('Successfully sent!')
      }


    return (
        <div >
            <Hero></Hero>
            {/* about me  */}
            <div className="py-5" id='aboutMe'>
                <h2 className="title text-center text-5xl font-bold py-7">
                    About <span className="color">Me</span>
                    <span className="bg-text">About</span>
                </h2>
                <div className="hero ">
                    <div className="hero-content flex-col lg:flex-row ">
                        <img src={aboutme} className="max-w-sm  rounded-lg shadow-2xl img-me" />
                        <div className='w-1/2 ml-16'>
                            <p className="py-6 text-2xl">Hi I'm Amit kumar paul. I have  over 3+ years of
                                experience in web design and development. Experience in Html,
                                CSS, Javascript, and programming languages. Adept at
                                contributing to the highly collaborative work environment,
                                finding solutions.</p>
                            <a href='https://drive.google.com/file/d/1VZMKvrpseHRBFl_1Uux7kldtAMJdQUwt/view?usp=share_link' target={'_blank'} className="btn btn-color">DOWNLOAD RESUME</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container mx-auto'>
                <div className="about-content ">
                    <div className="personal-info">
                        <ul className='md:flex'>
                            <li>
                                <span><label>Birthday:</label> 01.07.1990</span>
                            </li>
                            <li>
                                <span><label>Age:</label> 28</span>
                            </li>
                            <li>
                                <span><label>City:</label> New York, USA</span>
                            </li>
                            <li>
                                <span><label>Interests:</label> Soccer, UFC</span>
                            </li>
                            <li>
                                <span><label>Study:</label> Chicago University</span>
                            </li>
                            <li>
                                <span><label>Degree:</label> Master</span>
                            </li>
                            <li>
                                <span><label>Website:</label> <a href="#">www.mywebsite.com</a></span>
                            </li>
                            <li>
                                <span><label>Mail:</label> <a href="mailto:example@gmail.com">mymail@gmail.com</a></span>
                            </li>
                            <li>
                                <span><label>Phone:</label> <a href="#">+77 022 177 05 05</a></span>
                            </li>
                            <li>
                                <span><label>Twitter:</label> <a href="#">@myusername</a></span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* achievement */}
            <div className="achievement">
                <div className="container mx-auto">
                    <div className=" gap-4  grid  md:grid-cols-4 sm:grid-cols-1">


                        <div className="card w-full shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={project} alt="Shoes" className=" w-32" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="text-5xl font-extrabold">80+</h2>
                                <p className=' text-xl'>Project Done</p>
                            </div>
                        </div>
                        <div className="card w-full shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={user} alt="Shoes" className=" w-32" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="text-5xl font-extrabold">10+</h2>
                                <p className=' text-xl'>Happy users</p>

                            </div>
                        </div>
                        <div className="card w-full shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={review} alt="Shoes" className=" w-32" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="text-5xl font-extrabold">9</h2>
                                <p className=' text-xl'>Great Reviews</p>

                            </div>
                        </div>
                        <div className="card w-full shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={team} alt="Shoes" className=" w-32" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="text-5xl font-extrabold">50+</h2>
                                <p className=' text-xl'>Support</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* my service */}
            <div className="py-5">
                <h2 className="title text-center text-5xl font-bold py-7 mb-9">
                    My <span className="color">Service</span>
                    <span className="bg-text">Service</span>
                </h2>
                <div className="container mx-auto">
                    <div className=" gap-4  grid  md:grid-cols-3 sm:grid-cols-1">

                        <div className="card w-full shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={developer} alt="Shoes" className=" w-32" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="text-2xl font-extrabold">	Web Development</h2>
                                <p className=' text-xl'>Clarinet accustomed. Would legs of framework officers. We've to morning like a
                                    contracting</p>
                            </div>
                        </div>
                        <div className="card w-full shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={designer} alt="Shoes" className=" w-32" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="text-2xl font-extrabold">Creative design</h2>
                                <p className=' text-xl'>Clarinet accustomed. Would legs of framework officers. We've to morning like a
                                    contracting</p>
                            </div>
                        </div>
                        <div className="card w-full shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={optimized} alt="Shoes" className=" w-32" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="text-2xl font-extrabold">Fast & Optimized</h2>
                                <p className=' text-xl'>Clarinet accustomed. Would legs of framework officers. We've to morning like a
                                    contracting</p>
                            </div>
                        </div>


                    </div>

                </div>
            </div>
            {/* my skills */}
            <div>

                <h2 className="title text-center text-5xl font-bold py-7 mb-9">
                    My <span className="color">Skills</span>
                    <span className="bg-text">Skills</span>
                </h2>
                <div className='text-center text-xl leading-10'>
                    <p><strong>Expert:</strong>  HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, ReactJS, DaisyUI</p>
                    <p><strong>Comfortable:</strong>  NodeJS, Express.js, MongoDB, WordPress</p>
                    <p><strong>Familiar:</strong> Material UI, Redux, Next.js, TypeScript, and React Native</p>
                    <p><strong>Tools:</strong> Git & GitHub, NPM, Firebase, Netlify, Heroku, VS Code, Chrome DevTools, Figma, Adobe XD</p>
                </div>
                <div className="skill-icon md:flex justify-center my-6">
                    <img src={react} alt="" />
                    <img src={tailwind} alt="" />
                    <img src={mongodb} alt="" />
                    <img src={node} alt="" />
                </div>



            </div>
            {/* my project */}
            <div className="py-5">
                <h2 className="title text-center text-5xl font-bold py-7 mb-9">
                    My <span className="color">Project</span>
                    <span className="bg-text">Project</span>
                </h2>
                <div className="container mx-auto">
                    <div className=" gap-4  grid  md:grid-cols-3 sm:grid-cols-1">

                        <div className="card card-compact  w-full  shadow-xl">
                            <figure><img src={car} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Car Selling Website</h2>
                                <p>My web site any on create account user , seller . They  can sell and buy car . </p>
                                <div className="card-actions justify-center">
                                    <Link to='/car' className="btn btn-primary">More</Link>
                                   
                                </div>
                            </div>
                        </div>
                        <div className="card card-compact w-full  shadow-xl">
                            <figure><img src={education} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Training website</h2>
                                <p>In contrast, frameworks are used to build functions. Many developers have written frameworks for Node.js like</p>
                                <div className="card-actions justify-center">
                                    <Link to='/Training' className="btn btn-primary">More</Link>
                                   
                                </div>
                            </div>
                        </div>
                        <div className="card card-compact w-full  shadow-xl">
                            <figure><img src={yoga} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">My Site is yoga service site</h2>
                                <p>Any one user login in my web site. and take service it very easy login system. it is use mongodb databas and jwt token so it is very high security user data</p>
                                <p></p>
                                <div className="card-actions justify-center">
                                    <Link  to='yoga' className="btn btn-primary">More</Link>
                                   
                                </div>
                            </div>
                        </div>


                    </div>

                </div>
            </div>
            {/* blog area */}


            <h2 className="title text-center text-5xl font-bold py-7 mb-9">
                My <span className="color">Blog</span>
                <span className="bg-text">Blog</span>
            </h2>
            <SimpleSwiper></SimpleSwiper>

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
                        <div className='w-1/2 ml-16 py-6 text-2xl leading-10'>


                            <p> <strong>Location: </strong> <span className='text-xl'>Jashore Khulna Bangladesh</span></p>
                            <p>  <strong>Phone:</strong>  <span className='text-xl'>+8801941231211</span></p>
                            <p>  <strong>Email:</strong>  <span className='text-xl'>amitpaultl@gmail.com</span></p>
                            <div className="social-icon flex justify-center my-3">

                                <i><a href='https://www.facebook.com/profile.php?id=100006098568214' target={'_blank'}><FaFacebookF></FaFacebookF></a></i>
                                <i><a href='#' target={'_blank'}><FaInstagram></FaInstagram></a> </i>
                                <i><a href='#' target={'_blank'}> <FaLinkedinIn></FaLinkedinIn></a></i>
                                <i><a href='#' target={'_blank'}> <FaTwitter></FaTwitter></a></i>
                                <i><a href='#' target={'_blank'}><FaWhatsapp></FaWhatsapp></a> </i>

                            </div>

                        </div>
                    </div>



                </div>
            </div>

            <Toaster />
        </div>
    );
};

export default Home;