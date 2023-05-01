import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import "./App.css"

function Navbar() {
    return (
        <div class="bg-blue-950 flex flex-row justify-center p-4 text-amber-100">
            <Link class=""to="/">
                <div class="flex-shrink-0 px-6 hover:bg-cyan-800 rounded-lg p-2">
                    Home
                </div>
            </Link>
            <Link to="/blogs">
                <div class="flex-shrink-0 px-6 hover:bg-cyan-800 rounded-lg p-2">
                    Blogs
                </div>
            </Link>
            <Link to="/contact">
                <div class="flex-shrink-0 px-6 hover:bg-cyan-800 rounded-lg p-2">
                    Contact
                </div>
            </Link>
        </div>
    )

}

export default Navbar;