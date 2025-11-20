import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function NewPassword() {
    const navigate = useNavigate()
    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");
    const [message, setMessage] = useState("");

    const handleNewPass = (e) => {
        e.preventDefault();

        // Password length check
        if (password.length < 5) {
            alert("Password must be at least 5 characters long!");
            return;
        }

        // Password match check
        if (password !== rePassword) {
            alert("Password doesn't match!");
            return;
        }

        // Success and input empty
        setMessage(`New Password Set Successful!✅ `);
        setPassword("")
        setRePassword("")
    };
    // Auto redirect login page after 2 seconds
    useEffect(() => {
        if (message) {
            const timer = setTimeout(() => {
                navigate('/login')
            }, 2000);

            return () => clearTimeout(timer);
        }
    });

    return (
        <div className="max-w-md mx-auto px-5 pb-5 bg-gray-100 rounded shadow-sm ">
            <h1 className="text-2xl text-center font-bold py-4">Set New Password</h1>

            <form onSubmit={handleNewPass} className="space-y-4">
                <input
                    className="w-full border p-2 rounded"
                    type="password"
                    placeholder="Enter new password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required />

                <input
                    className="w-full border p-2 rounded"
                    type="password"
                    placeholder="Confirm new password"
                    value={rePassword}
                    onChange={(e) => setRePassword(e.target.value)}
                    required />

                <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded cursor-pointer">
                    Create Account
                </button>
            </form>

            {message && <p className="text-green-600 font-semibold mt-3">{message}</p>}
        </div>
    );
}
