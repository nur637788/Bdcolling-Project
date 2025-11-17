import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../Redux/authSlice";

export default function Login() {
    const dispatch = useDispatch();
    const { isLoggedIn } = useSelector(state => state.auth);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();

        if (email && password) {
            dispatch(login({ name: email }));
            setMessage(`Login successful! Welcome, ${email}`);
        } else {
            setMessage("Login failed! Fill in email & password");
        }
    };

    const handleLogout = () => {
        dispatch(logout());
        setMessage("Logged out successfully!");
        setEmail("");
        setPassword("");
    };

    return (
        <div className="max-w-md mx-auto p-6">
            <h1 className="text-2xl text-center font-bold mb-4">Login Form</h1>

            {isLoggedIn ? (
                <div className="text-center space-y-4">
                    <p className="text-green-600 font-semibold">{message}</p>
                    <button
                        onClick={handleLogout}
                        className="w-fit px-10 bg-red-600 hover:bg-red-700 hover:scale-95 duration-300 text-white py-2 rounded cursor-pointer">
                        Logout
                    </button>
                </div>
            ) : (
                <form onSubmit={handleLogin} className="space-y-4">
                    {message && <p className="text-red-600 font-semibold">{message}</p>}
                    <input
                        className="w-full border p-2 rounded"
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        className="w-full border p-2 rounded"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded"
                    >
                        Login
                    </button>
                </form>
            )}
        </div>
    );
}
