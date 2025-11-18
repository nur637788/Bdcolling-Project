import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useSelector } from "react-redux";

function Header() {
    const [open, setOpen] = useState(false);
    const totalQuantity = useSelector(state => state.cart.totalQuantity);
    const { isLoggedIn } = useSelector(state => state.auth);


    const links = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Projects", path: "/projects" },
        { name: "Contact", path: "/contact" },
        { name: isLoggedIn ? "LogOut" : "Login", path: "/login" }
    ];

    return (
        <div className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
            <div className="flex justify-between items-center py-3 px-5 md:px-10">

                {/* Logo */}
                <h1 className="text-2xl font-semibold italic cursor-pointer hover:animate-pulse">
                    <span className="text-red-500 font-extrabold">MY</span>{" "}
                    <span className="text-blue-500 font-bold">APP</span>s
                </h1>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-10">
                    {links.map(link => (
                        <NavLink
                            key={link.name}
                            to={link.path}
                            className={({ isActive }) =>
                                `hover:font-bold hover:scale-105 transition-all duration-300 
                                ${isActive ? "text-blue-600 font-semibold" : ""}`
                            }>
                            {link.name}
                        </NavLink>
                    ))}
                </div>

                {/* Desktop Button */}
                <div className="flex gap-5">
                    <Link to="/cart" className="relative hidden md:block">
                        <span className="text-2xl">🛒</span>

                        <span className="absolute -top-1 -right-2 bg-red-600 text-white text-[10px] px-1 rounded-full">
                            {totalQuantity}
                        </span>
                    </Link>
                    <Link to="" className="relative hidden md:block">
                        <img className=" w-7 h-7 rounded-full border" src="https://www.shutterstock.com/image-vector/illustration-smiling-young-man-brown-600nw-2575185307.jpg" alt="" />
                    </Link>
                </div>

                {/* Mobile Hamburger */}
                <button
                    className="block md:hidden"
                    onClick={() => setOpen(!open)}
                >
                    {open ? <X size={28} /> : <Menu size={28} />}
                </button>

            </div>

            {/* Mobile Dropdown Menu */}
            <div
                className={`md:hidden bg-white overflow-hidden transition-all duration-300 
                ${open ? "max-h-80 shadow-md" : "max-h-0"}`}
            >
                <div className="flex flex-col gap-5 py-3 px-5">

                    {links.map(link => (
                        <NavLink
                            key={link.name}
                            to={link.path}
                            onClick={() => setOpen(false)}
                            className={({ isActive }) =>
                                `block hover:font-bold transition-all duration-300 
                                ${isActive ? "text-blue-600 font-semibold" : ""}`
                            }
                        >
                            {link.name}
                        </NavLink>
                    ))}

                    <div className="flex gap-4">
                        <Link to="" className="relative">
                            <span className="text-2xl">🛒</span>
                            <span className="absolute -top-2 -right-3 bg-red-600 text-white text-sm px-2 rounded-full">
                                {totalQuantity}
                            </span>
                        </Link>
                        <Link to="" className="relative">
                            <img className=" w-10 h-10 rounded-full border" src="https://www.shutterstock.com/image-vector/illustration-smiling-young-man-brown-600nw-2575185307.jpg" alt="" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
