import React from 'react';
import Hero from './Hero';
import './Home.css'
import aboutme from '../../Asserts/image/depositphotos_42748913-stock-photo-about-me.jpg'
import car from '../../Asserts/image/car.jpg'
import yoga from '../../Asserts/image/yoga-meditation-concept-woman-silhouette-healthy-meditating-pose-back-view-sun-light-rays-56996585.jpg'
import education from '../../Asserts/image/elearning-getty.jpg'

const Home = () => {
    return (
        <div >
            <Hero></Hero>
            {/* about me  */}
            <div className="py-5">
                <h2 class="title text-center text-5xl font-bold py-7">
                    About <span class="color">Me</span>
                    <span class="bg-text">About</span>
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
            {/* my project */}
            <div className="py-5">
                <h2 class="title text-center text-5xl font-bold py-7 mb-9">
                    My <span class="color">Project</span>
                    <span class="bg-text">Project</span>
                </h2>
                <div className="container mx-auto">
                    <div className="flex justify-between">

                        <div className="card card-compact w-96 bg-base-100 shadow-xl">
                            <figure><img src={car} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Car Selling Website</h2>

                                <div className="card-actions justify-between">
                                    <a href='https://cars-63d13.web.app/' target={'_blank'} className="btn btn-primary">Code</a>
                                    <a href='https://github.com/amitpaultl/car-client' target={'_blank'} className="btn btn-primary">Live side</a>
                                </div>
                            </div>
                        </div>
                        <div className="card card-compact w-96 bg-base-100 shadow-xl">
                            <figure><img src={yoga} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Yoga Service Website</h2>

                                <div className="card-actions justify-between">
                                    <a href='https://psychologist-799e7.firebaseapp.com/' className="btn btn-primary">Code</a>
                                    <a href='https://github.com/amitpaultl/psychologist-client1' className="btn btn-primary">Live side</a>
                                </div>
                            </div>
                        </div>
                        <div className="card card-compact w-96 bg-base-100 shadow-xl">
                            <figure><img src={education} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">E-education Website</h2>

                                <div className="card-actions justify-between">
                                    <a target={'_blank'} href='https://github.com/amitpaultl/e-school' className="btn btn-primary">Code</a>
                                    <a href='https://amitpaultl.github.io/e-school/' target={'_blank'} className="btn btn-primary">Live side</a>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Home;