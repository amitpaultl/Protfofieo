import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Shere/Footer/Footer';
import Header from '../Shere/Header/Header';

const Main = () => {
    return (
        <div className='font-serif' style={{ backgroundColor: '#353353', color:'#fff' }}>
            
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;

