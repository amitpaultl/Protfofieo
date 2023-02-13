import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Main/Main';
import AddProject from '../Page/AddProject/AddProject';
import AllProject from '../Page/AllProject/AllProject';
import Home from '../Page/Home/Home';
import Login from '../Page/Login/Login';
import Signup from '../Page/Login/singup';
import Car from '../Page/Simgle-project/Car';
import Traning from '../Page/Simgle-project/Traning';
import Yoga from '../Page/Simgle-project/Yoga';
import PrivateRoute from './PrivateRoute';

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/signup',
                element:<Signup></Signup>
            },
            {
                path:'/project',
                element:<PrivateRoute><AllProject></AllProject></PrivateRoute> 
            },
            {
                path:'/add',
                element:<AddProject></AddProject>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/car/:id',
                element:<PrivateRoute><Car></Car></PrivateRoute>
            },
            
        ]
        
    }
])