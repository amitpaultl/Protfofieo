import React from 'react';

const Skill = () => {
    return (
        <div>

            <div className="py-24">
                <h2 className="title text-center text-5xl font-bold py-7 mb-9">
                    My <span className="color">Skills</span>
                    <span className="bg-text">SKILLS</span>
                </h2>
                <div className="container mx-auto">
                    <div className=" gap-8  grid  md:grid-cols-4 sm:grid-cols-1">

                        <div className="card w-full shadow-xl skill-test">
                            <h2>Expert</h2>
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                                <li>Bootstrap</li>
                                <li> Tailwind CSS</li>
                                <li>ReactJS</li>
                                <li>DaisyUI</li>
                            </ul>
                        </div>
                        <div className="card w-full shadow-xl skill-test">
                            <h2>Familiar</h2>
                            <ul>
                                <li> Material UI</li>
                                <li>Redux</li>
                                <li>Next.js</li>
                                <li>TypeScript</li>
                                <li> Tailwind CSS</li>
                                <li>ReactJS</li>
                                <li>DaisyUI</li>
                            </ul>
                        </div>
                        <div className="card w-full shadow-xl skill-test">
                            <h2>Comfortable</h2>
                            <ul>
                                <li>NodeJS</li>
                                <li>Express.js</li>
                                <li>MongoDB</li>
                                <li>WordPress</li>
                               
                            </ul>
                        </div>
                        <div className="card w-full shadow-xl skill-test">
                            <h2>Tools</h2>
                            <ul>
                                <li>Git & GitHub</li>
                                <li>NPM</li>
                                <li>Firebase</li>
                                <li>Netlify</li>
                                <li>Heroku</li>
                                <li>VS Code</li> 
                                <li>Adobe XD</li> 
                                <li>Figma</li> 
                                <li>Chrome DevTools</li>
                            </ul>
                        </div>





                    </div>

                </div>
            </div>
        </div>
    );
};

export default Skill;