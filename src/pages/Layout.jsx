import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar';

const Layout = () => {
    return (
        <div class="font-sans flex flex-col">
            <div class="flex-initial">
                <Navbar />
            </div>
            <div class="flex-grow bg-indigo-200">
                <Outlet />
            </div>
        
        </div>
    )
}

export default Layout;