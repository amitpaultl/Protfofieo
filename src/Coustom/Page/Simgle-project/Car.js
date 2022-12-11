import React from 'react';
import Carousel from 'nuka-carousel/lib/carousel';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import car1 from '../../Asserts/car/Screenshot_41.png'
import car2 from '../../Asserts/car/Screenshot_42.png'
import car3 from '../../Asserts/car/Screenshot_43.png'
import car4 from '../../Asserts/car/Screenshot_44.png'
import './Car.css'

const Car = () => {
    return (
        <div className=' py-24'>
            <div className="single-page">
                <div className="container mx-auto">
                    <div className=" gap-4  grid  md:grid-cols-2 sm:grid-cols-1">
                        <div className="single-slider">

                            <Carousel autoplay={true} wrapAround={true} slidesToShow={1} animation={'fade'}
                                renderCenterLeftControls={({ previousDisabled, previousSlide }) => (
                                    <button onClick={previousSlide} disabled={previousDisabled}>
                                        <FaArrowLeft></FaArrowLeft>
                                    </button>
                                )}
                                renderCenterRightControls={({ nextDisabled, nextSlide }) => (
                                    <button onClick={nextSlide} disabled={nextDisabled}>
                                        <FaArrowRight></FaArrowRight>
                                    </button>
                                )}
                            >

                                <div className="card w-full shadow-xl">
                                    <figure className="px-10 pt-10">
                                        <img src={car1} alt="Shoes" className="single-img" />
                                    </figure>

                                </div>
                                <div className="card w-full shadow-xl">
                                    <figure className="px-10 pt-10">
                                        <img src={car2} alt="Shoes" className="single-img" />
                                    </figure>

                                </div>
                                <div className="card w-full shadow-xl">
                                    <figure className="px-10 pt-10">
                                        <img src={car3} alt="Shoes" className=" single-img" />
                                    </figure>

                                </div>
                                <div className="card w-full shadow-xl">
                                    <figure className="px-10 pt-10">
                                        <img src={car4} alt="Shoes" className="single-img" />
                                    </figure>

                                </div>
                            </Carousel>

                            <div class="content">
                                <h3 class="title">My project name Car old selling web site </h3>
                                <p>
                                    1. login sing up Firebase Authentication
                                     Database Mongodb <br />
                                    2. My web site has Admin seller, user route<br />
                                    3. use vercel data server<br />
                                    4. react , node, mongodb , vercel, react route, jwt etc use my web site<br />
                                    5. My web site any on create account user , seller . User can buy car in this web site. Seller sell your car . Any user report Product .
                                </p>
                                
                            </div>
                        </div>

                        <div className="info md:ml-48">
                            <ul>
                                <li>
                                    <h4> Service :</h4> <span>Web Developer</span>
                                </li>
                                <li>
                                    <h4>Client name :</h4> <span>Themeforest</span>
                                </li>
                                <li>
                                    <h4>Start Date :</h4> <span>12-11-2022</span>
                                </li>
                                <li>
                                    <h4>End Date :</h4> <span>20-11-2022</span>
                                </li>
                                <li>
                                    <h4>Status :</h4> <span>Completed</span>
                                </li>
                                <li>
                                </li>
                            </ul>
                            <li>
                                <span><a href="https://cars-63d13.web.app/" target="_blank" >Live Side </a></span> |
                                <span><a href="https://github.com/amitpaultl/car-server-side" target="_blank">Server code</a></span>
                                | <span><a href="https://github.com/amitpaultl/car-client" target="_blank" >Client Code</a></span>
                            </li>
                            <li>
                            </li>
                        </div>
                        |
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Car;