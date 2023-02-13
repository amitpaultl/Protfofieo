import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import img from '../../Asserts/image/img.png'
import { AuthProvider } from '../../Context/AuthContext';
import Loding from '../../Loding/Loding';
const Project = ({data}) => {
    const {image,name,_id}=data
    return (
        <div>
            
            <div className="card card-compact project w-full  shadow-xl">
                <div className="image-wrap">
                    <Link to={`/car/${_id}.`}>
                    
                        <img src={image} alt="Shoes" />
                    </Link>

                </div>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>

                </div>
            </div>
        </div>
    );
};

export default Project;