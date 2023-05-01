import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar';

const Layout = () => {
    return (
        <div class="font-sans">
        <Navbar />
        <Outlet />
        </div>
    )
}

export default Layout;