import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// @ts-ignore
import { useAuth } from "../contexts/AuthContext";

const Login = () => {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const passwordConfirmRef = useRef<HTMLInputElement | null>(null);
  // @ts-ignore
  const { login } = useAuth();
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  async function handleSubmit(e: any) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current?.value, passwordRef.current?.value);
      navigate("/");
    } catch {
      setError("Failed to log in");
    }
    setLoading(false);
  }

  return (
    <div>
      <div className="flex justify-center">
        <div className="w-full max-w-md h-24 ">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 ">
            {error && (
              <div role="alert">
                <div className="bg-red-500 text-white text-center font-bold rounded-t px-4 py-2">
                  Danger
                </div>
                <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
                  <p>{error}</p>
                </div>
              </div>
            )}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
              ></input>
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="******************"
              ></input>
              <button
                disabled={loading}
                type="submit"
                className="w-full text-center py-3  bg-green text-black hover:bg-green-dark focus:outline-none my-1inline-block text-sm px-4 leading-none border rounded text-peri-200 border-peri-200 hover:border-transparent hover:text-white hover:bg-peri-200 mt-4 lg:mt-0 mr-6"
              >
                Log In
              </button>
            </div>
            <div className="flex items-center justify-between">
              <Link
                className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                to="/signup"
              >
                Sign In
              </Link>
              <a
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                href="#"
              >
                Forgot Password?
              </a>
            </div>
          </form>
          <p className="text-center text-gray-500 text-xs">
            &copy;2022 carlos santiago
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
