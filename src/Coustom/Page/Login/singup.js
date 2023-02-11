import React, { useContext } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { FcGoogle, IconName } from "react-icons/fc";
import './Login.css'
import { toast } from 'react-hot-toast';
import Loding from '../../Loding/Loding';
import { AuthProvider } from '../../Context/AuthContext';
const Signup = () => {

    // context
    const { signInWithGoogle, emailSignUp, emailVerify, UserNameAdd, logOut, loading, setLoading } = useContext(AuthProvider);
    // navigate
    const navigate = useNavigate();

    // Email login 
    const emailLogin = (e) => {
        e.preventDefault()
        const common = e.target
        const name = common.name.value
        const email = common.email.value
        const password = common.password.value
        const userInfo = {
            name, email, password
        }
        // email singUp
        emailSignUp(email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // Name add
                UserNameAdd(name)
                    .then(() => {
                        // emailVerify
                        emailVerify()
                            .then(() => {

                                logOut()
                                    .then(() => {
                                        // Sign-out successful.
                                        navigate('/login')
                                    }).catch((error) => {
                                        // An error happened.
                                    });
                                toast.success('Please Check your Email')
                                setLoading(false)
                                // console.log(data);
                                // fetch user post

                            });
                    }).catch((error) => {
                        // Handle Errors here.
                        const errorMessage = error.message;
                        toast.error(errorMessage)
                        setLoading(false)
                    })

            })
            .catch((error) => {
                // Handle Errors here.
                const errorMessage = error.message;
                toast.error(errorMessage)
                setLoading(false)
            });


    }

    // Google sing up
    const googleHandel = () => {
        signInWithGoogle()
            .then((result) => {
                // Message 
                toast.success('Successfully Sign Up')
                setLoading(false)
            }).catch((error) => {
                // Handle Errors here.
                const errorMessage = error.message;
                toast.error(errorMessage)
                setLoading(false)
            });
    }

    // loading
    if (loading) {
        return <Loding></Loding>
    }

    return (
        <div>
            <div className="container mx-auto py-20">
                <div className="form-section">

                    <div className="btn-section">
                        <Link to={'/login'} className="link-btn">Login</Link>
                        <Link to={'/signup'} className="link-btn active">Register</Link>
                    </div>
                    <div className="login-inner-form">
                        <form onSubmit={emailLogin}>
                            <div className="form-group form-box">
                                <input type="text" name="name" required className="form-control" placeholder="Full Name" />
                            </div>
                            <div className="form-group form-box">
                                <input type="text" name="company" required className="form-control" placeholder="Your Company Name" />
                            </div>
                            <div className="form-group form-box">
                                <input type="text" name="visit" required className="form-control" placeholder="Purpose of Visit" />
                            </div>
                            <div className="form-group form-box">
                                <input type="tel" name="tel" required className="form-control" placeholder="Phone" />
                            </div>
                            <div className="form-group form-box">
                                <input type="email" name="email" required className="form-control" placeholder="Email Address" />
                            </div>
                            <div className="form-group form-box">
                                <input type="password" name="password" className="form-control" autoComplete="off" placeholder="Password" required />

                            </div>

                            <div className="form-group mb-0">
                                <button type="submit" className="btn-md btn-theme w-100">Register</button>
                            </div>
                        </form>
                        <div className="extra-login">
                            <span>Or Login With</span>
                        </div>
                        <ul className="social-list ">
                            <li className='mt-6'><Link onClick={googleHandel}><FcGoogle></FcGoogle></Link></li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;