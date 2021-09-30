import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className=" flex justify-between items-center">
            <div >
                <img className="h-20" src="https://www.codester.com/static/uploads/items/000/017/17176/preview-xl.jpg" alt="logo" />
            </div>
            <nav>
                <NavLink activeClassName="bg-green-300 rounded-lg px-3 py-1" className="px-4 text-lg text-yellow-800 " to="/home">Home</NavLink>
                <NavLink activeClassName="bg-green-300 rounded-lg px-3 py-1" className="px-4 text-lg text-yellow-800" to="/about">About</NavLink>
                <NavLink activeClassName="bg-green-300 rounded-lg px-3 py-1" className="px-4 text-lg text-yellow-800" to="/contract">Contract</NavLink>
                <NavLink activeClassName="bg-green-300 rounded-lg px-3 py-1" className="px-4 text-lg text-yellow-800" to="/login">Login</NavLink>
            </nav>
        </div>
    );
};

export default Header;