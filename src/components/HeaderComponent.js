import React from 'react'
import logo from '../images/odd-logo.png';
import HeaderLink from './HeaderLinksComponent';

function Header() {
    return (
        <header className="sticky top-0 bg-white">
            <div className="bg-gray-100 min-w-full flex justify-evenly pr-10 pt-1 pb-1 
            font-semibold text-md tracking-wider text-center sm:text-right">
                <p className="hover:text-red-500 cursor-pointer">Sales: 888.000.000 </p> 
                <p className="hover:text-red-500 cursor-pointer">Support</p> 
                <p className="hover:text-red-500 cursor-pointer">Login</p>
            </div>
            <div className="flex flex-col sm:flex-row m-5 justify-evenly">
                <div className="flex flex-grow justify-evenly"><img src={logo} alt="logo" width="300"className="max-w-sm mb-2 object-contain"/></div>
                <div className="flex flex-grow justify-evenly max-w-2xl h-8 mt-2">
                    <HeaderLink title="Solutions"/>
                    <HeaderLink title="Products" />
                    <HeaderLink title="Success"/>
                    <HeaderLink title="About" />
                </div>
            </div> 
        </header>
    )
}

export default Header
