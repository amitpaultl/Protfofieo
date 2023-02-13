import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import img from '../../Asserts/image/img.png'
import { AuthProvider } from '../../Context/AuthContext';
import Loding from '../../Loding/Loding';
const AllProject = () => {
    // context
    const { loading, setLoading,  } = useContext(AuthProvider);
    const [project, setProject] = useState()

    useEffect(() => {
        fetch('https://server-three-fawn.vercel.app/project')
            .then(req => req.json())
            .then(data => setProject(data?.data))
    }, [])

    if (project === false) {
        setLoading(true)
    } else {
        setLoading(false)
    }

    if(loading){
        return <Loding></Loding>
    }

    console.log(project);

    return (
        <div className="py-5 container mx-auto" >
            <h2 className="title text-center text-5xl font-bold py-7 mb-9">
                All <span className="color">Project</span>
                <span className="bg-text">Project</span>
            </h2>
            <div className=" gap-8  grid  md:grid-cols-3 sm:grid-cols-1">

                {
                    project?.map(projects => <div key={projects._id} className="card card-compact project w-full  shadow-xl">
                    <div className="image-wrap">
                        <Link to={`/car/${projects._id}`}>

                            <img src={projects.image} alt="Shoes" />
                        </Link>

                    </div>
                    <div className="card-body">
                        <h2 className="card-title">{projects.name}</h2>

                    </div>
                </div>)
                }
                
            </div>
        </div>
    );
};

export default AllProject;