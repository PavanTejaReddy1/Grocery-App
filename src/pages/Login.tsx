import React, { useState } from "react";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import logo from "../assets/carrot.avif";
const Login = (): React.JSX.Element => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>): void => {
        e.preventDefault();

        console.log({
            email,
            password,
        });
    };

    return (
        <div className="min-h-screen bg-[#f8f8f8] flex items-center justify-center px-4">
            <div className="w-full max-w-[420px] bg-white rounded-2xl p-8 shadow-sm">
                {/* Logo */}
                <div className="flex justify-center mb-10">
                    <img src={logo} alt="logo" className="w-10 h-10 object-contain" />
                </div>

                {/* Heading */}
                <div>
                    <h1 className="text-[32px] font-semibold text-gray-900">Login</h1>

                    <p className="text-gray-400 text-sm mt-1">
                        Enter your emails and password
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="mt-10 space-y-8">
                    <div>
                        <label className="block text-sm text-gray-500 mb-3">Email</label>

                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="imshuvo97@gmail.com"
                            className="w-full border-b border-gray-200 pb-3 outline-none text-gray-700 bg-transparent"
                        />
                    </div>

                    <div>
                        <label className="block text-sm text-gray-500 mb-3">Password</label>

                        <div className="flex items-center border-b border-gray-200 pb-3">
                            <input
                                type={showPassword ? "text" : "password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="••••••••"
                                className="flex-1 outline-none bg-transparent"
                            />

                            <button
                                type="button"
                                onClick={() => setShowPassword((prev) => !prev)}
                            >
                                {showPassword ? (
                                    <FaRegEye className="text-gray-400" />
                                ) : (
                                    <FaRegEyeSlash className="text-gray-400" />
                                )}
                            </button>
                        </div>

                        <div className="flex justify-end mt-3">
                            <button
                                type="button"
                                className="text-sm text-gray-600 hover:text-black"
                            >
                                Forgot Password?
                            </button>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full h-14 bg-[#57B978] hover:bg-[#4ca76b] rounded-xl text-white font-medium transition"
                    >
                        Log In
                    </button>
                </form>

                <p className="text-center mt-8 text-sm text-gray-700">
                    Don't have an account?{" "}
                    <span className="text-[#57B978] font-medium cursor-pointer">
                        Signup
                    </span>
                </p>
            </div>
        </div>
    );
};

export default Login;