import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthProvider } from '../../Context/AuthContext';
import './Header.css'

const Header = () => {
    // context
    const { logOut, user } = useContext(AuthProvider);

    const singOut = () => {
        logOut()
            .then(() => {
                // Sign-out successful.
            }).catch((error) => {
                // An error happened.
            });
    }

    return (
        <div className='header-area'>
            <div className="container mx-auto">
                <div className="navbar text-slate-200 flex justify-between">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                <li><Link to={'/'}>Home</Link></li>


                                <li><a href="#aboutMe">About Me</a></li>

                            </ul>
                        </div>
                        <Link to={'/'} className="btn btn-ghost normal-case text-xl">Amit</Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {
                                user?.email ?
                                    <>
                                        <li><Link to={'/'}>Home</Link></li>
                                        <li><Link to={'/project'}>All Project</Link></li>
                                        <li><a href="#aboutMe">About Me</a></li>
                                        <li><Link onClick={singOut}>log out</Link></li>
                                    </> :
                                    <>
                                        <li><Link to={'/'}>Home</Link></li>
                                        <li><a href="#aboutMe">About Me</a></li>
                                        <li><Link to={'/signup'}>Sign Up</Link></li>
                                        <li><Link to={'/login'}>Login</Link></li>
                                    </>
                            }


                        </ul>
                    </div>

                </div>
            </div>
        </div >
    );
};

export default Header;