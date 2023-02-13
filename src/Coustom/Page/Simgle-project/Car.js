import React, { useContext, useEffect, useState } from 'react';
import Carousel from 'nuka-carousel/lib/carousel';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import car1 from '../../Asserts/car/Screenshot_41.png'
import car2 from '../../Asserts/car/Screenshot_42.png'
import car3 from '../../Asserts/car/Screenshot_43.png'
import car4 from '../../Asserts/car/Screenshot_44.png'
import './Car.css'
import { useParams } from 'react-router-dom';
import { AuthProvider } from '../../Context/AuthContext';
import Loding from '../../Loding/Loding';

const Car = () => {
    const { id } = useParams();

    // context
    const { loading, setLoading, } = useContext(AuthProvider);
    const [project, setProject] = useState()

    useEffect(() => {
        fetch(`https://server-three-fawn.vercel.app/project/${id}`)
            .then(req => req.json())
            .then(data => setProject(data))
    }, [])

    if (project === false) {
        setLoading(true)
    } else {
        setLoading(false)
    }

    if (loading) {
        return <Loding></Loding>
    }

    console.log(project);
    return (
        <div className=' py-24'>
            <div className="single-page">
                <div className="container mx-auto">
                    <div className=" gap-4  grid  md:grid-cols-2 sm:grid-cols-1">
                        <div className="single-slider">

                            {/* <Carousel autoplay={true} wrapAround={true} slidesToShow={1} animation={'fade'}
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
                            </Carousel> */}
                            <div className="image-wrap">
                                

                                    <img src={project?.image} alt="Shoes" />
                                

                            </div>
                            <div className="content">
                                <h3 className="title">{project?.name}</h3>
                                <p>
                                    {project?.deities}
                                </p>

                            </div>
                        </div>

                        <div className="info md:ml-48">
                            <ul>
                                <li>
                                    <h4> Service :</h4> <span>Web Developer</span>
                                </li>
                                <li>
                                    <h4>Client name :</h4> <span>{project?.client}</span>
                                </li>
                                <li>
                                    <h4>Start Date :</h4> <span>{project?.end}</span>
                                </li>
                                <li>
                                    <h4>End Date :</h4> <span>{project?.start}</span>
                                </li>
                                <li>
                                    <h4>Status :</h4> <span>{project?.status}</span>
                                </li>
                                <li>
                                </li>
                            </ul>
                            <li>
                                <span className=' hover:text-orange-600 text-sky-500 '><a href={project?.live} target="_blank" >Live Side </a></span> |
                                <span className=' hover:text-orange-600 text-sky-500'><a href={project?.server} target="_blank">Server code</a></span>
                                | <span className=' hover:text-orange-600 text-sky-500'><a href={project?.clientc} target="_blank" >Client Code</a></span>
                            </li>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Car;