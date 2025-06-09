import React from 'react';
import NavBar from '../components/NavBar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';
import LogInPage from '../pages/LogInPage';
import RegistrationPage from '../pages/RegistrationPage';

const HomeLayout = () => {
    return (
        <div>
           <NavBar></NavBar>
           <Outlet></Outlet>
           <Footer></Footer>
           <LogInPage></LogInPage>
           <RegistrationPage></RegistrationPage>
        </div>
    );
};

export default HomeLayout;