import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../../Redux/authSlice";
import { Link } from "react-router-dom";

export default function Logins() {
    const dispatch = useDispatch();
    const { isLoggedIn } = useSelector(state => state.auth);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();

        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Empty check
        if (!email || !password) {
            alert("Fill all fields!");
            return;
        }

        // Email validation
        if (!regex.test(email)) {
            alert("Enter a valid email!");
            return;
        }

        // Password length check
        if (password.length < 5) {
            alert("Password must be at least 5 characters!");
            return;
        }

        dispatch(login({ name: email }));
        setMessage(`Login successful! Welcome, ${email}`);
    };

    const handleLogout = () => {
        dispatch(logout());
        setMessage("Logged out successfully!");
        setEmail("");
        setPassword("");
    };

    // Auto remove message after 3 seconds
    useEffect(() => {
        if (message) {
            const timer = setTimeout(() => {
                setMessage("");
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [message]);

    return (
        <div className="max-w-md mx-auto px-5 pb-5 bg-gray-100 rounded shadow-sm">
            <h1 className="text-2xl text-center font-bold py-4">Login Form</h1>

            {isLoggedIn ? (
                <div className="text-center space-y-4">
                    {message && <p className="text-green-600 font-semibold">{message}</p>}
                    <button
                        onClick={handleLogout}
                        className="w-fit px-10 bg-red-600 hover:bg-red-700 hover:scale-95 duration-300 text-white py-2 rounded cursor-pointer">
                        Logout
                    </button>
                </div>
            ) : (
                <form onSubmit={handleLogin} className="space-y-4">
                    {message && <p className="text-green-600 font-semibold">{message}</p>}
                    <input
                        className="w-full border p-2 rounded"
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required />

                    <input
                        className="w-full border p-2 rounded"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required />
                    <Link to="/forgetpass" className="flex items-end justify-end -mt-3 text-blue-800 hover:text-blue-700 font-medium">Forget Password</Link>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded cursor-pointer">
                        Login
                    </button>
                </form>
            )}

            <p className="text-center mt-5">
                Don’t have account?{" "}
                <Link to="/register" className="font-semibold text-blue-500 hover:text-blue-600">
                    Register
                </Link>
            </p>
        </div>
    );
}
