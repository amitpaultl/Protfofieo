import { Link } from 'react-router-dom';
import { FcGoogle, IconName } from "react-icons/fc";
import './Login.css'
import { toast } from 'react-hot-toast';
import { useContext } from 'react';
import { AuthProvider } from '../../Context/AuthContext';
import Loding from '../../Loding/Loding';

const Login = () => {
    // context
    const { emailSignIn, logOut, loading, setLoading, googleSingIn } = useContext(AuthProvider);

    // Email sign in
    const emailHandel = (e) => {
        e.preventDefault()
        const common = e.target;
        const email = common.email.value
        const password = common.password.value;
        console.log(email, password)
        // email sing in
        emailSignIn(email, password)
            .then((userCredential) => {
                const user = userCredential.user;

                setLoading(false)
                console.log(user);
                if (user?.emailVerified === false) {
                    logOut()
                        .then(() => {
                            // Sign-out successful.
                            
                        }).catch((error) => {
                            // An error happened.
                        });
                    toast.error('Email not Verified')
                } else {
                    toast.success('Successfully login')
                }
                setLoading(false)

            })
            .catch((error) => {
                // Handle Errors here.
                const errorMessage = error.message;
                toast.error(errorMessage)
                setLoading(false)
            });
    }

    // google handel
    const googleHandel = () => {
        googleSingIn()
            .then((result) => {
                const user = result.user;
                // Message 
                toast.success('Successfully Sign in')
                if (user?.emailVerified === false) {
                    logOut()
                        .then(() => {
                            // Sign-out successful.
                        }).catch((error) => {
                            // An error happened.
                        });
                    toast.error('Email not Verified')
                    setLoading(false)
                } else {
                    toast.success('Successfully login')
                }
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
                        <form onSubmit={emailHandel}>

                            <div className="form-group form-box">
                                <input type="email" name="email" className="form-control" placeholder="Email Address" />
                            </div>
                            <div className="form-group form-box">
                                <input type="password" name="password" className="form-control" autoComplete="off" placeholder="Password" />

                            </div>

                            <div className="form-group mb-0">
                                <button type="submit" className="btn-md btn-theme w-100">Login</button>
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

export default Login;