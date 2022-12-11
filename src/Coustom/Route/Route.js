import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Main/Main';
import Home from '../Page/Home/Home';
import Car from '../Page/Simgle-project/Car';
import Traning from '../Page/Simgle-project/Traning';
import Yoga from '../Page/Simgle-project/Yoga';

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
                path:'/car',
                element:<Car></Car>
            },
            {
                path:'/Training',
                element:<Traning></Traning>
            },
            {
                path:'/yoga',
                element:<Yoga></Yoga>
            },
        ]
        
    }
])