import React from "react";
import { Link } from "react-router-dom";

export default function Profile({ isOpen, onClose }) {

    if (!isOpen) return null; // Modal hidden

    return (
        <div
            className="absolute top-14 right-0 z-50"
            onClick={onClose} // Outside click closes modal
        >
            <div
                className="bg-gray-200 p-3 w-50 relative"
                onClick={(e) => e.stopPropagation()} >
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-xl font-bold">
                    ✕
                </button>

                <h2 className="text-xl font-bold mb-2">Your Profile</h2>
                <p className="text-gray-600 mb-4">
                    Welcome to your profile section!
                </p>
                <div className="flex flex-col gap-5 text-center">
                    <Link to='/editprofile' className="bg-gray-50 px-5 py-1 border border-red-100 rounded hover:border-red-300 hover:bg-gray-100 hover:scale-105 duration-300">Edit Profile</Link>
                    <Link to='/admin' className="bg-gray-50 px-5 py-1 border border-red-100 rounded hover:border-red-300 hover:bg-gray-100 hover:scale-105 duration-300">Dasboard</Link>

                </div>


            </div>
        </div>
    );
}
