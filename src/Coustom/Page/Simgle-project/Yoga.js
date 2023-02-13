import React from 'react';
import Carousel from 'nuka-carousel/lib/carousel';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import car1 from '../../Asserts/car/Screenshot_50.png'
import car2 from '../../Asserts/car/Screenshot_51.png'
import car3 from '../../Asserts/car/Screenshot_52.png'
import car4 from '../../Asserts/car/Screenshot_53.png'
import './Car.css'

const Yoga = () => {
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

                            <div className="content">
                                <h3 className="title">Yoga Server website</h3>
                                <p>
                                1 . Authentication login system email, google <br />
                                2 . Blog page , 404 page add, <br />
                                3 . Add bootstrap ,react, firebase ,mongodb etc <br />
                                4 . Service add dasbord , use backend server add <br />
                                5 . Client review system ,and mongodb curd option on<br />

Any one user login in my web site. and take service it very easy login system. it is use mongodb databas and jwt token so it is very high security user data.
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
                                    <h4>Start Date :</h4> <span>22-10-2022</span>
                                </li>
                                <li>
                                    <h4>End Date :</h4> <span>29-10-2022</span>
                                </li>
                                <li>
                                    <h4>Status :</h4> <span>Completed</span>
                                </li>
                                <li>
                                </li>
                            </ul>
                            <li>
                                <span><a href="https://psychologist-799e7.firebaseapp.com/" target="_blank" >Live Side </a></span> |
                               
                                | <span><a href="https://github.com/amitpaultl/psychologist-client1" target="_blank" >Client Code</a></span>
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

export default Yoga;