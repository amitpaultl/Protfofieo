import Carousel from 'nuka-carousel/lib/carousel';
import React from 'react';
import project from '../Asserts/image/005-target.png'
import user from '../Asserts/image/002-medical-mask.png'
import review from '../Asserts/image/053-success-1.png'
import team from '../Asserts/image/045-hacker.png'

const Slider = () => {
    const blog = false
    return (
        <div>

            {/* achievement */}
            {
                blog ?
                    <div className="achievement">
                        <div className="container mx-auto">
                            {/* <div className=" gap-4  grid  md:grid-cols-4 sm:grid-cols-1"> */}

                            <Carousel autoplay={true} wrapAround={true} slidesToShow={3} animation={'fade'}
                                renderCenterLeftControls={({ previousDisabled, previousSlide }) => (
                                    <button onClick={previousSlide} disabled={previousDisabled}>
                                        l
                                    </button>
                                )}
                                renderCenterRightControls={({ nextDisabled, nextSlide }) => (
                                    <button onClick={nextSlide} disabled={nextDisabled}>
                                        o
                                    </button>
                                )}
                            >

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
                            </Carousel>

                            {/* </div> */}
                        </div>
                    </div> :             <h2 className="title text-center text-5xl font-bold py-7 mb-9">
                    Coming soon ...
            </h2>
            }

        </div>
    );
};

export default Slider;