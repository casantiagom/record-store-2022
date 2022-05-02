import { setegid } from "process";
import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// @ts-ignore
import { useAuth } from "../contexts/AuthContext";

const Signup = () => {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const passwordConfirmRef = useRef<HTMLInputElement | null>(null);
  // @ts-ignore
  const { signup } = useAuth();
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  // @ts-ignore
  const { currentUser } = useAuth();

  async function handleSubmit(e: any) {
    e.preventDefault();

    if (passwordRef.current?.value !== passwordConfirmRef.current?.value) {
      return setError("Passwords do not match");
    }
    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current?.value, passwordRef.current?.value);
      navigate("/");
    } catch {
      setError("Failed to create account");
    }
    setLoading(false);
  }

  return (
    <div>
      <div className="bg-grey-lighter min-h-screen flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center  px-2 pb-6">
          <form
            onSubmit={handleSubmit}
            className="bg-white px-6 py-8 rounded shadow-md text-black w-full"
          >
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
            <h1 className="mb-8 text-3xl text-center">Sign up</h1>
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="fullname"
              placeholder="Full Name"
            />

            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="email"
              placeholder="Email"
              ref={emailRef}
            />

            <input
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="password"
              placeholder="Password"
              ref={passwordRef}
            />
            <input
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="confirm_password"
              placeholder="Confirm Password"
              ref={passwordConfirmRef}
            />

            <button
              disabled={loading}
              type="submit"
              className="w-full text-center py-3  bg-green text-black hover:bg-green-dark focus:outline-none my-1inline-block text-sm px-4 leading-none border rounded text-peri-200 border-peri-200 hover:border-transparent hover:text-white hover:bg-peri-200 mt-4 lg:mt-0 mr-6"
            >
              Create Account
            </button>
          </form>

          <div className="text-grey-dark mt-6">
            Already have an account?
            <Link
              className="no-underline border-b border-blue text-blue"
              to="/login/"
            >
              Log in
            </Link>
            .
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
