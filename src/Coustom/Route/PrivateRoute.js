import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthProvider } from '../Context/AuthContext';
import Loding from '../Loding/Loding';

const PrivateRoute = ({ children }) => {

    // usecontext
    const { user, loading } = useContext(AuthProvider)

    // location
    const location = useLocation()

    // // loading
    if (loading) {
        return (
            <Loding></Loding>
        )
    }

    if (user) {
        return children
    }

    return (
        <Navigate to='/login' state={{ from: location }} replace></Navigate>
    );

};

export default PrivateRoute;