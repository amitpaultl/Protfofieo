import React from 'react';
import Carousel from 'nuka-carousel/lib/carousel';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import car1 from '../../Asserts/car/Screenshot_46.png'
import car2 from '../../Asserts/car/Screenshot_47.png'
import car3 from '../../Asserts/car/Screenshot_48.png'
import car4 from '../../Asserts/car/Screenshot_49.png'
import './Car.css'

const Traning = () => {
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
                                    <figure className=" pt-10">
                                        <img src={car1} alt="Shoes" className="single-img" />
                                    </figure>

                                </div>
                                <div className="card w-full shadow-xl">
                                    <figure className=" pt-10">
                                        <img src={car2} alt="Shoes" className="single-img" />
                                    </figure>

                                </div>
                                <div className="card w-full shadow-xl">
                                    <figure className=" pt-10">
                                        <img src={car3} alt="Shoes" className=" single-img" />
                                    </figure>

                                </div>
                                <div className="card w-full shadow-xl">
                                    <figure className=" pt-10">
                                        <img src={car4} alt="Shoes" className="single-img" />
                                    </figure>

                                </div>
                            </Carousel>

                            <div class="content">
                            <h3 class="title">Training website</h3>
                                <p>
                                    1 . withOut login Visit checkout page. <br />
                                    2 . It is learning platform website selling course. <br />
                                    3 . Have every single course page. <br />
                                    4 . Have login and singup page. <br />
                                    5 . Google , github and email sing up page.<br />

                                    It use css frameworks bootstrap . and use react libraries.<br />

                                    There is a longstanding debate about whether Node.js is a framework. Well more often than not, we do refer to it as one. However, Node.js is actually a JavaScript runtime environment — a platform to execute JavaScript codes on the server-side and make it portable. In layman’s terms, a runtime environment is where developers run a program.<br />

                                    In contrast, frameworks are used to build functions. Many developers have written frameworks for Node.js like Express.js, Meteor.js, and other tools to create unique capabilities for Node.js apps offering convenience to software engineers.<br />
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

export default Traning;