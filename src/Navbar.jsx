import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import "./App.css"

function Navbar() {
    return (
        
        <div class="bg-blue-950 flex p-4 text-amber-100">
            <div class="grow flex justify-center">
            <Link class=""to="/">
                <div class="px-6 hover:bg-cyan-800 rounded-lg p-2">
                    Home
                </div>
            </Link>
            <Link to="/blogs">
                <div class="px-6 hover:bg-cyan-800 rounded-lg p-2">
                    Blogs
                </div>
            </Link>
            <Link to="/contact">
                <div class="px-6 hover:bg-cyan-800 rounded-lg p-2">
                    Contact
                </div>
            </Link>
            </div>

            <div class="shrink ml-auto hover:bg-cyan-800">
                placeholder
                
            </div>
        </div>
    )

}

export default Navbar;