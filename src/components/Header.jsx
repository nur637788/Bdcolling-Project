import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useSelector } from "react-redux";
import { FaCartArrowDown, FaRegHeart } from "react-icons/fa";
import Profile from "./Profile/Profile";
import { CgProfile } from "react-icons/cg";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [profileOpen, setProfileOpen] = useState(false);

    const totalQuantity = useSelector(state => state.cart.totalQuantity);
    const { isLoggedIn } = useSelector(state => state.auth);

    const links = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Contact", path: "/contact" },
        { name: isLoggedIn ? "LogOut" : "Login", path: "/login" }
    ];

    const handleMobileLinkClick = () => {
        setMenuOpen(false);
    };

    return (
        <div className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
            <div className="flex justify-between items-center py-3 px-5 md:px-10">

                {/* Logo */}
                <Link to='/'>
                    <h1 className="text-2xl font-semibold italic hover:animate-pulse">
                        <span className="text-red-500 font-extrabold">MY</span>{" "}
                        <span className="text-blue-500 font-bold">APP</span>s
                    </h1>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-10">
                    {links.map(link => (
                        <NavLink key={link.name} to={link.path}
                            className={({ isActive }) =>
                                `hover:font-bold hover:scale-105 transition-all duration-300 
                                ${isActive ? "text-blue-600 font-semibold" : ""}`}>
                            {link.name}
                        </NavLink>
                    ))}
                </div>

                {/* Desktop Icons */}
                <div className="flex gap-5 items-center">
                    <Link to="favorite" className="relative hidden md:block text-2xl hover:scale-95  duration-300">
                        <FaRegHeart />
                    </Link>

                    <Link to="/cart" className="relative hidden md:block hover:scale-95  duration-300">
                        <FaCartArrowDown className="text-2xl" />
                        <span className="absolute -top-1 -right-2 bg-red-600 text-white text-[10px] px-1 rounded-full">
                            {totalQuantity}
                        </span>
                    </Link>

                    {/* Profile Button */}
                    <button onClick={() => setProfileOpen(true)} className="hidden md:block text-2xl cursor-pointer hover:scale-95  duration-300">
                        <CgProfile className="text-2xl"/>
                    </button>
                </div>

                {/* Mobile Hamburger */}
                <button className="block md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Dropdown */}
            <div
                className={`md:hidden bg-white overflow-hidden transition-all duration-300 
                ${menuOpen ? "max-h-80 shadow-md" : "max-h-0"}`}>
                <div className="flex flex-col gap-3 py-2 px-5">

                    {/* Menu Links */}
                    {links.map(link => (
                        <NavLink key={link.name} to={link.path}
                            onClick={handleMobileLinkClick}
                            className={({ isActive }) =>
                                `block hover:font-bold transition-all duration-300 
                                ${isActive ? "text-blue-600 font-semibold" : ""}`}>
                            {link.name}
                        </NavLink>
                    ))}

                    {/* Mobile Icons */}
                    <div className="flex items-center gap-4">
                        <Link to="favorite" className="relative text-2xl" onClick={handleMobileLinkClick}>
                            <FaRegHeart />
                        </Link>

                        <Link to="/cart" className="relative" onClick={handleMobileLinkClick}>
                            <FaCartArrowDown className="text-2xl" />
                            <span className="absolute -top-2 -right-3 bg-red-600 text-white text-sm px-2 rounded-full">
                                {totalQuantity}
                            </span>
                        </Link>

                        <button onClick={() => { setProfileOpen(true); handleMobileLinkClick(); }} className="cursor-pointer">
                            <CgProfile className="text-2xl"/>
                        </button>
                    </div>
                </div>
            </div>

            {/* Profile Popup */}
            <Profile isOpen={profileOpen} onClose={() => setProfileOpen(false)} />
        </div>
    );
}

export default Header;
