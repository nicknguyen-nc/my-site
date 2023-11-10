import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';


const Layout = () => {
    return (
        <div class="font-sans flex flex-col">
            <div class="flex-grow">
                <Navbar />
            </div>
            <div class="flex-grow h-full">
                <Outlet />
            </div>
            <div class="bottom-0 relative flex-grow">
                <Footer />
            </div>
        </div>
    )
}

export default Layout;